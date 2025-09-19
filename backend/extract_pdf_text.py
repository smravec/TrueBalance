import PyPDF2
import os

def extract_text_from_invoice():
    """
    Extract all text from Invoice1.pdf and return it as a string.
    
    Returns:
        str: Extracted text from the PDF, or None if extraction fails
    """
    # Path to the invoice PDF
    pdf_path = os.path.join(os.path.dirname(__file__), "invoices", "Invoice1.pdf")
    
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            
            text = ""
            for page in pdf_reader.pages:
                page_text = page.extract_text()
                text += page_text + "\n"
                
            return text.strip()
                
    except FileNotFoundError:
        return None
    except Exception as e:
        return None

# Example usage:
if __name__ == "__main__":
    extracted_text = extract_text_from_invoice()
    if extracted_text:
        print(extracted_text)