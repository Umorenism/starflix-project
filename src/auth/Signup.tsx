import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [referral, setReferral] = useState("");
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
        { email, referral },
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
        navigate("/dashboard"); // Redirect to the dashboard or another route
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
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-[95%] p-6 ">
        <div className="mb-6 text-start">
          <button className="bg-slate-300 px-2 rounded-md">step1</button>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-gray-600">
            Can we get your email and referral code?
          </p>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="code"
              className="block text-sm font-semibold text-gray-600"
            >
              Referral code
            </label>
            <input
              type=""
              id="code"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
              autoComplete="off"
              required
            />
          </div>

          <p>
            By registering, you have agreed to our{" "}
            <span className="text-red-500 underline">terms and conditions</span>
          </p>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 font-semibold rounded-md bg-pink-500 text-white focus:outline-none disabled:bg-gray-300"
              disabled={loading}
            >
              {loading ? "request code..." : "Referral code"}
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
