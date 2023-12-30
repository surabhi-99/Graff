// components/ThirdPartyAccountsLink.jsx
import React from 'react';

const ThirdPartyAccountsLink = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Link Third-Party Accounts</h3>
      <div className="flex flex-col space-y-4">
        {/* Add options to link third-party accounts */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Link Google Account
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
          Link Facebook Account
        </button>
        {/* Add more third-party account linking options as needed */}
      </div>
    </div>
  );
};

export default ThirdPartyAccountsLink;
