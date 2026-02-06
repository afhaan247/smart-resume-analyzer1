def generate_recommendations(missing_skills: list, final_score: float):
    recommendations = []

    if final_score < 50:
        recommendations.append(
            "Resume has low relevance. Consider tailoring it specifically for this role."
        )

    if missing_skills:
        recommendations.append(
            f"Consider adding projects or experience with: {', '.join(missing_skills)}"
        )

    if final_score >= 80:
        recommendations.append(
            "Strong match. Resume aligns well with the job requirements."
        )

    return recommendations
