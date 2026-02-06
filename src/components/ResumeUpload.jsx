export default function ResumeUpload({ onSelect }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        Resume (PDF)
      </label>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => onSelect(e.target.files[0])}
        className="w-full text-sm border rounded-md p-2"
      />
    </div>
  );
}