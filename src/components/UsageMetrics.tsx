import React from 'react';

interface UsageMetricsProps {
  graphsCreated: number;
  graphsShared: number;
  papersCollected: number;
}

const UsageMetrics: React.FC<UsageMetricsProps> = ({ graphsCreated, graphsShared, papersCollected }) => {
  return (
    <div className="bg-custom shadow-md p-4 rounded-md mt-4">
      <h2 className="text-xl font-semibold mb-2">Usage Metrics</h2>
      <div>
        <p><strong>Graphs Created:</strong> {graphsCreated}</p>
        <p><strong>Graphs Shared:</strong> {graphsShared}</p>
        <p><strong>Papers Collected:</strong> {papersCollected}</p>
        {/* Add more usage metrics if needed */}
      </div>
    </div>
  );
};

export default UsageMetrics;
