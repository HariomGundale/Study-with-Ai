export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          AI Study Dashboard
        </h1>

        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Study Notes</h2>

          <textarea
            placeholder="Paste your study notes..."
            className="w-full border rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={6}
          />

          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Summarize
            </button>

            <button className="bg-slate-200 text-slate-800 px-4 py-2 rounded-lg hover:bg-slate-300 transition">
              Generate Quiz
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p className="text-slate-600">
            Your summary will appear here...
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-2">Quiz</h2>
          <p className="text-slate-600">
            Quiz questions will appear here...
          </p>
        </div>

      </div>
    </div>
  );
}
