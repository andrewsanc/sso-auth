import React, { useState } from "react";
import Login from "./Login";
import "./App.css";
import Register from "./Register";

const App = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      {userIsLoggedIn ? <div>Welcome!</div> : <Register />}
    </div>
  );
};

export default App;
