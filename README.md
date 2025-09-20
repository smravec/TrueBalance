# TrueBalance - AI VAT Write-offs

Instantly see if your expenses are VAT-deductible with agentic AI

### Installation

1. **Clone and install dependencies:**
```bash
git clone https://github.com/samuli-ukkola/TrueBalance.git
cd TrueBalance
npm install
```

2. **Start frontend**
```bash
npm run dev
```

3. **Start backend**
```bash
cd backend
pip install -r requirements.txt
python app.py
```

The frontend will be available at http://localhost:8080

### 📋 Key Technical Components

Document Processing – Extracts and cleans text from PDFs with precision.

Embedding Model – Domain-tuned embeddings optimized for legal and tax content.

Vector Database – Provides fast, semantic search across legal precedents.

Voiceflow Integration – Manages conversation flow and preserves context.

Legal Reasoning Engine – Interprets retrieved material to deliver clear, reliable tax deductibility insights.

## ⚡ How it all comes together:
These components work in unison to retrieve the most relevant legal precedents and apply them to generate confident, legally informed assessments.

## 📝 LicenseMIT License