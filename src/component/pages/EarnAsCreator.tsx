import { useState } from "react";
import { FaCopy } from "react-icons/fa";
const EarnAsCreator = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [referralLink] = useState<string>("https://example.com/referral/12345");

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <div className="min-h-screen mt-14 p-4 bg-slate-100 mb-20">
      <div>
        <h1>Wallet Balance:</h1>
        <h3 className="font-bold text-xl">0USDT</h3>
        <p>Fund your balance below with USDT</p>
      </div>
      {copied && (
        <span className="mt-4 text-sm text-green-600">
          Link copied to clipboard!
        </span>
      )}
      <div
        onClick={handleCopy}
        className="bg-white shadow-md w-full py-2 mt-4 rounded-md flex justify-between items-center p-4"
      >
        <h1>0xf8aaFd636f40Ec32A53a3980e3a5A5EF95b31d2E</h1>
        <div className="bg-pink-600 w-6 h-6 rounded-md flex justify-center items-center">
          <FaCopy />
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold">
          Become a creator to increase your earnings.
        </h1>
        <p className="mt-5">Select plan</p>
      </div>

      <div className="w-full mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col justify-between items-center px-4 py-3 bg-white">
          <p className="text-lg font-bold text-gray-800">
            <span className="text-4xl font-bold">12</span>USDT/monthly
          </p>
          <button
            className="px-4 w-full py-4 mt-5 bg-pink-600 text-white text-sm font-medium rounded hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => alert("Upgrade button clicked!")}
          >
            Upgrade
          </button>
        </div>
      </div>
      <div className="w-full mt-4 mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex flex-col justify-between items-center px-4 py-3 bg-white">
          <p className="text-lg font-bold text-gray-800">
            <span className="text-4xl font-bold">250</span>USDT/monthly
          </p>
          <button
            className="px-4 w-full py-4 mt-5 bg-pink-600 text-white text-sm font-medium rounded hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => alert("Upgrade button clicked!")}
          >
            Upgrade
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold">Benefits</h1>
        <p className="">* Access to exclusive content</p>
        <p className="text-xl">* Promote content</p>
        <p className="text-xl">* Earn from views</p>
        <p className="text-xl">* Earn from Likes and othe reactions</p>
        <p className="text-xl">* Unlimited chat credit</p>
      </div>
    </div>
  );
};

export default EarnAsCreator;
