// components/GraphSettings.tsx
import React from 'react';

const GraphSettings = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Graph Settings</h2>
      <form className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label className="text-lg mb-1" htmlFor="layoutType">Layout Type</label>
          <select
            id="layoutType"
            className="bg-gray-800 text-white rounded-md p-2"
          >
            <option value="circular">Circular</option>
            <option value="linear">Linear</option>
            <option value="hierarchical">Hierarchical</option>
            {/* Add more layout options as needed */}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-1" htmlFor="colorScheme">Color Scheme</label>
          <select
            id="colorScheme"
            className="bg-gray-800 text-white rounded-md p-2"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="rainbow">Rainbow</option>
            {/* Add more color scheme options as needed */}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-1" htmlFor="nodeSize">Node Size</label>
          <input
            type="range"
            id="nodeSize"
            min="1"
            max="100"
            className="bg-gray-800 text-white rounded-md p-2"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Apply Settings
          </button>
          {/* Add additional buttons or elements as needed */}
        </div>
      </form>
    </div>
  );
};

export default GraphSettings;
