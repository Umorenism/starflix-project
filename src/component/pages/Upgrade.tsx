import { FaCopy } from "react-icons/fa";
import { useState } from "react";
import pic from "../../asset/images/coins/red-coin.webp";

// Define the type for each plan
type Plan = {
  title: string;
  img: string;
  desc: string;
  amount: string;
  color: string;
};

const Upgrade: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [referralLink] = useState<string>("https://example.com/referral/12345");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const plan: Plan[] = [
    {
      title: "Ocean Green",
      img: pic,
      desc: "Buy and get up to 68USDT per cycle",
      amount: "30",
      color: "text-green-500",
    },
    {
      title: "Blue Mars",
      img: pic,
      desc: "Buy and get up to 185USDT per cycle",
      amount: "80",
      color: "text-blue-500",
    },
    {
      title: "Philemon",
      img: pic,
      desc: "Buy and get up to 372USDT per cycle",
      amount: "150",
      color: "text-yellow-500",
    },
    {
      title: "Bronze",
      img: pic,
      desc: "Buy and get up to 495USDT per cycle",
      amount: "200",
      color: "text-orange-500",
    },
    {
      title: "Purple Bee",
      img: pic,
      desc: "Buy and get up to 1125USDT per cycle",
      amount: "500",
      color: "text-purple-500",
    },
    {
      title: "Ethiopian Gold",
      img: pic,
      desc: "Buy and get up to 2320USDT per cycle",
      amount: "1000",
      color: "text-yellow-700",
    },
    {
      title: "Founder",
      img: pic,
      desc: "Buy and get up to 33USDT per cycle",
      amount: "12",
      color: "text-gray-500",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  const handleImageClick = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen mt-14 p-4 bg-slate-100 mb-20">
      <div>
        <h1>Wallet Balance:</h1>
        <h3>0USDT</h3>
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
      <button className="w-full text-white font-semibold text-xl bg-pink-600 py-4 mt-4 rounded-md">
        Earn as a creator
      </button>
      <p className="mt-4">
        Subscribe to any of the plans below to start earning daily from watching
        videos.
      </p>

      <hr />
      <p className="mt-4">
        Each earning cycle may take 3 to 4 weeks to complete.
      </p>
      <h1 className="text-xl mt-4">Select Plan</h1>

      <div>
        {plan.map((planItem, id) => (
          <div
            key={id}
            className={`bg-white w-full text-center shadow-md rounded-md mt-4 p-4 `}
          >
            <h1 className="text-center font-bold text-xl">{planItem.title}</h1>
            <p className="text-center">{planItem.desc}</p>
            <div
              className="w-full mt-4 flex justify-center items-center mb-4 cursor-pointer"
              onClick={() => handleImageClick(planItem)}
            >
              <img
                src={planItem.img}
                alt={planItem.title}
                className={`w-24 h-24 ${planItem.color}`}
              />
            </div>

            <hr />
            <h1 className="font-bold text-3xl text-center mt-4">
              {planItem.amount}
              <span className="text-[15px] text-slate-400">USDT</span>
            </h1>
            <button
              onClick={() => handleImageClick(planItem)}
              className="w-full text-white font-semibold text-xl bg-pink-600 py-4 mt-4 rounded-md"
            >
              Upgrade
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-bold">{selectedPlan.title}</h2>
            <div className="flex w-full justify-center items-center">
              <img
                src={selectedPlan.img}
                alt={selectedPlan.title}
                className=" w-44 h-44 mt-4"
              />
            </div>

            <button className="py-4 rounded-md mt-4 w-full bg-pink-600">
              Subscribe now:${selectedPlan.amount}
            </button>
            <p
              onClick={closeModal}
              className="w-full mt-4 text-red-500  py-2 underline text-center cursor-pointer"
            >
              Cancel
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upgrade;
