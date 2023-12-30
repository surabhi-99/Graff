import React from 'react';

interface SavedGraph {
  id: number;
  title: string;
  dateCreated: string;
  // Add more properties as needed (e.g., previewImage)
}

interface SavedGraphsListProps {
  savedGraphs: SavedGraph[];
}

const SavedGraphsList: React.FC<SavedGraphsListProps> = ({ savedGraphs }) => {
  return (
    <div className="bg-gray-900 text-white shadow-md p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Saved Graphs</h2>
      <div>
        {savedGraphs.map((graph) => (
          <div key={graph.id} className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">{graph.title}</h3>
              <p className="text-gray-400">{graph.dateCreated}</p>
            </div>
            {/* Add thumbnail or additional actions/icons if available */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedGraphsList;
