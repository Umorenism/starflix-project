import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    date: "",
    country: "",
    city: "",
    bio: "",
    interest: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token"); // Replace with your auth logic.

  useEffect(() => {
    // Fetch user details on component mount
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData(response.data);
      } catch (err) {
        setError("Failed to fetch user details");
      }
    };
    fetchUserDetails();
  }, [token]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios.put("/api/user/profile", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile updated successfully");
    } catch (err) {
      setError("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await axios.delete("/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Account deleted successfully");
        // Redirect user after deletion
        window.location.href = "/login";
      } catch (err) {
        setError("Failed to delete account");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="p-4 w-full mt-20 mx-auto  mb-20">
        <h1 className="text-2xl font-bold text-start mb-4">Edit Profile</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 py-4 focus:ring-blue-400"
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full py-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full py-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full py-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full py-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="w-full py-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="bio"
            placeholder="Bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full py-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="interest"
            placeholder="Interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full py-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={handleUpdate}
            disabled={loading}
            className="w-full py-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Updating..." : "Update"}
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="w-full py-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Delete Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
