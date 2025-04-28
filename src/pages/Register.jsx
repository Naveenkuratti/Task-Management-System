import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../api';
import './Register.css'; 

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authAPI.post('/register', { email, password });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Create an Account</h2>

        <div className="input-group">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required
            className="register-input"
          />
        </div>

        <div className="input-group">
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required
            className="register-input"
          />
        </div>

        <button type="submit" className="register-button">
          Register
        </button>

        <button 
          type="button" 
          onClick={() => navigate('/')} 
          className="login-link"
        >
          Already have an account? Login
        </button>
      </form>
    </div>
  );
}
