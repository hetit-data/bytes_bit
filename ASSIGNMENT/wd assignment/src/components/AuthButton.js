import React, { useState } from "react";

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <p>{isLoggedIn ? "You are logged in." : "You are logged out."}</p>
    </div>
  );
};

export default AuthButton;
