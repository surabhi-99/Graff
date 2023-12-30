import React from 'react';

const Buttons = () => {
  return (
    <div className="bg-gray-900 text-white shadow-md p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Actions</h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create New Graph
      </button>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
        Share Graph
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2">
        Upload Papers
      </button>
    </div>
  );
};

export default Buttons;
