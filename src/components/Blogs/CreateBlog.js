
import React, { useState,  } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
const API_URL = process.env.REACT_APP_BACKEND_URL;
const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    subheading: '',
    content: '',
    labels: '',
  });

  const navigate = useNavigate();

  const handlePaymentAndSubmit = async (e) => {
    e.preventDefault();
    try {
    

      const token = localStorage.getItem('authToken');
      await axios.post(
        `${API_URL}/api/blogs`,
        {
          ...formData,
          labels: formData.labels.split(',').map((label) => label.trim()),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/blogs');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="max-w-2xl mx-auto" onSubmit={handlePaymentAndSubmit}>
      <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-2 border"
        required
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Subheading"
        className="w-full p-2 mb-2 border"
        required
        onChange={(e) => setFormData({ ...formData, subheading: e.target.value })}
      />
      <textarea
        placeholder="Content"
        className="w-full p-2 mb-2 border"
        rows="10"
        required
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      ></textarea>
      <input
        type="text"
        placeholder="Labels (comma separated)"
        className="w-full p-2 mb-4 border"
        onChange={(e) => setFormData({ ...formData, labels: e.target.value })}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Proceed to Payment
      </button>
    </form>
  );
};

export default CreateBlog;
