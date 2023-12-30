// components/PapersUploadSection.tsx
import React from 'react';

const PapersUploadSection = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Upload Papers</h2>
      <div className="flex flex-col space-y-4">
        <label htmlFor="fileUpload" className="text-lg">
          Select Files
        </label>
        <div className="flex items-center justify-between bg-gray-800 rounded-md p-4">
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            multiple
            accept=".pdf,.doc,.docx"
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Choose Files
          </label>
          {/* Show selected file names here (if any) */}
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Upload
        </button>
        {/* Add additional buttons or elements as needed */}
      </div>
    </div>
  );
};

export default PapersUploadSection;
