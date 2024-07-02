import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
          I have worked in <span className="purple">Tor-Secure industry</span>  for over <span className="purple"> 6 Months</span> , with experience in <span className="purple">Security development, project management, and team leadership</span>. <br />  <br /> I have worked on projects for clients in various industries and have a proven track record of delivering high-quality products on time and within budget. <br />
            <br />
            I am currently pursuing BTech CSE from <span className="purple">NMAMIT, Nitte</span>.
            <br />
            <br />
            I am passionate about giving back to the community and regularly volunteer at a local non-profit organization that provides education and career training to underprivileged youth.
            <br />
            <br />
            
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Featuristic Automobiles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym Workouts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rohan Kini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
