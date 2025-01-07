import React, { useState } from "react";

const OtpVerify: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    console.log("Entered OTP:", otpCode);
    // Perform OTP verification logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[98%] max-w-xl  p-6">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Verify OTP
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enter the 4-digit OTP sent to your email.
        </p>

        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpVerify;
