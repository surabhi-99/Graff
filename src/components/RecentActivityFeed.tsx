// components/RecentActivityFeed.jsx
import React from "react";
import graph1 from "../img/edu.jpg";
import graph2 from "../img/loan.png";
import graph3 from "../img/sales.png";
import collection1 from "../img/awards.png";
import collection2 from "../img/store.jpg";
import collection3 from "../img/transport.png";

// Simulated data for recent activities
const recentGraphs = [
  { title: "Graph 1", image: graph1 },
  { title: "Graph 2", image: graph2 },
  { title: "Graph 3", image: graph3 },
];

const recentCollections = [
  { title: "Collection 1", image: collection1 },
  { title: "Collection 2", image: collection2 },
  { title: "Collection 3", image: collection3 },
];

const recentQueries = [
  { title: "Query 1", question: "What is the query for X?" },
  { title: "Query 2", question: "How to implement Y in Z?" },
  { title: "Query 3", question: "Why does this error occur?" },
];

const RecentActivityFeed = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">Recent Activity Feed</h3>
      {/* Recent Graphs Section */}
      <div className="mb-6">
        <h4 className="text-md font-semibold mb-2">Recent Graphs</h4>
        <div className="grid grid-cols-3 gap-4">
          {recentGraphs.map((graph, index) => (
            <div key={index} className="bg-gray-700 rounded-md p-2">
              <img
                src={graph.image}
                alt={graph.title}
                className="w-full h-auto rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Recent Collections Section */}
      <div className="mb-6">
        <h4 className="text-md font-semibold mb-2">Recent Collections</h4>
        <div className="grid grid-cols-3 gap-4">
          {recentCollections.map((collection, index) => (
            <div key={index} className="bg-gray-700 rounded-md p-2">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-auto rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Recent Queries Section */}
      <div>
        <h4 className="text-md font-semibold mb-2">Recent Queries</h4>
        <div className="grid grid-cols-3 gap-4">
          {recentQueries.map((query, index) => (
            <div key={index} className="bg-gray-700 rounded-md p-2">
              {/* Display query titles */}
              <h5 className="text-white text-sm mb-2">{query.title}</h5>
              {/* Display query questions */}
              <p className="text-gray-300">{query.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivityFeed;
