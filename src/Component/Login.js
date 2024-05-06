import React, { useState } from "react";
import imgg from "../Images/vector.png";
import {jwtDecode} from 'jwt-decode';
import { Loveone } from "../Pages/Loveone";
import { useNavigate } from "react-router-dom";
import '../Login.css'



const Login = ( {setLoggedIn } ) => {
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
      const response = await fetch(`${window.location.origin}/login`, {
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
      alert(error)
    }
  };






  

  return (
    <div className="form-wrapper">
      <div className="container  my-5">
        
          
            <div className="card  ">
              <div className="card-body">
                <div className="logo">
                  <img className="myImage "src={imgg}  alt="" />
                </div>
               
                <form onSubmit={handleSubmit} >
                  <div className="form-group">
                  {/* <p class="text-muted">Sign in to Latform to continue</p> */}
                    <label className="text-muted my-bold-text" htmlFor="email">Username</label>
                    <div className="form-icon-wrapper my-1">
                      <input
                        type="text"
                        className="form-control formff"
                        id="email"
                        value={username}
                        onChange={handleUsernameChange}
        
                        placeholder="Enter username"
                        autoFocus
                        required
                      />
                      <i className="form-icon-left mdi mdi-email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-muted my-bold-text" htmlFor="password">Password</label>
                    <div className="form-icon-wrapper my-1">
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}        
                        className="form-control formff"
                        id="password"
                        placeholder="Enter password"
                        required
                      />
                      <i className="form-icon-left mdi mdi-lock  pos " />

                      <i className="mdi mdi-eye" />
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          
        </div>
      </div>
    
  );
};

export default Login;
