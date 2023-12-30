// components/PasswordChange.jsx
import React from 'react';

const PasswordChange = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Logic for changing password
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Change Password</h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="currentPassword" className="block font-semibold mb-1">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className="bg-gray-700 text-white rounded-md p-2 w-full"
            placeholder="Enter current password"
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block font-semibold mb-1">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="bg-gray-700 text-white rounded-md p-2 w-full"
            placeholder="Enter new password"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block font-semibold mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="bg-gray-700 text-white rounded-md p-2 w-full"
            placeholder="Confirm new password"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default PasswordChange;
