import React, { useState } from "react";
import Login from "./Login";
import "./App.css";
import Register from "./Register";

const App = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const handleIsNewUser = () => {
    setIsNewUser(true);
  };

  const handleCancelRegistation = () => {
    setIsNewUser(false);
  };

  return (
    <div className='App'>
      {userIsLoggedIn ? (
        <div>Welcome!</div>
      ) : isNewUser ? (
        <Register handleCancelRegistation={handleCancelRegistation} />
      ) : (
        <Login handleIsNewUser={handleIsNewUser} />
      )}
    </div>
  );
};

export default App;
