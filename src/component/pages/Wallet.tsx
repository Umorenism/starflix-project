import { FaWallet } from "react-icons/fa";
import { useState } from "react";
const Wallet = () => {
  const [activeTab, setActiveTab] = useState("Assets");
  const icondata = [
    {
      title: "Fund Wallet",
      icon: <FaWallet />,
    },
    {
      title: "Withdraw",
    },
    {
      title: "Convert",
    },
    {
      title: "Purchase",
    },
    {
      title: "Staking",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* Balance Section */}
      <div className="mt-16 bg-white shadow-md w-full py-6 rounded-lg p-4 text-start">
        <p className="text-pink-600 font-medium">Star Balance</p>
        <h1 className="text-3xl font-bold mt-2 text-gray-800">
          1516.589067427284
        </h1>
        <h3 className="text-gray-500 text-sm mt-1">$151.66</h3>
      </div>

      {/* Icons Section */}
      <div className="mt-6 grid grid-cols-5 gap-4 w-full">
        {icondata.map((icon, id) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center mt-4 "
          >
            <h1 className="text-pink-600 text-2xl">{icon.icon || "🔗"}</h1>
            <p className="text-gray-700 text-sm font-medium mt-2">
              {icon.title}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 w-full mt-5 border-b border-gray-200">
        <button
          className={`py-2 text-center font-medium ${
            activeTab === "Assets"
              ? "text-pink-600 border-pink-600 border-b-2"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Assets")}
        >
          Assets
        </button>
        <button
          className={`py-2 text-center font-medium ${
            activeTab === "Activities"
              ? "text-pink-600 border-pink-600 border-b-2"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Activities")}
        >
          Activities
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-4 flex justify-between items-center bg-white shadow-md w-full py-6 rounded-lg p-4">
        {activeTab === "Assets" && (
          <>
            <h1 className="font-medium text-gray-800">Gift Balance</h1>
            <p className="text-gray-600">0</p>
          </>
        )}
        {activeTab === "Activities" && (
          <>
            <h1 className="font-medium text-gray-800">Recent Activities</h1>
            <p className="text-gray-600">No data</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Wallet;
