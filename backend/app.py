from flask import Flask, jsonify, request
from dotenv import load_dotenv
from flask_cors import CORS
import requests
import os
from extract_pdf_text import extract_text_from_invoice, extract_text_from_pdf

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

@app.route('/api/extract-pdf-text', methods=['POST'])
def extract_pdf_text_route():
    """Extract text from uploaded PDF file and return it as JSON"""
    try:
        # Check if a file was uploaded
        if 'file' not in request.files:
            return jsonify({
                'success': False,
                'error': 'No file uploaded. Please include a PDF file in the "file" field.'
            }), 400
        
        file = request.files['file']
        
        # Check if file was actually selected
        if file.filename == '':
            return jsonify({
                'success': False,
                'error': 'No file selected'
            }), 400
        
        # Check if file is a PDF
        if not file.filename.lower().endswith('.pdf'):
            return jsonify({
                'success': False,
                'error': 'File must be a PDF'
            }), 400
        
        # Extract text from the uploaded PDF
        extracted_text = extract_text_from_pdf(file)
        
        if extracted_text is None:
            return jsonify({
                'success': False,
                'error': 'Failed to extract text from PDF. File may be corrupted or empty.'
            }), 422
        
        return jsonify({
            'success': True,
            'filename': file.filename,
            'text': extracted_text,
            'text_length': len(extracted_text)
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'An error occurred: {str(e)}'
        }), 500

@app.route('/api/upload-pdf', methods=['POST'])
def upload_pdf():
    """Upload PDF files and extract text from them"""
    try:
        # Check if files were uploaded
        if 'files' not in request.files:
            return jsonify({
                'success': False,
                'error': 'No files uploaded'
            }), 400
        
        files = request.files.getlist('files')
        
        if not files or all(file.filename == '' for file in files):
            return jsonify({
                'success': False,
                'error': 'No files selected'
            }), 400
        
        results = []
        
        for file in files:
            if file and file.filename.lower().endswith('.pdf'):
                try:
                    # Extract text from the uploaded PDF
                    extracted_text = extract_text_from_pdf(file)
                    
                    if extracted_text:
                        results.append({
                            'filename': file.filename,
                            'success': True,
                            'text': extracted_text,
                            'text_length': len(extracted_text)
                        })
                    else:
                        results.append({
                            'filename': file.filename,
                            'success': False,
                            'error': 'Failed to extract text from PDF'
                        })
                        
                except Exception as e:
                    results.append({
                        'filename': file.filename,
                        'success': False,
                        'error': f'Error processing file: {str(e)}'
                    })
            else:
                results.append({
                    'filename': file.filename if file else 'Unknown',
                    'success': False,
                    'error': 'File is not a PDF or is invalid'
                })
        
        # Check if any files were successfully processed
        successful_files = [r for r in results if r['success']]
        
        return jsonify({
            'success': len(successful_files) > 0,
            'message': f'Processed {len(successful_files)} out of {len(results)} files successfully',
            'results': results,
            'total_files': len(results),
            'successful_files': len(successful_files)
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'An error occurred: {str(e)}'
        }), 500

@app.route('/api/dummy-voiceflow', methods=['POST'])
def dummy_voiceflow():
    """Dummy Voiceflow endpoint that accepts text and returns deductible status"""
    try:
        # Get JSON data from request
        data = request.get_json()
        
        if not data or 'text' not in data:
            return jsonify({
                'success': False,
                'error': 'Missing "text" field in request body'
            }), 400
        
        text = data.get('text', '')
        
        # For now, just return deductible: true for any text
        # In a real implementation, this would analyze the text
        return jsonify({
            'deductible': False,
            'text_analyzed': text,
            'analysis': 'This expense appears to be VAT deductible based on Finnish tax law.'
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
                'Content-Type': 'application/json',
                'versionID': 'production'
            }
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
