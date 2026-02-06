export default function JobDescription({ value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        Job Description
      </label>
      <textarea
        rows="5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste job description here…"
        className="
          w-full border rounded-md p-3 text-sm
          focus:outline-none focus:ring-2 focus:ring-rose-300
        "
      />
    </div>
  );
}