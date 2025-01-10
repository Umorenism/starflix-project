import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleEditClick = () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false); // Stop loading after delay (simulate async operation)
      navigate("/editprofile"); // Navigate to the edit profile page
    }, 2000); // 2-second delay for demonstration
  };

  const handleLogout = () => {
    alert("You have been logged out.");
    // Add your logout logic here
  };

  const posts = Array(8).fill("Post"); // Placeholder for "All posts"
  const photos = Array(5).fill("Photo"); // Placeholder for "Photos"
  const videos = Array(5).fill("Video"); // Placeholder for "Videos"

  const renderContent = () => {
    let content = [];
    if (activeTab === "all") content = posts;
    else if (activeTab === "photos") content = photos;
    else if (activeTab === "videos") content = videos;

    return (
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 mt-4 py-6 p-4">
        {content.map((item, index) => (
          <div
            key={index}
            className="bg-slate-200 py-6 rounded-md p-4 text-center text-sm"
          >
            {item} {index + 1}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="relative bg-white shadow-lg rounded-lg w-[95%] mt-20 p-6">
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 text-red-500 text-sm font-semibold"
        >
          Logout
        </button>

        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="relative mt-10 w-24 h-24">
            <img
              src={profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-2 border-gray-300"
            />
            <label
              htmlFor="profileImageUpload"
              className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 16l7-7 7 7"
                />
              </svg>
            </label>
            <input
              id="profileImageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* User Information */}
          <h2 className="mt-4 text-lg font-bold text-gray-700">John Doe</h2>
          <p className="text-gray-600 text-sm flex items-center justify-center">
            johndoes<span className="text-xs ml-1">@example.com</span>
            <button
              onClick={handleEditClick}
              disabled={loading}
              className="ml-2 flex items-center"
            >
              {loading ? (
                <div className="animate-spin h-5 w-5 border-t-2 border-red-700 rounded-full"></div>
              ) : (
                <FaEdit size={16} className="text-red-700" />
              )}
            </button>
          </p>
          <p className="text-gray-500 text-sm">johndoe@gmail.com</p>
          <h1 className="mt-2 text-gray-700 text-sm">
            Status | User{" "}
            <a href="/earn" className="underline text-red-500">
              Become A Creator
            </a>
          </h1>
        </div>
        <div className="flex w-full mt-4 gap-2">
          <div className="bg-slate-100 flex-1 py-4 rounded-md text-center text-sm">
            10 Likes
          </div>
          <div className="bg-slate-100 flex-1 py-4 rounded-md text-center text-sm">
            1 Following
          </div>
          <div className="bg-slate-100 flex-1 py-4 rounded-md text-center text-sm">
            19 Followers
          </div>
        </div>
        <div className="flex w-full mt-4 gap-2">
          <Link to="/wallet" className="w-full">
            <button className="bg-pink-500 w-full text-white flex-1 py-2 rounded-md text-sm">
              My Wallet
            </button>
          </Link>
          <Link to="/invite" className="w-full">
            <button className="bg-pink-500 w-full text-white flex-1 py-2 rounded-md text-sm">
              Invite friends
            </button>
          </Link>
          <Link
            to="https://pancakeswap.finance/?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x6AC86549e40edc13EC8A884756Afa019942EE92b"
            className="w-full"
          >
            <button className="bg-pink-500 w-full text-white flex-1 py-2 rounded-md text-sm">
              Trade starface
            </button>
          </Link>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="w-full  mt-4">
        <div className="flex justify-around">
          {["all", "photos", "videos"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full py-2 text-sm font-semibold ${
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
            >
              {tab === "all"
                ? "All post"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full px-4 ">{renderContent()}</div>
    </div>
  );
};

export default ProfileCard;
