import React, { useState } from "react";

const ProfileUploadImage = () => {
  const [imageUploaded, setImageUploaded] = useState(false); // To track upload status
  const [uploadedImage, setUploadedImage] = useState<string | null>(null); // To display uploaded image preview

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
        setImageUploaded(true); // Set upload status to true
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center w-full min-h-screen bg-gray-100 p-4">
      <div className="w-[98%] p-6 mt-10">
        <div className="mb-6 text-start">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Profile photo
          </h2>
          <p className="text-gray-600">Please, upload a profile photo</p>
        </div>
        <div className="border border-gray-950 h-44 rounded-md flex justify-center items-center flex-col relative">
          {/* Hidden file input */}
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
            📷
          </label>
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded Preview"
              className="mt-4 w-28 h-28 rounded-full object-cover"
            />
          ) : (
            <p className="mt-2">
              Upload <span className="text-red-600">profile photo</span>
            </p>
          )}
        </div>
        <button
          onClick={() => alert("Profile photo uploaded successfully!")}
          className={`w-full py-3 ${
            imageUploaded ? "bg-green-500" : "bg-slate-200"
          } text-black rounded-lg shadow hover:opacity-90 mt-10 transition`}
        >
          {imageUploaded ? "Photo Uploaded" : "Complete"}
        </button>
      </div>
    </div>
  );
};

export default ProfileUploadImage;
