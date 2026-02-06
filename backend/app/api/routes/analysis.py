from fastapi import APIRouter, UploadFile, File, Form

router = APIRouter()

@router.post("/analysis/match")
async def match_resume(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):
    jd = job_description.lower()

    # Skills required by the job
    required_skills = [
        "python",
        "fastapi",
        "sql",
        "git",
        "docker",
        "aws",
        "react",
        "node",
        "ci/cd"
    ]

    matched = []
    missing = []

    for skill in required_skills:
        if skill in jd:
            matched.append(skill)
        else:
            missing.append(skill)

    # Score based on percentage match
    score = int((len(matched) / len(required_skills)) * 100)

    return {
        "score": score,
        "summary": f"Matched {len(matched)} out of {len(required_skills)} required skills.",
        "missing": missing
    }
