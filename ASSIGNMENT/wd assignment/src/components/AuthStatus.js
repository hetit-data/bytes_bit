import React, { useContext } from "react";
import { AuthContext } from "../components/context/AuthContext";

const AuthStatus = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h2>Welcome, User!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please log in.</h2>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default AuthStatus;
