import logo from "./logo.svg";
import React, { useState , useEffect} from "react";
import Login from "./Component/Login";
import Register from "./Component/Register"
import { Loveone } from "./Pages/Loveone";
import { Lovetwo } from "./Pages/Lovetwo";
import { Lovethree } from "./Pages/Lovethree";
import { Lovefour } from "./Pages/Lovefour";
import { Lovefive } from "./Pages/Lovefive";
import { UserProvider } from "./Context/UserContext";
import { Footer } from "./Pages/Footer";
import {  BrowserRouter , Routes, Route ,Navigate } from 'react-router-dom';
import "./App.css";
import song from "./Images/Premika-Ne-Pyar-Se-Ringtone-Download.mp3"

function App() {
  

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const audio = new Audio(song);
    

    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };
    if(loggedIn){
      audio.play();
      audio.addEventListener('ended', handleEnded);
      audio.currentTime = 0;
    }else{
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.currentTime = 0;
    }
  }, [loggedIn]);

  console.log(loggedIn)
  
 

  return (
      <>
      <div className="App">
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/register" /> : <Login setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={loggedIn ? <Register /> : <Navigate to="/" />} />
        <Route path="/pageone" element={<Loveone/>}/>
        <Route path="/pagetwo" element={<Lovetwo/>}/>
        <Route path="/pagethree" element={<Lovethree/>}/>
        <Route path="/pagefour" element={<Lovefour/>}/>
        <Route path="/pagefive" element={<Lovefive/>}/>

      </Routes>
      
    </BrowserRouter>
 
    {loggedIn === true ? <Footer /> : null}
    </div>
    </>     
  );
}

export default App;
