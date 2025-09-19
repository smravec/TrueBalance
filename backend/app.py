from flask import Flask, jsonify, request
from dotenv import load_dotenv
from flask_cors import CORS
import requests
import os
from extract_pdf_text import extract_text_from_invoice

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'OK',
        'message': 'Flask API is running'
    })

@app.route('/api/products', methods=['GET'])
def products():
    return jsonify({
        'products': [
            {'id': 1, 'name': 'Sample Product 1', 'price': 29.99},
            {'id': 2, 'name': 'Sample Product 2', 'price': 49.99},
            {'id': 3, 'name': 'Sample Product 3', 'price': 19.99}
        ]
    })

@app.route('/api/extract-pdf-text', methods=['GET'])
def extract_pdf_text_route():
    """Extract text from Invoice1.pdf and return it as JSON"""
    try:
        extracted_text = extract_text_from_invoice()
        
        if extracted_text is None:
            return jsonify({
                'success': False,
                'error': 'Failed to extract text from PDF. File may not exist or be corrupted.'
            }), 404
        
        return jsonify({
            'success': True,
            'text': extracted_text
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'An error occurred: {str(e)}'
        }), 500

@app.route('/api/voiceflow', methods=['POST','GET'])
def voiceflow_interact():
    print("🚀 Voiceflow endpoint called!")
    try:
        # Get data from request
        print('getting data from request')
        # Extract project_id and user_id
        project_id = os.getenv('VOICEFLOW_PROJECT_ID')
        api_key = os.getenv('VOICEFLOW_API_KEY')
        user_id = '123'
        

        if not project_id or not api_key:
            return jsonify({
                'success': False,
                'error': 'Missing VOICEFLOW_PROJECT_ID or VOICEFLOW_API_KEY',
                'debug_info': {
                    'project_id_set': bool(project_id),
                    'api_key_set': bool(api_key),
                    'user_id': user_id
                }
            }), 400

        # Voiceflow Runtime API endpoint
        print('sending request to voiceflow')
        
        # Get the request data from the incoming request
        #data = request.get_json() or {}
        #message = data.get('message', 'Hello')
        
        # Create the proper Voiceflow request payload
        # "type": "event",
        #    "payload": {
        #        "name": "api_call"
        #    }
        #payload = {
        #    "userID": user_id,
        payload = {
            "userID": user_id,
            "type": "launch"
        }                
        print(f"📤 Sending to Voiceflow:")
        print(f"   URL: https://general-runtime.voiceflow.com/state/staging/user/{user_id}/interact")
        print(f"   Payload: {payload}")
        
        response = requests.post(
            f'https://general-runtime.voiceflow.com/state/{project_id}/user/{user_id}/interact',
            json=payload,
            headers={ 
                'Authorization': f'Bearer {api_key}',
                'Content-Type': 'application/json'
            },
        )
        
        print(f"📥 Voiceflow Response:")
        print(f"   Status: {response.status_code}")
        print(f"   Headers: {response.text}")

        return jsonify({
            'success': True,
            'status_code': response.status_code,
            'voiceflow_response': response.json() if response.headers.get('content-type', '').startswith('application/json') else response.text,
            'debug_info': {
                'url': f'https://general-runtime.voiceflow.com/state/{project_id}/user/{user_id}/interact',
                'project_id': project_id,
                'user_id': user_id,
                'message': 'Hello'
            }
        })
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {str(e)}")
        return jsonify({'success': False, 'error': f'Request failed: {str(e)}'}), 500
    except Exception as e:
        print(f"❌ Internal error: {str(e)}")
        return jsonify({'success': False, 'error': f'Internal error: {str(e)}'}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
