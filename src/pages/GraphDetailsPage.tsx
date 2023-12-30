// GraphDetailsPage.jsx
import React from 'react';
import GraphInfo from '../components/GraphInfo'; // Import GraphInfo component
import PapersList from '../components/PapersList'; // Import PapersList component
import GraphActions from '../components/GraphActions'; // Import GraphActions component

const GraphDetailsPage = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Graph Details</h2>
      {/* Render separate components for GraphInfo, PapersList, and GraphActions */}
      <div className="mb-6">
        <GraphInfo />
      </div>
      <div className="mb-6">
        <PapersList />
      </div>
      <div>
        <GraphActions />
      </div>
    </div>
  );
};

export default GraphDetailsPage;
