import { Link } from "react-router-dom";
import pics from "../../asset/loggg.png";

const ChatPage = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="w-full max-w-md px-4 text-center">
          {/* Bouncing Image */}
          <img
            src={pics}
            alt="icon"
            className="w-20 h-20 mx-auto animate-bounce"
          />
          {/* Heading */}
          <h1 className="mt-2 text-3xl text-white font-extrabold">
            Star<span className="block text-orange-500">Flix</span>
          </h1>
          {/* Subtitle */}
          <p className="mt-2 text-sm text-gray-300">
            Join millions of others and find your best match.
          </p>
          {/* Button */}
          <Link to="/login">
            <button className="mt-6 w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300">
              Sign in with Email
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
