import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../services/api';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await getBlogById(id);
        setBlog(fetchedBlog);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch blog details.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-gray-500 text-sm mb-4">By {blog.user.name}</p>
      <h3 className="text-xl font-bold mb-2">{blog.subheading}</h3>
      <p className="prose mb-8">{blog.content}</p>
      {blog.labels && (
        <div className="flex flex-wrap">
          {blog.labels.map((label) => (
            <span
              key={label}
              className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full mr-2 mb-2"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
