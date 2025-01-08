import React, { useState, useEffect } from "react";
import axios from "axios";

interface TaskType {
  id: number;
  type: string;
  title: string;
  reward: string;
  description: string;
  url: string;
  remaining: number;
}

interface ListTask {
  adType: string;
  pricePerAction: number;
  earningPerAction: number;
  description: string;
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
  const [listType, setListType] = useState<ListTask[]>([]);
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

  // const handleInputChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

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

  useEffect(() => {
    const fetchTaskTypes = async () => {
      try {
        const response = await axios.get(
          "https://starfaceapi.site/api/marketPlace/ads-pricing"
        );
        // Check if the expected key exists in the response
        if (response.data && response.data.pricingDetails) {
          console.log(response.data.pricingDetails);
          setListType(response.data.pricingDetails); // Adjust this line
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching task types:", error);
      }
    };
    fetchTaskTypes();
  }, []);

  return (
    <div>
      {/* Header */}
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

      {/* Content */}
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

            {/* Conditional Rendering */}
            {currentTab === "offer" ? (
              <div className="grid md:grid-cols-2 gap-4">
                {listType.length > 0 ? (
                  listType.map((task, id) => (
                    <div
                      key={id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800">
                          {task.adType}
                        </h3>
                        <div className="flex gap-2">
                          <p className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                            ${task.earningPerAction}
                          </p>
                          <p>per task</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {task.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <p></p>
                        <button className="bg-blue-500 py-2 rounded-md px-10">
                          task
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No tasks available at the moment.</p>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form Fields */}
                {/* ... */}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
