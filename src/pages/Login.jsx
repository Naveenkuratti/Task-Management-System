import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { username, password, rememberMe });
    navigate('/tasks');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-icon">
          <i className="fa-solid fa-user text-purple-700 text-5xl"></i>
        </div>

        <h2>Welcome Back</h2>

        <div className="w-full relative">
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <i className="fa-solid fa-user input-icon"></i>
        </div>

        <div className="w-full relative">
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <i className="fa-solid fa-lock input-icon"></i>
        </div>

        <div className="login-options">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label>Remember me</label>
          </div>
          <button type="button" onClick={() => navigate('/forgot-password')}>
            Forgot Password?
          </button>
        </div>

        <button type="submit" className="login-button"      on onClick={()=> navigate('/tasklist')}>
          LOGIN
        </button>

        
        <button 
          type="button" 
          className="register-button" 
          onClick={() => navigate('/register')}
        >
          REGISTER
        </button>

      </form>
    </div>
  );
}
