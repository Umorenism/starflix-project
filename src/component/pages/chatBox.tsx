import { useState, useEffect } from "react";
import { LuMessagesSquare } from "react-icons/lu";
import axios from "axios";
import pic from "../../asset/images/logo.png";

import { AiOutlineSearch } from "react-icons/ai";

const ChatBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("Message");
  const [chatData, setChatData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // New state for user details

  // Fetch chat data when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim() === "") return;
    const fetchChatData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://starfaceapi.site/api/auths/chat=${searchQuery}`
        );
        setChatData(response.data);
        setSelectedUser(null); // Reset user details on new search
      } catch (error) {
        console.error("Error fetching chat data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChatData();
  }, [searchQuery]);

  // const handleUserSelect = (user) => {
  //   setSelectedUser(user); // Set the selected user's details
  // };

  const renderContent = () => {
    switch (content) {
      case "Message":
        return (
          <div>
            <h1 className="text-2xl font-bold">Message</h1>

            {chatData.length === 0 ? (
              <div className="w-full text-center flex flex-col mt-10">
                <LuMessagesSquare size={40} className="w-full text-center" />
                <h1>No Messages yet!</h1>
                <p>Search for a user and send your first message</p>
              </div>
            ) : (
              <div className="w-full">
                <div className="w-full bg-white shadow-md py-2 rounded-md flex justify-between">
                  <div className="flex ml-2 items-center">
                    <img
                      src={pic}
                      alt=""
                      className="w-10 mr-2 h-10 rounded-full bg-slate-600"
                    />
                    <div className="flex flex-col">
                      <p>john Doe</p>
                      <p className="text-sm">Hi</p>
                    </div>
                  </div>
                  <p className="text-sm mr-2">about 1 month ago</p>
                </div>
              </div>
            )}
          </div>
        );
      case "ChatRequest":
        return (
          <div>
            {" "}
            <h1 className="text-2xl font-bold">Chat Request</h1>
            {chatData ? (
              <div className="w-full text-center flex flex-col mt-10">
                <LuMessagesSquare size={40} className="w-full text-center" />
                <h1>No Messages yet!</h1>
                <p>Search for a user and send your first message</p>
              </div>
            ) : (
              <div className="w-full">
                <div className="w-full bg-white shadow-md py-2 rounded-md flex justify-between">
                  <div className="flex ml-2 items-center">
                    <img
                      src={pic}
                      alt=""
                      className="w-10 mr-2 h-10 rounded-full bg-slate-600"
                    />
                    <div className="flex flex-col">
                      <p>john Doe</p>
                      <p className="text-sm">Hi</p>
                    </div>
                  </div>
                  <p className="text-sm mr-2">about 1 month ago</p>
                </div>
              </div>
            )}
          </div>
        );
      case "SentRequest":
        return (
          <div>
            {" "}
            <h1 className="text-2xl font-bold">Sent Request</h1>
            {chatData ? (
              <div className="w-full text-center flex flex-col mt-10">
                <LuMessagesSquare size={40} className="w-full text-center" />
                <h1>Sent your first request</h1>
                <p>Search for a user and send your first message</p>
              </div>
            ) : (
              <div className="w-full">
                <div className="w-full bg-white shadow-md py-2 rounded-md flex justify-between">
                  <div className="flex ml-2 items-center">
                    <img
                      src={pic}
                      alt=""
                      className="w-10 mr-2 h-10 rounded-full bg-slate-600"
                    />
                    <div className="flex flex-col">
                      <p>john Doe</p>
                      <p className="text-sm">Hi</p>
                    </div>
                  </div>
                  <p className="text-sm mr-2">about 1 month ago</p>
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="mt-20 w-full p-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for user conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border py-3 px-4 rounded-md pl-4 outline-none"
          />
          {isLoading ? (
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
              <svg
                className="animate-spin h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          ) : (
            <AiOutlineSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 w-full flex gap-5">
          <button
            onClick={() => setContent("Message")}
            className={`${
              content === "Message" ? "bg-slate-400" : "bg-pink-500"
            } text-white flex-1 py-2 rounded-md text-sm w-full`}
          >
            Message
          </button>
          <button
            onClick={() => setContent("ChatRequest")}
            className={`${
              content === "ChatRequest" ? "bg-slate-400" : "bg-pink-500"
            } text-white flex-1 py-2 rounded-md text-sm w-full`}
          >
            Chat request [0]
          </button>
          <button
            onClick={() => setContent("SentRequest")}
            className={`${
              content === "SentRequest" ? "bg-slate-400" : "bg-pink-500"
            } text-white flex-1 py-2 rounded-md text-sm w-full`}
          >
            Sent request [0]
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 p-4 w-full">{renderContent()}</div>

        {/* User Detail Card */}
        {selectedUser && (
          <div className="mt-6 p-4 w-full bg-white rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            {/* <p>
              <strong>Sender:</strong> {selectedUser.sender}
            </p>
            <p>
              <strong>Content:</strong> {selectedUser.content}
            </p>
            <p>
              <strong>Time:</strong> {selectedUser.time}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email || "N/A"}
            </p> */}
            {/* Additional fields can be added as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
