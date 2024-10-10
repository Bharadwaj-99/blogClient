
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';



const API_URL = process.env.REACT_APP_BACKEND_URL;
const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/api/users/signin`, formData);
      login(res.data.token);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
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
        className="w-full p-2 mb-4 border"
        required
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
