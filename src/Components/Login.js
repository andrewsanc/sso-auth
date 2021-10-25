import React, { useState } from "react";
import "./Login.css";

const Login = ({ handleIsNewUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitSignIn = (e) => {
    e.preventDefault();
    console.log(`signing in with email: ${email}`);
    console.log(`using password: ${password}`);
  };

  return (
    <div className='card-login'>
      <h4>Welcome!</h4>
      <h5>Sign into your account</h5>
      <div className='card-inputs'>
        <label htmlFor='email'>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          type='email'
        />
        <label htmlFor='password'>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id='password'
          type='password'
        />
      </div>
      <a href='#' onClick={(e) => e.preventDefault()} className='card-link'>
        Recover Password
      </a>
      <button onClick={(e) => onSubmitSignIn(e)} className='button'>
        Sign In
      </button>
      <p className='card-text'>
        Not a member?{" "}
        <a
          href='#'
          onClick={(e) => handleIsNewUser(e)}
          className='card-link small'
        >
          Register Now
        </a>
      </p>
    </div>
  );
};

export default Login;
