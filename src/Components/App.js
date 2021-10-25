import React, { useState } from "react";
import Login from "./Login";
import "./App.css";

const App = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  return (
    <div className='App'>
      {userIsLoggedIn ? <div>Welcome!</div> : <Login />}
    </div>
  );
};

export default App;
