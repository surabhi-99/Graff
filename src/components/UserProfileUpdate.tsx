// components/UserProfileUpdate.jsx
import React from 'react';

const UserProfileUpdate = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Logic for updating user profile
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Update User Profile</h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-700 text-white rounded-md p-2 w-full"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-700 text-white rounded-md p-2 w-full"
            placeholder="Enter your email"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfileUpdate;
