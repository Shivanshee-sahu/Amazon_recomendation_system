import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; // ✅

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Login successful:', userCredential.user);
        navigate('/');
      })
      .catch((error) => {
        console.error('Login error:', error.message);
        alert('Invalid credentials');
      });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password) // ✅ use the imported function here
      .then((userCredential) => {
        console.log('User created:', userCredential.user);
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-In</h1>
        <form onSubmit={signIn}>
          <label>Email or mobile phone number</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login_signInButton">Sign In</button>
        </form>

        <p>
          By continuing, you agree to Amazon's <span className="login_link">Conditions of Use</span> and <span className="login_link">Privacy Notice</span>.
        </p>

        <button className="login_registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
