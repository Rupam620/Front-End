import React, { useEffect, useState , useRef} from 'react'
import {jwtDecode} from 'jwt-decode';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myGif4 from '../Images/mochi-mad.gif'; 
import Button from 'react-bootstrap/Button';
import '../App.css'
import { useNavigate } from 'react-router-dom';
export  function Lovefour() {
    const navigate = useNavigate();
   const [token,setToken]=useState({});
   const [buttonPosition, setButtonPosition] = useState({x:0,y:0});
   const [isNoButtonClicked, setIsNoButtonClicked] = useState(false);
   const buttonRef = useRef(null)
   useEffect(() => {
    // Retrieve token from localStorage when the component mounts
    const token = localStorage.getItem('token');
    console.log(token);
    setToken(jwtDecode(token))
    console.log(JSON.stringify(token));
  }, []);

  const handleNoHover = () => {
    const windowWidth = window.innerWidth - 1000; // Adjust for button width
    const windowHeight = window.innerHeight - 1000; // Adjust for button height
    const newX = Math.random() * windowWidth;
    const newY = Math.random() * windowHeight;
    setButtonPosition({ x: newX, y: newY });
  };

  const buttonStyle = {
    position: 'absolute',
    top: buttonPosition.y,
    left: buttonPosition.x,
    animation: 'moveButton 0.3s ease-in-out',
  };



       
  return (
    <>

<h2 className="my-5" style={{marginBottom:100, marginRight: 100}}> </h2>
    <Container fluid="md" className='text-center my-5'>
      
   <Row>
    <Col md={12}>
      <img  className = 'myImage d-flex justify-content-center align-items-center' src={myGif4} alt='' />
    </Col>
    <Col md={12}>
        <h2 className='prText' > Ebar Na bole Dekha  {String.fromCodePoint("128520")} </h2>
    </Col>
    <Row className='my-3 '>
        <div className='button-container '>
        <Col xs={6} sm={4} className="py-3 button-col">
            <Button variant="success" size="lg" active onClick={()=>navigate('/pagefive')}>Yes</Button>
        </Col>
        <Col xs={6} sm={4} className="py-3 button-col">
            <Button  id="noButton" style={buttonStyle}
            onMouseEnter={handleNoHover}
            variant="danger" size="lg" active >No</Button>
        </Col>
        </div>
    </Row>
   </Row>
    </Container>
    </>
  )
}
