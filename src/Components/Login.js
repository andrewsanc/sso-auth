import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='card-login'>
      <h4>Welcome!</h4>
      <h5>Sign into your account!</h5>
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
      <a href='#'>Recover Password</a>
      <button>Sign In</button>
    </div>
  );
};

export default Login;
