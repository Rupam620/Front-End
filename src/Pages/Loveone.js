import React, { useEffect, useState } from 'react'
import {jwtDecode} from 'jwt-decode';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myGif from '../Images/hi-waving.gif'; 
import Button from 'react-bootstrap/Button';
import '../App.css'
import { animated, useSpring } from 'react-spring';
import { useNavigate } from 'react-router-dom';
export  function Loveone() {
    const navigate = useNavigate();
   const [token,setToken]=useState({});
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
   useEffect(() => {
    // Retrieve token from localStorage when the component mounts
    const token = localStorage.getItem('token');
    console.log(token);
    setToken(jwtDecode(token))
    setIsLoggedIn(true)
    console.log(JSON.stringify(token));
  }, []);
  const animationProps = useSpring({
    opacity: isLoggedIn ? 1 : 0,
    transform: isLoggedIn ? 'translateY(0)' : 'translateY(20px)',
    from: { opacity: 0, transform: 'translateY(20px)' }, // Initial state
  });

  
       
  return (
    <>

    <animated.h2  className="my-5 mx-5 prText" style={animationProps}> Welcome {token?.username} ! To the world of love {String.fromCodePoint("128525")} </animated.h2>
    <Container fluid="md" className='text-center my-5'>
      
   <Row>
    <Col md={12}>
      <img  className = 'myImage d-flex justify-content-center align-items-center' src={myGif} alt='' />
    </Col>
    <Col md={12}>
        <h2 className='prText' >Do You Love Me ? {String.fromCodePoint("129303")} </h2>
    </Col>
    <Row className='my-3 '>
        <div className='button-container '>
        <Col xs={6} sm={4} className="py-3 button-col">
            <Button variant="success" size="lg" active onClick={()=>navigate('/pagefive')}>Yes</Button>
        </Col>
        <Col xs={6} sm={4} className="py-3 button-col">
            <Button variant="danger" size="lg" active onClick={()=>navigate('/pagetwo')}>No</Button>
        </Col>
        </div>
    </Row>
   </Row>
    </Container>
    </>

  )
}
