// components/GraphInfo.jsx
import React from 'react';

const GraphInfo = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Graph Information</h3>
      <div className="flex flex-col space-y-2">
        <div>
          <span className="font-semibold">Graph Title:</span>
          <p>Sample Graph Title</p>
        </div>
        <div>
          <span className="font-semibold">Description:</span>
          <p>A brief description of the graph goes here...</p>
        </div>
        <div>
          <span className="font-semibold">Date Created:</span>
          <p>January 1, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default GraphInfo;
