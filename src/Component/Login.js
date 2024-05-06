// Login.js - Login page component

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import {jwtDecode} from 'jwt-decode';
import { Loveone } from "../Pages/Loveone";
import 


const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [admin,isAdmin]= useState(false);
  const[token,setToken]=useState();

  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const handlePasswordChange =(e) => {
    setPassword(e.target.value);
  }
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const response = await fetch("http://localhost:2000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      // Set token in local storage
      localStorage.setItem("token", data.token);
      // Set logged in state
      setLoggedIn(true);
      const decodedToken = jwtDecode(data.token);
      setToken(decodedToken);
      console.log(decodedToken);
      if (decodedToken.isAdmin === true){

        navigate("/register")
      } else{
        navigate("/pageone")
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSubmit}>
        <div className="ring">
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <div className="login">
            <h1>Login</h1>
            <h2>Hey There {String.fromCodePoint("128525")} </h2>
            <div className="inputBx">
              <input
                value={username}
                onChange={handleUsernameChange}
                type="text"
                placeholder="Username"
              />

              <input
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="inputBx">
              <button type="submit" className="btn-grad">
                Log in
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
