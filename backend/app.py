from flask import Flask, jsonify
from flask_cors import CORS

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

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
