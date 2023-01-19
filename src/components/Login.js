import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.logIn(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label>
        UserName:
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
};
