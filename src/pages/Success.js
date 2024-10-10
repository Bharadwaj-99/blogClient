import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const createBlogPost = async () => {
      const token = localStorage.getItem('authToken');

      try {
        // Extract the session_id from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session_id'); // Get session_id from URL

        // Retrieve the blog data from local storage
        const blogData = JSON.parse(localStorage.getItem('blogData'));

        if (!blogData) {
          console.error('No blog data found');
          navigate('/create-blog'); // Redirect back if no data
          return;
        }

        // Call the API to create the blog post
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/blogs`,
          {
            title: blogData.title, // Use data from local storage
            subheading: blogData.subheading,
            content: blogData.content,
            labels: blogData.labels.split(',').map(label => label.trim()), // Ensure labels are formatted correctly
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log('Blog created:', response.data);
        navigate('/blogs'); // Redirect to blogs after creating
      } catch (error) {
        console.error('Error creating blog:', error);
        navigate('/create-blog'); // Redirect back to create blog if there's an error
      }
    };

    createBlogPost();
  }, [navigate]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Your payment was successful. We are creating your blog...</p>
    </div>
  );
};

export default Success;
