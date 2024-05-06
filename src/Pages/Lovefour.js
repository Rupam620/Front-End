import React, { useEffect, useState, useRef } from 'react';
import { jwtDecode } from 'jwt-decode';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myGif4 from '../Images/mochi-mad.gif';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../App.css';
import '../endpage.css'
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom';

export function Lovefour() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [isClicked , setIsClicked] = useState(false)
    const navigate = useNavigate();
    const [token, setToken] = useState({});
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef(null);

    useEffect(() => {
        // Retrieve token from localStorage when the component mounts
        const token = localStorage.getItem('token');
        setToken(jwtDecode(token));
        
    }, []);

    const handleNoHover = () => {
        setIsClicked(true)
        const maxX = window.innerWidth  - 1000 // Adjust for button width
        const maxY = window.innerHeight  - 1000 // Adjust for button height
        console.log(maxX);
        console.log(maxY);
        
        
        
        // Generate new random coordinates
        console.log("old x",buttonPosition.x);
        console.log("old y",buttonPosition.y);
        const newX = Math.floor(Math.random()*maxX)
        const newY = Math.floor(Math.random()*maxY)
        console.log("new x === " , newX);
        console.log("new Y ===" , newY);
        console.log("diff betwen old  x and new X " , newX - buttonPosition.x);
        console.log("diff betwen old  y and new y " , newY - buttonPosition.y);
        setButtonPosition({ x: newX, y: newY })

        


        // if(newX - buttonPosition.x <= 10 || newY - buttonPosition.y <= 10) {
        //   console.log("mile geche");
        //   setButtonPosition({ x: newX * 0.25, y: newY*0.25 })
        // }else{
        //   console.log("mile ni");
        //   setButtonPosition({ x: newX, y: newY })
        // }

        


        

        // Update button position only if the new position is significantly different from the current position
        // const threshold =  Math.floor(Math.random() * 6); 
        // console.log("thresold === " , threshold);
        // const isSignificantChange =
        //     (Math.abs(Math.abs(buttonPosition.x) - Math.abs(newX)) <= threshold &&
        //     Math.abs(Math.abs(buttonPosition.y) - Math.abs(newY)) <=threshold);

        // console.log(isSignificantChange);

        // if (isSignificantChange) {
        //     setButtonPosition({ x: newX, y: newY });
        // }else{
        //   setButtonPosition({ x: newX-56, y: newY-56 });
        // }


    };

    const buttonStyle = {
        position: 'absolute',
        top:  !isClicked ? -14 : buttonPosition.y ,
        left: !isClicked ? 73 : buttonPosition.x ,
        animation: 'moveButton 100s ease-out-in',
    };

    return (
        <>
            <h2 className="my-5" style={{ marginBottom: 100, marginRight: 100 }}> </h2>
            <Container fluid="md" className='text-center my-5'>

                <Row>
                    <Col md={12}>
                        <img className='myImage-1 d-flex justify-content-center align-items-center' src={myGif4} alt='' />
                    </Col>
                    <Col md={12}>
                        <h2 className='prText'> Ebar Na bole Dekha {String.fromCodePoint("128520")} </h2>
                    </Col>
                    <Row className='my-3 '>
                        <div className='button-container '>
                            <Col xs={6} sm={4} className="py-3 button-col">
                                <Button variant="success" size="lg" active onClick={() => navigate('/pagefive')}>Yes</Button>
                            </Col>
                            <Col xs={6} sm={4} className="py-3 button-col">
                                <Button  ref={buttonRef} style={buttonStyle}
                                    onMouseEnter={handleNoHover} 
                                    onClick={handleShow}
                                    variant="danger" size="lg" active >No</Button>
                            </Col>
                        </div>
                    </Row>
                </Row>
            </Container>
            <Footer className="mt-5" />

            <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title> <h1 className='text-dark'>Pleaseeeeeeee !</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body> <h4 className='text-dark text-center'> Say Yes ! {String.fromCodePoint("129402")}  </h4></Modal.Body>
        <Modal.Footer>
         
          <Button  className="text-center" variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
