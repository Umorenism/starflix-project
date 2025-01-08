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

  return (
    <>
      {/* Footer Section */}
      <div className="py-2 bg-slate-300 fixed bottom-0 left-0 right-0 z-10 border-t-4 rounded-md">
        <div className="flex justify-between items-center px-6 gap-4">
          {footerItems.map((item, index) => (
            <div key={index} className="text-white flex flex-col items-center">
              <Link
                to={item.path || "#"}
                onClick={
                  item.title === "Create" ? handleModalToggle : undefined
                }
              >
                <div className="text-xl hover:text-pink-600 mb-1 text-slate-700">
                  {item.icon}
                </div>
                <p className="text-sm hover:text-pink-600 text-black">
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
                  className="p-4 border rounded shadow hover:bg-gray-100 w-1/2 cursor-pointer"
                  onClick={() => setShowVideoModal(true)} // Open video modal
                >
                  <h3 className="text-center font-semibold">Upload videos</h3>
                </div>
                <div
                  onClick={() => setShowImageModal(true)}
                  className="p-4 border rounded shadow hover:bg-gray-100 w-1/2"
                >
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
              <div className="border py-10 mb-4 rounded-md text-center">
                <h1>Upload video or drag and drop</h1>
              </div>
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
              <button className="bg-pink-400 py-2 w-full mt-4 rounded-md">
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
              <div className="border py-10 mb-4 rounded-md text-center">
                <h1>Upload image or drag and drop</h1>
              </div>
              <div className="mb-4">
                <h3>Description</h3>
                <textarea
                  placeholder="write a little description.."
                  className="border w-full py-4 outline-none rounded-md p-2"
                />
              </div>
              <button className="bg-pink-400 py-2 w-full mt-4 rounded-md">
                Upload this image
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
