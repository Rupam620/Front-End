import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { animated, useSpring } from "react-spring";
import myGif2 from "../Images/cry.gif";
import myGif from "../Images/hi-waving.gif";
import Button from "react-bootstrap/Button";
import "../App.css";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
export function Loveone() {
  const navigate = useNavigate();
  const [token, setToken] = useState({});
  useEffect(() => {
    // Retrieve token from localStorage when the component mounts
    const token = localStorage.getItem("token");
    console.log(token);
    setToken(jwtDecode(token));
    console.log(JSON.stringify(token));
  }, []);

  console.log();

  const animationProps = useSpring({
    opacity: token?.username ? 1 : 0,
    transform: token?.username ? "translateY(0)" : "translateY(20px)",
    from: { opacity: 0, transform: "translateY(20px)" }, // Initial state
  });

  return (
    <>
      <animated.h2 className="my-5 mx-5 prText" style={animationProps}>
        {" "}
        Welcome {token?.username} ! to the world of love{" "}
        {String.fromCodePoint("128525")}{" "}
      </animated.h2>
      <Container fluid="md" className="text-center my-5">
        <Row>
          <Col md={12}>
            <img
              className="myImage-1 d-flex justify-content-center align-items-center"
              src={myGif}
              alt=""
            />
          </Col>
          <Col md={12}>
            <h2 className="prText">
              {" "}
              Do you love me ? {String.fromCodePoint("129303")}{" "}
            </h2>
          </Col>
          <Row className="my-3 ">
            <div className="button-container ">
              <Col xs={6} sm={4} className="py-3 button-col">
                <Button
                  variant="success"
                  size="lg"
                  active
                  onClick={() => navigate("/pagefive")}
                >
                  Yes
                </Button>
              </Col>
              <Col xs={6} sm={4} className="py-3 button-col">
                <Button
                  variant="danger"
                  size="lg"
                  active
                  onClick={() => navigate("/pagetwo")}
                >
                  No
                </Button>
              </Col>
            </div>
            
          </Row>
        </Row>
        <Footer className="mt-5"/>
        
      </Container>
     

     
    </>
  );
}
export default Loveone;
