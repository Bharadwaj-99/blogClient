import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h3 className="font-bold text-xl">{blog.title}</h3>
      <p className="text-gray-700">{blog.subheading}</p>
      <Link to={`/blogs/${blog._id}`} className="text-blue-500">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
