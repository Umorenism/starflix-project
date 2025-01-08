import axios from "axios";
import { useEffect, useState } from "react";

interface CampaignType {
  name: string;
  description: string;
  image: string;
  link: string;
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
          console.log(response.data.campaigns);
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
            <img
              src={task.image}
              alt={task.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{task.name}</h3>
            <p className="text-gray-600 mt-2">{task.description}</p>
            <a
              href={task.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              Go to Task
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
