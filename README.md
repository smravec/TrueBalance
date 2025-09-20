# Team TrueBalance – VAT Deduction Assistant 

Manually checking whether an invoice is VAT-deductible is a slow and frustrating workflow: open the invoice, cross-check tax codes, search through vero.fi, and still risk making a mistake.  

**Our hackathon project automates this entire process.**  
1. The tool reads a PDF invoice.  
2. The data is sent into a **Voiceflow-powered AI agent**.  
3. Behind the scenes, we built a **(RAG) database** on top of the Finnish tax code from vero.fi.  
4. The AI agent reasons over the rules and returns a simple answer: *deductible or not deductible*.  

This transforms hours of searching and second-guessing into a process that takes only a few minutes-and makes tax paperwork much less boring.  

## Demo  
[Watch Demo](https://lut-my.sharepoint.com/:v:/g/personal/simon_mravec_student_lut_fi/EcCWhuvp56hGkqKJaZ7pE38BLp-2Q4prlTL7ObKbjKv5nA?e=zb9lKF)  

## Installation

1. **Clone and install dependencies:**
```bash
git clone https://github.com/smravec/TrueBalance.git
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
