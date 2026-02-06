import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const uploadResume = (formData) =>
  API.post("/api/resume/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const analyzeMatch = (data) =>
  API.post("/api/analysis/match", data);
