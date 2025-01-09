import axios from "axios";
import { useEffect, useState } from "react";

interface CampaignType {
  adType: string;
  description: string;
  completedCount: number;
  createdAt: number;
  pricePerAction: number;
  targetCount: number;
  taskUrl: string;
  status: string;
}

interface TaskTitleProps {
  tasktitle: string;
}

const TaskDetailPage: React.FC<TaskTitleProps> = ({ tasktitle }) => {
  const [taskList, setTaskList] = useState<CampaignType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTaskList = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://starfaceapi.site/api/marketPlace/ads?page=1&limit=5&adsType=${tasktitle}`
        );

        if (response.data && Array.isArray(response.data.campaigns)) {
          setTaskList(response.data.campaigns);
          console.log("Fetched campaigns:", response.data.campaigns); // Debugging
        } else {
          setError("Unexpected response format from API.");
        }
      } catch (error) {
        setError("Failed to fetch tasks. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTaskList();
  }, [tasktitle]);

  return (
    <div className="min-h-screen bg-gray-50 mt-14 p-4">
      <h1 className="text-2xl font-bold font-roboto text-gray-800 mb-4">
        Welcome to Task List
      </h1>
      <p className="text-gray-600 mb-6">
        Earn rewards by engaging with pages and posts from different social
        media accounts.
      </p>

      {/* Loading State */}
      {loading && <p className="text-gray-600">Loading tasks...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Task List */}
      <div className="grid md:grid-cols-2 gap-4">
        {taskList.map((task, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-4xl font-semibold text-gray-800">
                {task.adType}
              </h3>

              <p className="bg-green-100 py-2 px-2 rounded-md">
                ${task.pricePerAction} per task
              </p>
              <span></span>
            </div>
            <p className="text-gray-600 mt-2 text-xl">{task.description}</p>
            <p className="text-gray-600 mt-4 text-xl">
              {task.createdAt
                ? new Date(task.createdAt).toLocaleDateString()
                : "Date not available"}
            </p>
            <a
              href={task.taskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-pink-600 py-2 px-2 rounded-md text-white  inline-block font-bold hover:underline"
            >
              Perform Task
            </a>
          </div>
        ))}
      </div>

      {/* No Tasks Found */}
      {!loading && !error && taskList.length === 0 && (
        <p className="text-gray-600">No tasks available at the moment.</p>
      )}
    </div>
  );
};

export default TaskDetailPage;
