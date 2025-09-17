#!/usr/bin/env python3
"""
Debug script for Voiceflow API
Run this to test your Voiceflow API configuration
"""

import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def test_voiceflow_api():
    print("🔍 Testing Voiceflow API Configuration\n")
    
    # Check environment variables
    project_id = os.getenv('VOICEFLOW_PROJECT_ID')
    api_key = os.getenv('VOICEFLOW_API_KEY')
    
    print(f"Project ID: {'✅ Set' if project_id else '❌ Missing'}")
    print(f"API Key: {'✅ Set' if api_key else '❌ Missing'}")
    
    if not project_id or not api_key:
        print("\n❌ Missing environment variables!")
        print("Create a .env file with:")
        print("VOICEFLOW_PROJECT_ID=your_project_id")
        print("VOICEFLOW_API_KEY=your_api_key")
        return
    
    # Test the API call
    user_id = "test-user-123"
    message = "Hello, this is a test message"
    
    url = f"https://general-runtime.voiceflow.com/state/{project_id}/user/{user_id}/interact"
    
    payload = {
        'action': {
            'type': 'text',
            'payload': message
        }
    }
    
    headers = {
        'Content-Type': 'application/json',
        'Authorization': api_key,  # Just the API key
    }
    
    print(f"\n📡 Making request to Voiceflow...")
    print(f"URL: {url}")
    print(f"Headers: {headers}")
    print(f"Payload: {payload}")
    
    try:
        response = requests.post(url, json=payload, headers=headers)
        
        print(f"\n📊 Response:")
        print(f"Status Code: {response.status_code}")
        print(f"Headers: {dict(response.headers)}")
        
        if response.headers.get('content-type', '').startswith('application/json'):
            print(f"Response Body: {response.json()}")
        else:
            print(f"Response Body: {response.text}")
            
        if response.status_code == 200:
            print("\n✅ Success! Voiceflow API is working correctly.")
        else:
            print(f"\n❌ Error: Voiceflow returned status {response.status_code}")
            
    except requests.exceptions.RequestException as e:
        print(f"\n❌ Request failed: {e}")
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")

if __name__ == "__main__":
    test_voiceflow_api()
