import { FaCopy, FaGift, FaShareAlt } from "react-icons/fa";
import { useState } from "react";
const Invite = () => {
  const [referralLink] = useState("https://example.com/referral/12345");
  const [copied, setCopied] = useState(false);

  const dataEarnig = [
    {
      title: "Total Earning",
      price: "20",
    },
    {
      title: "Current Value",
      price: "0",
    },
    {
      title: "Total Referrals",
      price: "0",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Referral Link",
          text: "Join using my referral link:",
          url: referralLink,
        });
        alert("Link shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported on your device.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="mt-16 w-full">
        <h1 className="text-2xl font-semibold">Referral Earning</h1>
      </div>

      {dataEarnig.map((e, id) => (
        <div
          key={id}
          className="mt-4 flex flex-col  bg-white shadow-md w-full py-6 rounded-lg p-4"
        >
          <h1>{e.title}</h1>
          <p> {e.price}</p>
        </div>
      ))}
      <div className="mt-5">
        <img
          src="https://starface.chat/assets/share-tc52rEfm.svg"
          alt="imge"
          className="w-44 h-44"
        />
      </div>
      <div className="w-full">
        <h1 className="text-center text-xl font-bold mb-4">
          Invite your friends
        </h1>
        <p>
          Refer your friends and earn upto 25 SFC per referral & your friends
          will get 20 SFC
        </p>
      </div>

      <div className="mt-4 min-h-[400px] flex flex-col bg-white shadow-md w-full py-6 rounded-lg p-4 mb-20">
        <label
          htmlFor="referralLink"
          className="mb-2 text-gray-700 font-medium"
        >
          {copied && (
            <span className="mt-2 text-sm text-green-600">
              Link copied to clipboard!
            </span>
          )}
        </label>
        <div className="relative flex items-center">
          <input
            type="text"
            id="referralLink"
            value={referralLink}
            readOnly
            className="w-full border border-gray-300 rounded-md px-4 py-2 pr-14 text-gray-700 bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <div className="mt-4 mb-5 w-full text-center">
            <button
              onClick={handleCopy}
              className="text-blue-500  hover:text-blue-700"
              title="Copy"
            >
              <FaCopy size={30} />
            </button>
            <button
              onClick={handleShare}
              className="text-green-500 ml-4 hover:text-green-700"
              title="Share"
            >
              <FaShareAlt size={30} />
            </button>
            <div className="w-full mt-4">
              <h1 className="text-start text-2xl font-semibold">
                How to earn from StarFace referral
              </h1>
            </div>
            <div className="w-full flex-col text-start mt-8">
              <div className="rounded-full h-10 w-10 flex justify-center items-center bg-pink-300">
                <FaGift size={25} className="text-pink-600" />
              </div>
              <p>Earn 2SFC when friend installs and sign up on the app.</p>
            </div>
            <div className="w-full flex-col text-start mt-8">
              <div className="rounded-full h-10 w-10 flex justify-center items-center bg-pink-300">
                <FaGift size={25} className="text-pink-600" />
              </div>
              <p>Earn 20SFC when your friend becomes a creator</p>
            </div>
            <div className="w-full flex-col text-start mt-8">
              <div className="rounded-full h-10 w-10 flex justify-center items-center bg-pink-300">
                <FaGift size={25} className="text-pink-600" />
              </div>
              <p>
                Earn 10% commission when your friends subscribe to any earning
                circle
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;
