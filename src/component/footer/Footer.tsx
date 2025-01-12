import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CgProfile } from "react-icons/cg";
import { FaCirclePlus } from "react-icons/fa6";
import { BsChatFill } from "react-icons/bs";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const footerItems = [
  {
    title: "Feeds",
    icon: <MdOutlineDynamicFeed />,
    path: "/",
  },
  {
    title: "Marketplace",
    icon: <FaCirclePlus />,
    path: "/marketplace",
  },
  {
    title: "Create",
    icon: <MdOutlineCreateNewFolder />,
    style: "ml-4",
  },
  {
    title: "Chat",
    icon: <BsChatFill />,
    path: "/chat",
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    path: "/profile",
  },
];

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false); // State for video modal
  const [showImageModal, setShowImageModal] = useState(false); // State for video modal
  const location = useLocation();
  const [videoFile, setVideoFile] = useState<File | null>(null); // Track uploaded video
  const [error, setError] = useState<string>(""); // Track errors (if any)
  const [imageFile, setImageFile] = useState<File | null>(null); // Track uploaded image

  useEffect(() => {
    if (location.pathname === "") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [location.pathname]);

  const handleModalToggle = () => setShowModal(!showModal);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
      setShowVideoModal(false); // Close video modal
      setShowImageModal(false); // Close video modal
    }
  };

  // video logic
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setVideoFile(file);
      setError(""); // Clear previous errors
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files ? e.dataTransfer.files[0] : null;
    if (file && file.type.startsWith("video")) {
      setVideoFile(file);
      setError(""); // Clear any previous errors
    } else {
      setError("Please upload a valid video file.");
    }
  };

  const handleSubmit = () => {
    if (!videoFile) {
      setError("Please upload a video before submitting.");
      return;
    }
    console.log("Video uploaded:", videoFile);
  };

  // image

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      if (file.type.startsWith("image")) {
        setImageFile(file);
        setError(""); // Clear any previous errors
      } else {
        setError("Please upload a valid image file.");
      }
    }
  };

  return (
    <>
      {/* Footer Section */}
      <div className="py-2 bg-slate-300 fixed bottom-0 left-0 right-0 z-10 border-t-4 rounded-md">
        <div className="flex justify-between items-center px-6 gap-4">
          {footerItems.map((item, index) => (
            <div key={index} className="text-white flex flex-col">
              <Link
                to={item.path || "#"}
                onClick={
                  item.title === "Create" ? handleModalToggle : undefined
                }
              >
                <div className="text-xl w-full text-center hover:text-pink-600 mb-1 text-slate-700">
                  {item.icon}
                </div>
                <p className="text-sm w-full text-center hover:text-pink-600 text-black">
                  {item.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Main Modal Section */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-20"
            onClick={handleClickOutside}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full bg-white rounded-t-lg p-6"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <h2 className="text-lg font-bold mb-1 text-center">
                Create New Post
              </h2>
              <p className="mb-4 text-center text-sm">
                What would you like to upload today?
              </p>
              <div className="flex gap-4">
                <div
                  className="p-4 border rounded shadow hover:bg-gray-100 w-1/2 flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => setShowVideoModal(true)} // Open video modal
                >
                  <img
                    className="w-20 h-20"
                    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20data-name='Layer%201'%20width='816.22237'%20height='700.597'%20viewBox='0%200%20816.22237%20700.597'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M772.0209,797.89518a34.81426,34.81426,0,0,1-16.74561-4.30859L278.867,533.04069a35.03942,35.03942,0,0,1-13.9137-47.50147L466.00063,117.924a34.99945,34.99945,0,0,1,47.50171-13.91358l476.4082,260.5459a35.03913,35.03913,0,0,1,13.91382,47.50147L802.777,779.673a34.7714,34.7714,0,0,1-20.86914,16.79492A35.147,35.147,0,0,1,772.0209,797.89518Zm-13.8667-9.57227a29.00079,29.00079,0,0,0,39.35864-11.5288L998.5602,409.17887A29.03345,29.03345,0,0,0,987.03164,369.82L510.62344,109.27409a29.00081,29.00081,0,0,0-39.35865,11.5288L270.21743,488.41813A29.03335,29.03335,0,0,0,281.746,527.777Z'%20transform='translate(-191.88882%20-99.7015)'%20fill='%23f2f2f2'/%3e%3cpath%20d='M781.84414,669.32487a32.70567,32.70567,0,0,1-15.68262-4.0166L380.99917,454.66471a32.46947,32.46947,0,0,1-12.91992-44.1084L488.151,191.005a32.49693,32.49693,0,0,1,44.10865-12.91992L917.42226,388.72868a32.49758,32.49758,0,0,1,12.91993,44.10839l-.43873-.23974.43873.23974L810.27041,652.38834A32.3643,32.3643,0,0,1,781.84414,669.32487Z'%20transform='translate(-191.88882%20-99.7015)'%20fill='%23f2f2f2'/%3e%3cpath%20d='M769.88882,797.7985h-543a32.53692,32.53692,0,0,1-32.5-32.5v-419a32.53692,32.53692,0,0,1,32.5-32.5h543a32.53685,32.53685,0,0,1,32.5,32.5v419A32.53685,32.53685,0,0,1,769.88882,797.7985Z'%20transform='translate(-191.88882%20-99.7015)'%20fill='%23fff'/%3e%3cpath%20d='M769.88882,800.2985h-543a35.03947,35.03947,0,0,1-35-35v-419a35.03947,35.03947,0,0,1,35-35h543a35.03947,35.03947,0,0,1,35,35v419A35.03947,35.03947,0,0,1,769.88882,800.2985Zm-543-483a29.03275,29.03275,0,0,0-29,29v419a29.03275,29.03275,0,0,0,29,29h543a29.03276,29.03276,0,0,0,29-29v-419a29.03276,29.03276,0,0,0-29-29Z'%20transform='translate(-191.88882%20-99.7015)'%20fill='%23e6e6e6'/%3e%3cpath%20d='M582.89156,451.586a40.76358,40.76358,0,0,0-32.55116,16.18593,26.83976,26.83976,0,0,0-37.44912,24.64757H623.72505A40.83342,40.83342,0,0,0,582.89156,451.586Z'%20transform='translate(-191.88882%20-99.7015)'%20fill='%23e6e6e6'/%3e%3ccircle%20cx='148.19669'%20cy='445.96036'%20r='65.75727'%20fill='%236c63ff'/%3e%3cpath%20d='M725.24868,681.17851a31.87811,31.87811,0,0,1-7.35986.85h-439a31.87492,31.87492,0,0,1-15.46-3.97l1.16992-1.68,48.98-70.53,72.58008-104.49,1.06-1.53,11.41993-16.44a8.33693,8.33693,0,0,1,13.70019,0l37.93994,54.61v.01l22.31983,32.14,53.28027,76.7,80.80957-115.35a8.34782,8.34782,0,0,1,13.68018,0l51.83984,73.99,2.98,4.25Z'%20transform='translate(-191.88882%20-99.7015)'%20fill='%233f3d56'/%3e%3cpath%20d='M495.61848,519.76805A50.29271,50.29271,0,0,0,455.458,539.7377,33.114,33.114,0,0,0,409.2545,570.147h136.743A50.3789,50.3789,0,0,0,495.61848,519.76805Z'%20transform='translate(-191.88882%20-99.7015)'%20fill='%23ccc'/%3e%3cpath%20d='M717.88882,683.02848h-439a32.97007,32.97007,0,0,1-33-33V399.78873a33.03734,33.03734,0,0,1,33-33h439a33.03734,33.03734,0,0,1,33,33V650.02848a32.96211,32.96211,0,0,1-33,33Zm-439-314.23975a31.0352,31.0352,0,0,0-31,31V650.02848a30.97077,30.97077,0,0,0,31,31h439a30.9637,30.9637,0,0,0,31-31V399.78873a31.03521,31.03521,0,0,0-31-31Z'%20transform='translate(-191.88882%20-99.7015)'%20fill='%233f3d56'/%3e%3c/svg%3e"
                    alt="videos"
                  />
                  <h3 className="text-center font-semibold">Upload videos</h3>
                </div>
                <div
                  onClick={() => setShowImageModal(true)}
                  className="p-4 border rounded shadow hover:bg-gray-100 w-1/2 flex flex-col justify-center items-center"
                >
                  <img
                    src="https://starface.chat/assets/video-e3_Jw1M8.svg"
                    alt="img"
                    className="w-20 h-20"
                  />
                  <h3 className="text-center font-semibold">Upload an Image</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Upload Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
            onClick={handleClickOutside}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-[95%]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold mb-4 text-center">
                  post video
                </h3>

                <p
                  onClick={() => setShowVideoModal(false)}
                  className="  text-red-700 py-2 underline"
                >
                  Close
                </p>
              </div>
              <div
                className="border py-10 mb-4 rounded-md text-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <h1>Upload video or drag and drop</h1>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="hidden"
                  id="video-upload"
                />
                <label
                  htmlFor="video-upload"
                  className="cursor-pointer text-blue-500"
                >
                  Choose File
                </label>
              </div>
              {videoFile && <p className="text-green-500">{videoFile.name}</p>}
              {error && <p className="text-red-500">{error}</p>}
              <div>
                <div className="mb-5">
                  <h3 className="mb-1">Title</h3>
                  <input
                    type="text"
                    placeholder="Enter a title"
                    className="w-full border outline-none py-4 rounded-md p-2"
                  />
                </div>
                <div className="">
                  <h3>Description</h3>
                  <textarea
                    placeholder="write a little description.."
                    className="border w-full py-4 outline-none rounded-md p-2"
                  />
                </div>
              </div>
              <button
                className="bg-pink-400 py-2 w-full mt-4 rounded-md"
                onClick={handleSubmit}
              >
                Upload this video
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showImageModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30"
            onClick={handleClickOutside}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-[95%]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold mb-4 text-center">
                  post image
                </h3>

                <p
                  onClick={() => setShowImageModal(false)}
                  className="  text-red-700 py-2 underline"
                >
                  Close
                </p>
              </div>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="border py-10 mb-4 rounded-md text-center"
              >
                <h1>Upload image or drag and drop</h1>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <div className="text-xl mb-2">📷</div>
                  {imageFile ? (
                    <img
                      src={URL.createObjectURL(imageFile)}
                      alt="Preview"
                      className="w-full p-2 object-cover"
                    />
                  ) : (
                    <p className="text-sm"></p>
                  )}
                  {error && <p className="text-red-500">{error}</p>}
                </label>
              </div>
              <div className="mb-4">
                <h3>Description</h3>
                <textarea
                  placeholder="write a little description.."
                  className="border w-full py-4 outline-none rounded-md p-2"
                />
              </div>
              <button
                className="bg-pink-400 py-2 w-full mt-4 rounded-md"
                onClick={handleSubmit}
              >
                Upload this image
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
