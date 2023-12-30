// components/GraphActions.jsx
import React from 'react';

const GraphActions = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Graph Actions</h3>
      <div className="flex flex-col space-y-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Edit Graph
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Share Graph
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Delete Graph
        </button>
      </div>
    </div>
  );
};

export default GraphActions;
