import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className='card-login'>
      <h4>Welcome!</h4>
      <h5>Sign into your account!</h5>
      <label htmlFor='email'>Email</label>
      <input id='password' type='email' />
      <label htmlFor='password'>Password</label>
      <input id='password' type='password' />
      <a href='#'>Recover Password</a>
      <button>Sign In</button>
    </div>
  );
};

export default Login;
