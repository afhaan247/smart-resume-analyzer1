import re

COMMON_SKILLS = [
    "python", "java", "c++", "javascript", "react", "node",
    "sql", "mysql", "postgresql", "mongodb",
    "fastapi", "django", "flask",
    "docker", "kubernetes",
    "aws", "azure", "gcp",
    "git", "linux", "rest", "api",
    "machine learning", "data analysis"
]

def extract_skills(text: str):
    text = text.lower()
    found_skills = []

    for skill in COMMON_SKILLS:
        pattern = r"\b" + re.escape(skill) + r"\b"
        if re.search(pattern, text):
            found_skills.append(skill)

    return list(set(found_skills))
