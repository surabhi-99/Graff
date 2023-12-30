// components/UsageStatisticsView.jsx
import React from 'react';

const UsageStatisticsView = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Usage Statistics</h3>
      <div className="flex flex-col space-y-4">
        {/* Display usage statistics */}
        <div>
          <span className="font-semibold">Graphs Created:</span>
          <p>100</p>
        </div>
        <div>
          <span className="font-semibold">Graphs Shared:</span>
          <p>50</p>
        </div>
        <div>
          <span className="font-semibold">Papers Collected:</span>
          <p>200</p>
        </div>
        {/* Add more usage statistics as needed */}
      </div>
    </div>
  );
};

export default UsageStatisticsView;
