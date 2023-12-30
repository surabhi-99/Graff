// components/GraphForm.tsx
import React from 'react';

const GraphForm = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Create New Graph</h2>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label className="text-lg mb-1" htmlFor="graphTitle">Graph Title</label>
          <input
            type="text"
            id="graphTitle"
            className="bg-gray-800 text-white rounded-md p-2"
            placeholder="Enter graph title"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-1" htmlFor="graphDescription">Graph Description</label>
          <textarea
            id="graphDescription"
            className="bg-gray-800 text-white rounded-md p-2 h-24 resize-none"
            placeholder="Enter graph description"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-1" htmlFor="xAxis">X-axis</label>
          <input
            type="text"
            id="xAxis"
            className="bg-gray-800 text-white rounded-md p-2"
            placeholder="Enter X-axis label"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-1" htmlFor="yAxis">Y-axis</label>
          <input
            type="text"
            id="yAxis"
            className="bg-gray-800 text-white rounded-md p-2"
            placeholder="Enter Y-axis label"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Create Graph
          </button>
          {/* Add additional buttons or elements as needed */}
        </div>
      </form>
    </div>
  );
};

export default GraphForm;
