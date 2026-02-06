import { useState } from "react";
import axios from "axios";
import ResumeUpload from "../components/ResumeUpload";
import JobDescription from "../components/JobDescription";
import ResultDashboard from "../components/ResultDashboard";

export default function Dashboard() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!resumeFile || !jobDesc.trim()) {
      alert("Upload resume and enter job description");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("job_description", jobDesc);

      const res = await axios.post(
        "http://127.0.0.1:8000/api/analysis/match",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Backend error. Check if server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h1>Smart Resume Analyzer</h1>
      <p>AI-powered resume & job matching</p>

      <ResumeUpload onSelect={setResumeFile} />
      <JobDescription value={jobDesc} onChange={setJobDesc} />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "12px",
          width: "100%",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && <ResultDashboard result={result} />}
    </div>
  );
}
