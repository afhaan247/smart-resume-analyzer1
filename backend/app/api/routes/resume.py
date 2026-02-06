from fastapi import APIRouter, UploadFile, File

router = APIRouter()

@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    # temporary dummy response
    return {
        "text": "python sql fastapi docker aws"
    }
