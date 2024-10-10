// src/pages/Blogs.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/Blogs/BlogCard'; // Assuming you have a BlogCard component

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blogs`);
        setBlogs(response.data); // Set blogs from response
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} /> // Display each blog using BlogCard component
        ))}
      </div>
    </div>
  );
};

export default Blogs;
