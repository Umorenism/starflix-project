import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import pics from "../asset/loggg.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateFields = () => {
    if (!email || !password) {
      setError("All fields are required");
      setIsValid(false);
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setIsValid(false);
      return;
    }

    setError("");
    setIsValid(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    validateFields();

    if (!isValid) return;

    try {
      const response = await fetch("https://starfaceapi.site/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      alert("Login successful!");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="w-full p-2">
        <div className="mb-6">
          <img
            src={pics}
            alt="icon"
            className="w-20 h-20 mx-auto animate-bounce"
          />
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Welcome back
          </h2>
          <p className="text-center">
            Please enter your correct details to login
          </p>
        </div>

        {error && (
          <div className="mb-4 p-2 text-sm text-red-600 border border-red-600 rounded">
            {error}
          </div>
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
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="off"
                onBlur={validateFields}
              />
              {isValid && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600">
                  ✓
                </span>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="off"
                onBlur={validateFields}
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
              >
                {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className={`w-full py-3 font-semibold rounded-md focus:outline-none ${
                isValid
                  ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!isValid}
            >
              Login
            </button>

            <p className="text-center mt-2">
              Don't have an account?
              <Link to="/signup">
                <span className="text-red-700 underline">Sign Up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
