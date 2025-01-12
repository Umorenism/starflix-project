import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileUploadImage = () => {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", file);

      try {
        // Replace `https://api.example.com/upload` with your API endpoint
        const response = await axios.post(
          "https://api.example.com/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        if (response.data && response.data.imageUrl) {
          setUploadedImage(response.data.imageUrl); // Set the uploaded image URL
          setImageUploaded(true);
          setLoading(false);

          // Save the image URL to localStorage for demonstration
          localStorage.setItem("profileImage", response.data.imageUrl);

          // Redirect to profile page
          navigate("/profile");
        }
      } catch (error) {
        console.error("Image upload failed:", error);
        setLoading(false);
        alert("Failed to upload the image. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center w-full min-h-screen bg-gray-100 p-4">
      <div className="w-[98%] p-6 mt-10">
        <div className="mb-6 text-start">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Profile Photo
          </h2>
          <p className="text-gray-600">Please upload a profile photo</p>
        </div>
        <div className="border border-gray-950 h-44 rounded-md flex justify-center items-center flex-col relative">
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <label
            htmlFor="photo-upload"
            className={`${
              imageUploaded ? "bg-green-500" : "bg-blue-500"
            } text-white rounded-full p-2 cursor-pointer shadow-lg hover:opacity-80 transition`}
          >
            {loading ? "Uploading..." : "📷"}
          </label>
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded Preview"
              className="mt-4 w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <p className="mt-2">
              Upload <span className="text-red-600">profile photo</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUploadImage;
