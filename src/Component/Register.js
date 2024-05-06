import React, { useState } from 'react';
import '../App.css'
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const[isAdmin , setIsAdmin] = useState(false)

  const navigate = useNavigate();


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const handlePasswordChange =(e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(username === 'admin'){
        setIsAdmin(true)
      }else{
        setIsAdmin(false)
      }
      // Send login request to backend
      const response = await fetch(`${window.location.origin}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password , isAdmin }),
      });
      const data = await response.json();
      if(data.response === "success"){
        alert("User Created Successfully !")
      }else{
        alert("something went wrong !")
      } 
    } catch (error) {
      console.error(error);
    }
  };


  const logOut = ()=>{
    localStorage.removeItem('token')
    window.location.reload()
    navigate('/login')
    console.log("LogOut Successful !");
  }
 

  return (
    <div>
     <form onSubmit={handleSubmit}>
        <div className="ring">
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <div className="login">
            <h2>Register Here </h2>
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
                Register User
              </button>
              <button onClick={logOut} className="btn-grad">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
