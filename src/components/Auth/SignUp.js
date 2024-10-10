// src/components/Auth/SignUp.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const API_URL = process.env.REACT_APP_BACKEND_URL;

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    location: '',
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(`${API_URL}/api/users/signup`, formData);
      login(res.data.token);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 mb-2 border"
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-2 border"
        required
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-2 border"
        required
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        className="w-full p-2 mb-4 border"
        required
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
