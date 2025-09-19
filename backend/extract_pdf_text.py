import PyPDF2
import os

# Optional import for Flask file uploads
try:
    from werkzeug.datastructures import FileStorage
    HAS_WERKZEUG = True
except ImportError:
    HAS_WERKZEUG = False

def extract_text_from_pdf(pdf_file):
    """
    Extract all text from a PDF file and return it as a string.
    
    Args:
        pdf_file: Can be a file path (str), file-like object, or Werkzeug FileStorage object
    
    Returns:
        str: Extracted text from the PDF, or None if extraction fails
    """
    try:
        # Handle different input types
        if isinstance(pdf_file, str):
            # File path provided
            with open(pdf_file, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                return _extract_text_from_reader(pdf_reader)
                
        elif HAS_WERKZEUG and hasattr(pdf_file, 'stream') and hasattr(pdf_file, 'filename'):
            # Werkzeug FileStorage object (from Flask file upload)
            pdf_reader = PyPDF2.PdfReader(pdf_file.stream)
            return _extract_text_from_reader(pdf_reader)
            
        else:
            # Assume it's a file-like object
            pdf_reader = PyPDF2.PdfReader(pdf_file)
            return _extract_text_from_reader(pdf_reader)
                
    except FileNotFoundError:
        return None
    except Exception as e:
        print(f"Error extracting text from PDF: {str(e)}")
        return None

def _extract_text_from_reader(pdf_reader):
    """
    Helper function to extract text from a PyPDF2 PdfReader object.
    
    Args:
        pdf_reader: PyPDF2.PdfReader object
        
    Returns:
        str: Extracted text from all pages
    """
    text = ""
    for page in pdf_reader.pages:
        page_text = page.extract_text()
        text += page_text + "\n"
    
    return text.strip()

def extract_text_from_invoice():
    """
    Legacy function for backward compatibility.
    Extract all text from Invoice1.pdf and return it as a string.
    
    Returns:
        str: Extracted text from the PDF, or None if extraction fails
    """
    # Path to the invoice PDF
    pdf_path = os.path.join(os.path.dirname(__file__), "invoices", "Invoice1.pdf")
    return extract_text_from_pdf(pdf_path)

# Example usage:
if __name__ == "__main__":
    extracted_text = extract_text_from_invoice()
    if extracted_text:
        print(extracted_text)