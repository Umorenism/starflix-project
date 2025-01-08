import { useLocation } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  description: string;
  url: string;
}

function PerformedTasks() {
  const location = useLocation();
  const tasks: Task[] = location.state?.tasks || []; // Explicitly typing `tasks`

  return (
    <div className="min-h-screen bg-gray-50 mt-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Performed Tasks
        </h1>
        {tasks.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-800">{task.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                <a
                  href={task.url}
                  className="text-blue-500 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Task
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No tasks found.</p>
        )}
      </div>
    </div>
  );
}

export default PerformedTasks;
