from fastapi import APIRouter

router = APIRouter()

@router.post("/create")
def create_job(description: str):
    return {
        "message": "Job description received",
        "description": description
    }
