import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const Stake = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4">
      <div className="w-full mb-4 flex justify-between items-center">
        <FaArrowLeft className="" />
        <p className="text-xl justify-center flex items-center bg-gray-400 h-10 w-10 cursor-pointer rounded-full">
          x
        </p>
      </div>
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xl font-bold text-gray-800">Staking History</h2>
        <button
          className="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          onClick={handleToggleModal}
        >
          Stake Now
        </button>
      </div>
      <p className="text-gray-600 mt-2">Stake your balance to earn rewards.</p>
      <div className="bg-slate-400 w-full py-4 p-2 rounded-md">
        <div className="w-full flex justify-between items-center">
          <h1>#675d7155af24d827016ab953</h1>
          <button>cancelled</button>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1>ROI: 0.8</h1>
          <p>20 SFC</p>
        </div>
        <p>Start Date: Sat, December 14, 2024</p>
        <p>Ended Date: Tue, December 24, 2024</p>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 sm:hidden">
          {/* Header Section */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center"></div>

          {/* Modal Content */}
          <div className="bg-white w-[95%] p-6 rounded-lg shadow-lg py-10">
            <div className="flex justify-between items-center w-full mb-10">
              <FaArrowLeft className="text-black text-2xl cursor-pointer" />
              <p
                onClick={handleToggleModal}
                className="text-white text-lg flex items-center justify-center bg-gray-500 h-10 w-10 cursor-pointer rounded-full hover:bg-gray-600"
              >
                x
              </p>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              STAKE
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Stake Your SFC, Grow Your Rewards!
            </p>

            <div>
              <form action="" className="w-full">
                <div className="flex flex-col w-full mb-4">
                  <label htmlFor="">Amount</label>
                  <input
                    type="text"
                    className="py-4 border outline-none rounded-md p-2"
                  />
                </div>
                <p className="text-red-600 mt-4">This field is required</p>
                <p>SFC Balance: 1516.923526231877</p>
                <div className="flex flex-col w-full mb-4">
                  <label htmlFor="">Select plans</label>
                  <select
                    name=""
                    id=""
                    className="w-full py-4 border outline-none rounded-md"
                  >
                    <option value="">--select plan--</option>
                    <option value="">10 Days</option>
                    <option value="">30 Days</option>
                    <option value="">3 Month</option>
                  </select>
                </div>
              </form>
            </div>
            <button
              className="bg-pink-600 text-white px-6 py-3 rounded-lg w-full hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 mt-4"
              onClick={handleToggleModal}
            >
              Stake
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stake;
