import React, { useEffect, useState , useRef} from 'react'
import {jwtDecode} from 'jwt-decode';

import '../endpage.css'
export  function Lovefive() {
  const [token,setToken]=useState({});
  useEffect(() => {
    // Retrieve token from localStorage when the component mounts
    const token = localStorage.getItem('token');
    console.log(token);
    setToken(jwtDecode(token))
    console.log(JSON.stringify(token));
  }, []);
  const handleClick = () => {
    document.querySelector('.container').classList.add('open');
  };

  const handleClose = () => {
    document.querySelector('.container').classList.remove('open');
  };

  return (
    <div className="bgoverlay">
    <div className="container">
      <span className="ico" onClick={handleClick}>
        <span className="ico2"></span>
        <span className="title mx-2">Click here ...</span>
        {/* <p className=" textt my-5 mt-5"> to </p> */}
        
        <p className=" textt my-5 mt-5">Enter my Heart</p>
      </span>
      <div className="endtext">
        <span className="close" title="Restart" onClick={handleClose}><i className="fa fa-times"></i></span>
        <h1>I love you too {token?.username} !</h1>
        
        <span> <q className='qq'> How do you feel about grapes ?  

          What about a date ? </q>
        </span>

        {/* <h2>What about a date ? </h2> */}
        <p>
          
          <span className='endtt'>~Anirban </span>
        </p>
      </div>
    </div>
  </div>
  )
}
