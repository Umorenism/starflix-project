import { FaArrowLeft, FaCopy, FaWallet } from "react-icons/fa";
import { PiHandTapLight } from "react-icons/pi";
import { SiConvertio } from "react-icons/si";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { ImFire } from "react-icons/im";
import { IoLogoStackoverflow } from "react-icons/io5";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
// import pic from "../../asset/images/coins/download (1).png";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState("Assets");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [copied, setCopied] = useState<boolean>(false);
  const [referralLink] = useState<string>("https://example.com/referral/12345");

  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const navigate = useNavigate(); // Initialize useNavigate
  const walletAddress = "0xf8aaFd636f40Ec32A53a3980e3a5A5EF95b31d2E";
  const user = true;

  const icondata = [
    {
      title: "Fund Wallet",
      icon: <FaWallet />,
    },
    {
      title: "Withdraw",
      icon: <PiHandTapLight />,
    },
    {
      title: "Convert",
      icon: <SiConvertio />,
    },
    {
      title: "Purchase",
      icon: <RiArrowLeftRightFill />,
    },
    {
      title: "Staking",
      icon: <IoLogoStackoverflow />,
      route: "/stake", // Define the route for Staking
    },
  ];

  const openModal = (title: string) => {
    setSelectedAction(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAction(null);
    setIsModalOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const renderModalContent = () => {
    switch (selectedAction) {
      case "Fund Wallet":
        return (
          <div>
            <div className="w-full mb-10 flex justify-between items-center">
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
            <h2 className="text-xl font-bold text-gray-800 text-center">
              FUND ACCOUNT WITH USDT
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Copy your USDT (BEP20) wallet address or scan the QRCode below.
            </p>

            <div className="w-full justify-center items-center flex mt-4">
              <QRCodeCanvas value={walletAddress} size={200} />
            </div>

            {copied && (
              <span className="mt-4 text-sm text-green-600">
                Link copied to clipboard!
              </span>
            )}
            {/* <div
              onClick={handleCopy}
              className="bg-gray-100 shadow-md w-full py-4 mt-8 rounded-md flex justify-between items-center p-2"
            >
              <h1 className="text-start">
                0xf8aaFd636f40Ec32A53a3980e3a5A5EF95b31d2E
              </h1>
              <div className="bg-pink-600 w-8 h-8 rounded-md flex justify-center items-center p-2">
                <FaCopy size={30} />
              </div>
            </div> */}

            <div
              onClick={handleCopy}
              className="bg-gray-100 shadow-md w-full py-4 mt-8 rounded-md flex justify-between items-center p-2 cursor-pointer"
            >
              <h1 className="text-start">{walletAddress}</h1>
              <div className="bg-pink-600 w-8 h-8 rounded-md flex justify-center items-center p-2">
                <FaCopy size={20} color="white" />
              </div>
            </div>
          </div>
        );
      case "Withdraw":
        return (
          <div>
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
            <h2 className="text-xl font-bold text-gray-800">
              WITHDRAW YOUR ASSET
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Please ensure you input the right starface coin wallet address.
            </p>

            <div className="flex flex-col w-full mb-4">
              <label htmlFor="">Amount</label>
              <input
                type="text"
                className="border outline-none py-4 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="">Wallet Address</label>
              <input
                type="text"
                className="border outline-none py-4 rounded-md p-2"
              />
            </div>
            <button className="mt-4 bg-pink-600 text-white px-4 py-4 rounded hover:bg-pink-700 w-full ">
              Withdraw
            </button>
            <p className="mt-5  ">
              * Add Starfacecoin (SFC) to your trust wallet using contract
              address{" "}
              <span className="text-red-600">
                0x6AC86549e40edc13EC8A884756Afa019942EE92b,
              </span>{" "}
              then proceed to withdraw.
            </p>
          </div>
        );
      case "Convert":
        return (
          <div>
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
          </div>
        );
      case "Purchase":
        return (
          <div>
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
            <h2 className="text-xl font-bold text-gray-800 uppercase text-center">
              Purchase
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Transfer your USDT to flower or chat
            </p>
            <h3 className="text-center">wallet.</h3>
            <div>
              <div>
                <label htmlFor="">Wallet</label>
                <select className="border border-gray-300 rounded w-full p-2">
                  <option>--Select wallet--</option>
                  <option>Flower wallet</option>
                  <option>Chat wallet</option>
                </select>
              </div>
              <div className="flex flex-col w-full mt-4">
                <label htmlFor="">Amount</label>
                <input
                  type=""
                  placeholder=""
                  className="mt-2 border border-gray-300 rounded w-full p-2"
                />
              </div>
            </div>
            <p>error{}</p>
            <h1>USDT Balance: 109.4</h1>

            <button className="mt-4 w-full bg-pink-600 text-white px-4 py-4 rounded-md hover:bg-pink-700">
              Transfer
            </button>
          </div>
        );

      default:
        return <p>Invalid Action</p>;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
            {renderModalContent()}
          </div>
        </div>
      )}
      {/* Balance Section */}
      {user ? (
        <div className="mt-16 bg-white shadow-md w-full py-6 rounded-lg p-4 text-start">
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="text-pink-600 font-medium">Star Balance</p>
              <h1 className="text-3xl font-bold mt-2 text-gray-800">1000</h1>
              <h3 className="text-gray-500 text-sm mt-1">$0000</h3>
            </div>
            <Link to="/upgrade">
              <button className="px-4 py-2 bg-pink-600 text-white font-bold rounded-full animate-pulse flex">
                <ImFire /> Upgrade
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-16 bg-white shadow-md w-full py-6 rounded-lg p-4 text-start">
          <p className="text-pink-600 font-medium">Star Balance</p>
          <h1 className="text-3xl font-bold mt-2 text-gray-800">
            1516.589067427284
          </h1>
          <h3 className="text-gray-500 text-sm mt-1">$151.66</h3>
        </div>
      )}

      {/* Icons Section */}
      <div className="mt-6 grid grid-cols-5 gap-4 w-full">
        {icondata.map((icon, id) => (
          <div
            // onClick={() => openModal(icon.title)}

            onClick={() =>
              icon.route ? navigate(icon.route) : openModal(icon.title)
            } // Navigate to route if defined, else open modal
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
