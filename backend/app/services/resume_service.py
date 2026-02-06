import os
from app.ai.parser import extract_text_from_pdf

UPLOAD_DIR = "uploads"

def save_and_parse_resume(file):
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        buffer.write(file.file.read())

    extracted_text = extract_text_from_pdf(file_path)

    return {
        "file_path": file_path,
        "extracted_text": extracted_text
    }
