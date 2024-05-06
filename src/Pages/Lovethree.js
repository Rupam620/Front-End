import React, { useEffect, useState } from 'react'
import {jwtDecode} from 'jwt-decode';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myGif3 from '../Images/Couple Love GIF by The Valentines - Find & Share on GIPHY.gif'; 
import Button from 'react-bootstrap/Button';
import '../App.css'
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';
export  function Lovethree() {
    const navigate = useNavigate();
   const [token,setToken]=useState({});
   useEffect(() => {
    // Retrieve token from localStorage when the component mounts
    const token = localStorage.getItem('token');
    console.log(token);
    setToken(jwtDecode(token))
    console.log(JSON.stringify(token));
  }, []);
 const str = '('
  
       
  return (
    <>

<h2 className="my-5" style={{marginBottom:100, marginRight: 100}}> </h2>
    <Container fluid="md" className='text-center my-5'>
      
   <Row>
    <Col md={12}>
      <img  className = 'myImage-1 d-flex justify-content-center align-items-center' src={myGif3} alt='' />
    </Col>
    <Col md={12}>
        <h2 className='prText' > Sesh barer moto vebe ne ? {String.fromCodePoint("128547")} </h2>
    </Col>
    <Row className='my-3 '>
        <div className='button-container '>
        <Col xs={6} sm={4} className="py-3 button-col">
            <Button variant="success" size="lg" active onClick={()=>navigate('/pagefive')}>Yes</Button>
        </Col>
        <Col xs={6} sm={4} className="py-3 button-col">
            <Button variant="danger" size="lg" active onClick={()=>navigate('/pagefour')}>No</Button>
        </Col>
        </div>
    </Row>
   </Row>
    </Container>
    <Footer className="mt-5"/>
    </>
  )
}
