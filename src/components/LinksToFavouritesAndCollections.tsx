import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const LinksToFavouritesAndCollections = () => {
  return (
    <div className="bg-gray-900 text-white shadow-md p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-2">My Collection</h2>
      <Link to="/favorites" className="text-blue-400 hover:text-blue-600">
        Go To Favorites
      </Link>
      <Link to="/favorites" className="text-blue-400 p-4 hover:text-blue-600">
        Collection 1
      </Link>
      <Link to="/favorites" className="text-blue-400 hover:text-blue-600">
        Collection 2
      </Link>
    </div>
  );
};

export default LinksToFavouritesAndCollections;
