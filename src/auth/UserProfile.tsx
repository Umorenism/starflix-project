import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [interest, setInterest] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send data to API
      const response = await axios.post(
        "https://your-api-url.com/signup", // Replace with your actual API URL
        { userName, firstName },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle successful response
      if (response.status === 200) {
        // You can store the token if required (e.g., in localStorage)
        localStorage.setItem("authToken", response.data.token);
        navigate("/otp"); // Redirect to the dashboard or another route
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // If the error is an AxiosError, access the message or response
        setError(
          error.response?.data?.message ||
            "Failed to move to step2. Please try again."
        );
      } else if (error instanceof Error) {
        // Handle other types of errors
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100 p-4">
      <div className="w-[98%] p-6 mt-10 ">
        <div className="mb-6 text-start">
          <h1>User Profile</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Complete profile
          </h2>
          <p className="text-gray-600">
            Please,complete your profile to give you a better user experience
          </p>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-semibold text-gray-600"
            >
              First Name
            </label>
            <input
              type="firstname"
              id="firstname"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-semibold text-gray-600"
            >
              Last Name
            </label>
            <input
              type="lastname"
              id="firstname"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-semibold text-gray-600"
            >
              Age
            </label>
            <input
              type="age"
              id="age"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-semibold text-gray-600"
            >
              Country
            </label>
            <input
              type="country"
              id="country"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-semibold text-gray-600"
            >
              City
            </label>
            <input
              type="city"
              id="firstname"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-semibold text-gray-600"
            >
              Interest
            </label>
            <input
              type="city"
              id="firstname"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="Enter interest"
              autoComplete="off"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <Link to="/#">
              <button
                type="submit"
                className="w-full py-3 font-semibold rounded-md bg-pink-500 text-white focus:outline-none disabled:bg-gray-300"
                disabled={loading}
              >
                {loading ? "loading..." : "Update"}
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
