import { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images

import profile from "../../Assets/Projects/profile.png";
import GP from "../../Assets/Projects/Docs/Garudpuran.png";
import RDPD from "../../Assets/Projects/Docs/RDPD.png";
import KCET from "../../Assets/Projects/Docs/KCET.png";
import CS from "../../Assets/Projects/Docs/cs.png";


import DT from "../../Assets/Projects/projects-img/ht.png";
import LPG from "../../Assets/Projects/projects-img/lpg.png";
import tempe from "../../Assets/Projects/projects-img/temp.png";
import wifi from "../../Assets/Projects/projects-img/wifi.png";
import RC from "../../Assets/Projects/projects-img/RC.png";
import FE from "../../Assets/Projects/projects-img/FE.png";
// Project Items
const projectItems = [
  {
    img: DT,
    title: "Detection of Temperature & Humidity System",
    desc: "A system that monitors and detects temperature and humidity levels in various environments, ensuring optimal conditions.",
    link: "https://github.com/RohanKini18/Determining-Temperature-Humidity-IOT",
  },
  {
    img: LPG,
    title: "LPG GAS Detection System",
    desc: "A system designed to detect amount leaks in LPG gas pipelines, ensuring safety and preventing accidents.",
    link: "https://github.com/RohanKini18/LPG-GAS-Variation-Detection-IOT",
  },
  {
    img: tempe,
    title: "DS18B20 waterproof temperature Detection System",
    desc: "A system that uses the DS18B20 temperature sensor to measure and monitor temperature in various environments.",
    link: "https://github.com/RohanKini18/Waterproof-Temperature-Detection-IOT",
  },
  {
    img: wifi,
    title: "ESP8266 Wi-Fi microchip - Building a Wi-Fi Hacking Toolkit",
    desc: "A system on a chip (SOC) with a built-in TCP/IP protocol stack that allows microcontrollers to connect to Wi-Fi networks and perform a variety of function.",
    link: "https://github.com/RohanKini18/wifi_connectivity_",
  },
  {
    img: RC,
    title: "Rain Sensing Car Wiper System",
    desc: "An automated car wiper system that activates based on rain detection, enhancing driving safety and convenience.",
    link: "https://github.com/RohanKini18/Automatic-Rain-Sensing-Car-Wiper"
  },
  {
    img: FE,
    title: "Facial Emotion Recognition AI",
    desc: "CNN based AI model that detects and classifies human emotions from facial expressions in images or videos.",
    link: "https://github.com/RohanKini18/Face-Emotion-Recognition"
  }

];

// Document Items
const documentItems = [
  {
    img: profile,
    title: "Passport-Size Photograph",
    desc: "A standard photo required for identification in official documents like passports, licenses, etc.",
    link: "https://drive.google.com/file/d/1ME7qEYsTCdguf3SUq5P8lj9RVBA-AJtS/view?usp=drive_link",
  },
  {
    img: GP,
    title: "Garud Puran - Document",
    desc: "Garud Puran is one of the eighteen Mahapuranas, a genre of ancient Indian scriptures.",
    link: "https://drive.google.com/file/d/1onZzkEI3SITZpPusHMokEWQTP5P5GnvB/view?usp=drive_link",
  },
  {
    img: RDPD,
    title: "Rich Dad Poor Dad - Document",
    desc: "Rich Dad Poor Dad is a book written by Robert T. Kiyosaki that advocates the importance of financial literacy, financial independence and building wealth through investing in assets.",
    link: "https://drive.google.com/file/d/1Qh6kKgoBwfXvwUWo99H-Wbdzo-rulA9U/view?usp=sharing",
  },

  {
    img: KCET,
    title: "KCET Question Bank & PYQ's - Document",
    desc: "The Karnataka Common Entrance Test (KCET) is an entrance examination conducted for admission to various professional courses in the state of Karnataka, India. It includes a question bank and previous year question papers for practice of Physics, Chemistry, and Mathematics for engineering aspirants.",
    link: "https://drive.google.com/drive/folders/1CL4lEIa3t1_i99hrV23DMHSYLe3-kcZW?usp=drive_link",
  },

  {
    img: CS,
    title: "Computer Science Notes for Class 11 & 12 - Document",
    desc: "Comprehensive notes covering fundamental concepts, programming languages, algorithms, data structures, and more in the field of computer science. Aplicable for high school and early college students (PU Students)",
    link: "https://drive.google.com/drive/folders/1f3l73-B2iKeTxfYZ2U2da8CjYnoN4DxV?usp=drive_link",
  }

];

function Projects() {
  const [selectedPage, setSelectedPage] = useState("projects"); // or "documents"

  const itemsToShow =
    selectedPage === "projects" ? projectItems : documentItems;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent{" "}
          <strong className="purple">
            {selectedPage === "projects" ? "Projects" : "Documents"}
          </strong>
        </h1>
        <p style={{ color: "white" }}>
          {selectedPage === "projects"
            ? "Here are some of my recent software or hardware projects."
            : "These are document-related tools and resources I've created or used."}
        </p>

        {/* Toggle Buttons */}
        <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
          <ButtonGroup>
            <Button
              variant={
                selectedPage === "projects" ? "primary" : "outline-light"
              }
              onClick={() => setSelectedPage("projects")}
            >
              Projects
            </Button>
            <Button
              variant={
                selectedPage === "documents" ? "primary" : "outline-light"
              }
              onClick={() => setSelectedPage("documents")}
            >
              Documents
            </Button>
          </ButtonGroup>
        </Row>

        {/* Display Cards */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {itemsToShow.map((item, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={item.img}
                isBlog={selectedPage === "documents"} // true if documents, false if projects
                title={item.title}
                description={item.desc}
                ghLink={item.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
