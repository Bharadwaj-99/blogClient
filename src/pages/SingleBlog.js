import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const API_URL = process.env.REACT_APP_BACKEND_URL;
const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/blogs/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 mb-2">{blog.subheading}</p>
      <p className="text-gray-500 text-sm mb-4">By {blog.user.name}</p>
      <div className="prose">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
