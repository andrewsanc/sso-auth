import React, { useState } from "react";
import "./Login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitRegister = () => {
    console.log("registering");
  };

  return (
    <div className='card-login'>
      <h4>Register</h4>
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
      <button onClick={() => onSubmitRegister()} className='button primary'>
        Register
      </button>
      <button
        onClick={() => console.log("cancel")}
        className='button secondary'
      >
        Cancel
      </button>
    </div>
  );
};

export default Register;
