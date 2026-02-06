export default function ResultDashboard({ result }) {
  return (
    <div className="border-t pt-6 space-y-4">
      <h2 className="font-semibold text-gray-800">
        Match Result
      </h2>

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span>Match Score</span>
          <span className="font-medium">{result.score}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-rose-500 h-2 rounded-full transition-all duration-700"
            style={{ width: `${result.score}%` }}
          />
        </div>
      </div>

      <p className="text-sm text-gray-600">
        <strong>Summary:</strong> {result.summary}
      </p>

      <div>
        <p className="text-sm font-medium">Missing Skills</p>
        <ul className="list-disc ml-5 text-sm text-gray-600">
          {result.missing.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}