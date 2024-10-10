
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
 
  return (
    <div className="border p-4">
      <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
      <p className="text-gray-700 mb-2">{blog.subheading}</p>
      <p className="text-gray-500 text-sm mb-2">By {blog.user.name}</p>
      <Link to={`/blogs/${blog._id}`} className="text-blue-500">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
