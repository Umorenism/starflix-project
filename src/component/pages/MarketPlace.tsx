// import { useState, useEffect } from "react";
// import axios from "axios";
// import TaskDetailPage from "../TaskDetailPage";
// // import TaskDetailPage from "../TaskDetailPage";

// // interface TaskType {
// //   id: number;
// //   type: string;
// //   title: string;
// //   reward: string;
// //   description: string;
// //   url: string;
// //   remaining: number;
// // }

// interface ListTask {
//   adType: string;
//   pricePerAction: number;
//   earningPerAction: number;
//   description: string;
// }

// // interface FormData {
// //   type: string;
// //   url: string;
// //   reward: string;
// //   spots: string;
// //   title: string;
// //   description: string;
// // }

// function MarketPlace() {
//   const [currentTab, setCurrentTab] = useState<string>("offer");
//   const [listType, setListType] = useState<ListTask[]>([]);
//   const [selectedTask,setSelectedTask]=useState(null)
//   // const [selectedTask, setSelectedTask] = useState(null);

//   // const [formData, setFormData] = useState<FormData>({
//   //   type: "page",
//   //   url: "",
//   //   reward: "",
//   //   spots: "",
//   //   title: "",
//   //   description: "",
//   // });

//   // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   const newTask = {
//   //     id: tasks.length + 1,
//   //     ...formData,
//   //     remaining: parseInt(formData.spots),
//   //   };
//   //   setTasks([...tasks, newTask]);
//   //   setCurrentTab("offer");
//   //   setFormData({
//   //     type: "page",
//   //     url: "",
//   //     reward: "",
//   //     spots: "",
//   //     title: "",
//   //     description: "",
//   //   });
//   // };

//   useEffect(() => {
//     const fetchTaskTypes = async () => {
//       try {
//         const response = await axios.get(
//           "https://starfaceapi.site/api/marketPlace/ads-pricing"
//         );

//         //     // Check if the expected key exists in the response
//         if (response.data && response.data.pricingDetails) {
//           console.log(response.data.pricingDetails);
//           setListType(response.data.pricingDetails); // Adjust this line
//         } else {
//           console.error("Unexpected data format:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching task types:", error);
//       }
//     };

//     fetchTaskTypes();
//   }, []);

//   if (selectedTask) {
//     // Render the TaskDetails component if a task is selected
//     return (
//       <TaskDetailPage
//         taskTitle={selectedTask.}

//       />
//     );
//   }

//   return (
//     <div>
//       {/* Header */}
//       <div className="header header-fixed bg-white">
//         <div className="container">
//           <div className="header-content">
//             <div className="left-content me-3">
//               <a href="/" className="text-decoration-none back-btn">
//                 <i className="icon feather icon-chevron-left"></i>
//                 <span>MarketPlace</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="min-h-screen bg-gray-50 mt-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//             <h1 className="text-2xl font-bold font-roboto text-gray-800 mb-2">
//               Welcome to Marketplace
//             </h1>
//             <p className="text-gray-600 mb-4">
//               Earn rewards by engaging with pages and posts from different
//               social media accounts
//             </p>
//             <div className="flex gap-4 border-b mb-6">
//               <button
//                 onClick={() => setCurrentTab("offer")}
//                 className={`pb-2 px-4 ${
//                   currentTab === "offer"
//                     ? "border-b-2 border-blue-500 text-blue-500"
//                     : "text-gray-500"
//                 }`}
//               >
//                 Earn
//               </button>
//               <button
//                 onClick={() => setCurrentTab("create")}
//                 className={`pb-2 px-4 ${
//                   currentTab === "create"
//                     ? "border-b-2 border-blue-500 text-blue-500"
//                     : "text-gray-500"
//                 }`}
//               >
//                 Advertise
//               </button>
//             </div>

//             {/* Conditional Rendering */}
//             {currentTab === "offer" ? (
//               <div className="grid md:grid-cols-2 gap-4">
//                 {listType.length > 0 ? (
//                   listType.map((task, id) => (
//                     <div
//                       key={id}
//                       className="border rounded-lg p-4 hover:shadow-md transition-shadow"
//                     >
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="font-semibold text-gray-800">
//                           {task.adType}
//                         </h3>
//                         <div className="flex gap-2">
//                           <p className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
//                             ${task.earningPerAction}
//                           </p>
//                           <p>per task</p>
//                         </div>
//                       </div>
//                       <p className="text-gray-600 text-sm mb-3">
//                         {task.description}
//                       </p>
//                       <div className="flex justify-between items-center">
//                         <p></p>
//                         <button onClick={() => setSelectedTask(task)}  className="bg-blue-500 py-2 rounded-md px-10">
//                           Check task
//                         </button>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No tasks available at the moment.</p>
//                 )}
//               </div>
//             ) : (
//               <form className="space-y-4">
//                 {/* Form Fields */}
//                 {/* ... */}
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MarketPlace;

import { useState, useEffect } from "react";
import axios from "axios";
import TaskDetailPage from "../TaskDetailPage";

interface ListTask {
  adType: string;
  pricePerAction: number;
  earningPerAction: number;
  description: string;
}

function MarketPlace() {
  const [currentTab, setCurrentTab] = useState<string>("offer");
  const [listType, setListType] = useState<ListTask[]>([]);
  const [selectedTask, setSelectedTask] = useState<ListTask | null>(null);

  useEffect(() => {
    const fetchTaskTypes = async () => {
      try {
        const response = await axios.get(
          "https://starfaceapi.site/api/marketPlace/ads-pricing"
        );

        if (response.data && response.data.pricingDetails) {
          setListType(response.data.pricingDetails);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching task types:", error);
      }
    };

    fetchTaskTypes();
  }, []);

  if (selectedTask) {
    return (
      <TaskDetailPage
        tasktitle={selectedTask.adType}
        // taskDescription={selectedTask.description}
        // taskReward={selectedTask.earningPerAction}
      />
    );
  }

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
                        <h3 className="font-semibold text-3xl text-gray-800">
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
                        <button
                          onClick={() => setSelectedTask(task)} // Set the selected task
                          className="bg-pink-600 text-xl text-white font-bold py-2 rounded-md mt-4 px-10"
                        >
                          Check task
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No tasks available at the moment.</p>
                )}
              </div>
            ) : (
              <form className="space-y-4">{/* Form Fields */}</form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
