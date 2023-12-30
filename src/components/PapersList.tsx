// components/PapersList.jsx
import React from 'react';

const PapersList = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Papers in Graph</h3>
      <ul className="list-disc pl-4">
        <li>Paper 1</li>
        <li>Paper 2</li>
        <li>Paper 3</li>
        {/* Add more papers as needed */}
      </ul>
    </div>
  );
};

export default PapersList;
