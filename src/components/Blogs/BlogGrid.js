import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';


const API_URL = process.env.REACT_APP_BACKEND_URL;
const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        
        const location = 'India'; // Placeholder for user's location

        const res = await axios.get(`${API_URL}/api/blogs`, {
          params: { location },
        });
        setBlogs(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogGrid;
