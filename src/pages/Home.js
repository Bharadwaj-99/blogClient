import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center mt-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to BlogApp</h1>
      <p className="mb-8">Read blogs based on your location or create your own!</p>
      <Link to="/blogs" className="bg-blue-500 text-white p-2 rounded">
        View Blogs
      </Link>
    </div>
  );
};

export default Home;
