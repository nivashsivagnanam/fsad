// import React from 'react'

//  export const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.data.success) {
        setSuccess('Login successful!');
        setError('');
        // Store token or redirect to another page
        console.log('Token:', response.data.token);
      } else {
        setError('Invalid email or password.');
        setSuccess('');
      }
    } catch (err) {
      console.error(err);
      setError('Error logging in. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
