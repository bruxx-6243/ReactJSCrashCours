import React, { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [newUsername, setNewUsername] = useState<string>("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
      This is the login page of {username} <br />
      <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewUsername(event.target.value)} />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
