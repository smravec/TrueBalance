from flask import Flask, jsonify, request
from dotenv import load_dotenv
from flask_cors import CORS
import requests
import os

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

@app.route('/api/voiceflow', methods=['POST','GET'])
def voiceflow_interact():
    print("🚀 Voiceflow endpoint called!")
    try:
        # Get data from request
        data = request.get_json()
        print(f"📥 Received data: {data}")

        # Extract project_id and user_id
        project_id = os.getenv('VOICEFLOW_PROJECT_ID')
        api_key = os.getenv('VOICEFLOW_API_KEY')
        user_id = data.get('user_id', 'test-user-123')
        message = data.get('message', 'Hello')

        if not project_id or not api_key:
            return jsonify({
                'success': False,
                'error': 'Missing VOICEFLOW_PROJECT_ID or VOICEFLOW_API_KEY',
                'debug_info': {
                    'project_id_set': bool(project_id),
                    'api_key_set': bool(api_key),
                    'user_id': user_id,
                    'message': message
                }
            }), 400

        # Voiceflow Runtime API endpoint
        url = f"https://general-runtime.voiceflow.com/state/{project_id}/user/{user_id}/interact"

        # ✅ Correct payload format (array of actions)
        payload = {
            'action': [
                {
                    'type': 'event',
                    'payload': {
                        "event": {
                            "name": "api_call"
                        }
                    }
                }
            ]
        }

        # ✅ Correct headers
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'VF.{api_key}'
            # 'versionID': 'development'  # optional, remove if using published version
        }

        print(f"🔍 Debug Info:\n   URL: {url}\n   Headers: {headers}\n   Payload: {payload}")

        response = requests.post(url, json=payload, headers=headers)

        return jsonify({
            'success': True,
            'status_code': response.status_code,
            'voiceflow_response': response.json() if response.headers.get('content-type', '').startswith('application/json') else response.text,
            'debug_info': {
                'url': url,
                'project_id': project_id,
                'user_id': user_id,
                'message': message
            }
        })
    except requests.exceptions.RequestException as e:
        print(f"❌ Request failed: {str(e)}")
        return jsonify({'success': False, 'error': f'Request failed: {str(e)}'}), 500
    except Exception as e:
        print(f"❌ Internal error: {str(e)}")
        return jsonify({'success': False, 'error': f'Internal error: {str(e)}'}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
