import { FaCopy, FaGift, FaShareAlt } from "react-icons/fa";
import { useState } from "react";
const Invite = () => {
  const [referralLink] = useState("https://example.com/referral/12345");
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

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

  const closeModal = () => setIsModalOpen(false);

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
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full mt-4 bg-pink-600 py-4 rounded-md text-white text-xl font-semibold"
      >
        Transfer
      </button>
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
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[95%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold"></h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800 font-bold text-xl"
              >
                &times;
              </button>
            </div>
            <h2 className="text-xl text-center font-bold text-gray-800">
              TRANSFER
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Transfer your referral balance to
            </p>
            <p className="text-center font-bold">SFC Balance...</p>

            <input
              type=""
              placeholder="Amount"
              className="border border-gray-300 rounded w-full p-2 mt-4 mb-4 py-4"
            />
            <button className="w-full bg-pink-600 text-white py-4 mt-4 rounded hover:bg-pink-700">
              Transfer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invite;

{
  /* <div>
            <div className="w-full mb-4 flex justify-between items-center">
              <Link to="/wallet">
                <FaArrowLeft className="" />
              </Link>
              <p
                onClick={closeModal}
                className="text-xl justify-center flex items-center bg-gray-400 h-10 w-10 cursor-pointer rounded-full"
              >
                x
              </p>
            </div>
            <h2 className="text-xl text-center font-bold text-gray-800">
              CONVERT
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Convert your flowers to
            </p>
            <p className="text-center font-bold">STARFACECOIN (BEP20).</p>
            <div className="mt-4">
              <input
                type="number"
                placeholder="Amount"
                className="border border-gray-300 py-4 rounded w-full p-2 mb-2"
              />
              <p>{}</p>
            </div>
            <button className="mt-4 w-full bg-pink-600 text-white px-4 py-4 rounded hover:bg-pink-700">
              Convert
            </button>
          </div> */
}
