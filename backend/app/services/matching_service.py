from app.ai.skill_extractor import extract_skills
from app.ai.similarity import calculate_similarity

def analyze_match(resume_text: str, job_text: str):
    resume_skills = extract_skills(resume_text)
    job_skills = extract_skills(job_text)

    matched_skills = list(set(resume_skills) & set(job_skills))
    missing_skills = list(set(job_skills) - set(resume_skills))

    # Scores
    similarity_score = calculate_similarity(resume_text, job_text)

    skill_score = 0
    if len(job_skills) > 0:
        skill_score = (len(matched_skills) / len(job_skills)) * 100

    # Weighted final score
    final_score = round(
        (skill_score * 0.5) + (similarity_score * 0.5),
        2
    )

    return {
        "final_score": final_score,
        "similarity_score": similarity_score,
        "skill_match_percentage": round(skill_score, 2),
        "matched_skills": matched_skills,
        "missing_skills": missing_skills
    }
