import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by T Rohan Kini</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">


            <li className="social-icons">
              <a
                href="https://github.com/RohanKini18"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>


            <li className="social-icons">
              <a
                href="https://x.com/RohanKini18"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter />
              </a>
            </li>


            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/t-rohan-kini-8b5392262/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_.rohan.kini._/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>


            <li className="social-icons">
              <a
                href="https://www.facebook.com/Rohankini1809"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
