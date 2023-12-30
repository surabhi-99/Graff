// components/SubscriptionManagement.jsx
import React from 'react';

const SubscriptionManagement = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Subscription Management</h3>
      <div className="flex flex-col space-y-4">
        {/* Display subscription plan details */}
        <div>
          <span className="font-semibold">Current Plan:</span>
          <p>Basic Plan</p>
        </div>
        <div>
          <span className="font-semibold">Plan Details:</span>
          <p>Up to 10 graphs, Up to 500 chatbot queries</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Upgrade Plan
        </button>
        {/* Other subscription management options */}
        {/* Add more options as needed */}
      </div>
    </div>
  );
};

export default SubscriptionManagement;
