import React, { useState, useEffect } from "react";
import axios from "axios";

// Defining the TaskType interface for task objects
interface TaskType {
  id: number;
  type: string;
  title: string;
  reward: string;
  description: string;
  url: string;
  remaining: number;
}

interface FormData {
  type: string;
  url: string;
  reward: string;
  spots: string;
  title: string;
  description: string;
}

function MarketPlace() {
  const [currentTab, setCurrentTab] = useState<string>("offer");
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 1,
      type: "page",
      title: "Tech Reviews Daily",
      reward: "5",
      description: "Like our tech review page and follow for daily content",
      url: "https://facebook.com/techreviews",
      remaining: 50,
    },
    {
      id: 2,
      type: "post",
      title: "New iPhone Review",
      reward: "2",
      description: "Like and share our latest iPhone review post",
      url: "https://facebook.com/post/123",
      remaining: 25,
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    type: "page",
    url: "",
    reward: "",
    spots: "",
    title: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      ...formData,
      remaining: parseInt(formData.spots),
    };
    setTasks([...tasks, newTask]);
    setCurrentTab("offer");
    setFormData({
      type: "page",
      url: "",
      reward: "",
      spots: "",
      title: "",
      description: "",
    });
  };

  const completeTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, remaining: task.remaining - 1 } : task
      )
    );
  };

  // Fetch Task Types from the API
  useEffect(() => {
    const fetchTaskTypes = async () => {
      try {
        const response = await axios.get("https://api.example.com/task-types");
        // Use the response here
        console.log(response.data); // For example, log the data
        setTasks(response.data.data.taskTypes);
      } catch (error) {
        console.error("Error fetching task types:", error);
      }
    };

    fetchTaskTypes();
  }, []);

  return (
    <div>
      <div className="header header-fixed bg-white">
        <div className="container">
          <div className="header-content">
            <div className="left-content me-3">
              <a href="/" className="text-decoration-none back-btn">
                <i className="icon feather icon-chevron-left"></i>
                <span>MarketPlace</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 mt-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-2xl font-bold font-roboto text-gray-800 mb-2">
              Welcome to Marketplace
            </h1>
            <p className="text-gray-600 mb-4">
              Earn rewards by engaging with pages and posts from different
              social media accounts
            </p>
            <div className="flex gap-4 border-b mb-6">
              <a href="#">
                <button
                  onClick={() => setCurrentTab("offer")}
                  className={`pb-2 px-4 ${
                    currentTab === "offer"
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-500"
                  }`}
                >
                  Earn
                </button>
              </a>
              <button
                onClick={() => setCurrentTab("create")}
                className={`pb-2 px-4 ${
                  currentTab === "create"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
              >
                Advertise
              </button>
            </div>

            {currentTab === "offer" ? (
              <div className="grid md:grid-cols-2 gap-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800">
                        {task.title}
                      </h3>
                      <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                        ${task.reward} reward
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {task.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {task.remaining} spots left
                      </span>
                      <button
                        onClick={() => completeTask(task.id)}
                        disabled={task.remaining <= 0}
                        className={`${
                          task.remaining > 0
                            ? "bg-pink-500 hover:bg-pink-600"
                            : "bg-gray-400"
                        } text-white px-4 py-2 rounded`}
                      >
                        {task.remaining > 0 ? "Complete Task" : "Completed"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Platform
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="page">youtube</option>
                    <option value="post">Facebook</option>
                    <option value="post">Instagram</option>
                    <option value="post">App</option>
                    <option value="post">Twitter</option>
                    <option value="post">Telegram</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Task Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="page">Followers</option>
                    <option value="post">Views</option>
                    <option value="post">Comments</option>
                    <option value="post">Subscribtions</option>
                    <option value="post">Likes</option>
                    <option value="post">Install</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1"></label>
                  <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border p-2"
                    placeholder="Paste your social media link here..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reward Amount ($)
                  </label>
                  <select
                    name="reward"
                    value={formData.reward}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border p-2"
                  >
                    <option value="page">Cost</option>
                    <option value="post">Quantity</option>
                  </select>
                  <input
                    type="number"
                    name="reward"
                    value={formData.reward}
                    onChange={handleInputChange}
                    className="w-full mt-3 rounded-lg border p-2"
                    placeholder="5"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border p-2"
                    placeholder="Enter task title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border p-2"
                    placeholder="Enter task description"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
                >
                  Create Task
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
