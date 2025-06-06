import React, { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images
import adh from "../../Assets/Projects/adhr.png";
import DL from "../../Assets/Projects/DL.png";
import PANC from "../../Assets/Projects/panc.png";
import passport from "../../Assets/Projects/passport.png";
import profile from "../../Assets/Projects/profile.png";

// Project Items
const projectItems = [
  // {
  //   img: adh,
  //   title: "Adhaar Card System",
  //   desc: "Issued by UIDAI, Aadhaar is a unique 12-digit identity number used for verification and services across India.",
  //   link: "https://drive.google.com/file/d/1sDeyXguKZ6tADCg_i1G3gnkGuiKI3rSD/view?usp=drive_link",
  // },
  // {
  //   img: DL,
  //   title: "Driving Licence System",
  //   desc: "Government-issued licence permitting individuals to operate various vehicles on public roads.",
  //   link: "https://drive.google.com/file/d/1faYqEM-jzlg50aEpGX2afTsvmmRO-4PI/view?usp=drive_link",
  // },
];

// Document Items
const documentItems = [
  {
    img: PANC,
    title: "PAN Card",
    desc: "Issued by the Income Tax Dept. of India, PAN is essential for financial transactions, tax filing, and more.",
    link: "https://drive.google.com/file/d/14dab6U8igu4lqdxxmTHMTKvJ1BtpotAR/view?usp=drive_link",
  },
  {
    img: passport,
    title: "Passport",
    desc: "Official document issued by a government allowing international travel and proof of citizenship.",
    link: "https://github.com/",
  },
  {
    img: profile,
    title: "Passport-Size Photograph",
    desc: "A standard photo required for identification in official documents like passports, licenses, etc.",
    link: "https://drive.google.com/file/d/1ME7qEYsTCdguf3SUq5P8lj9RVBA-AJtS/view?usp=drive_link",
  },
  {
    img: adh,
    title: "Adhaar Card System",
    desc: "Issued by UIDAI, Aadhaar is a unique 12-digit identity number used for verification and services across India.",
    link: "https://drive.google.com/file/d/1sDeyXguKZ6tADCg_i1G3gnkGuiKI3rSD/view?usp=drive_link",
  },
  {
    img: DL,
    title: "Driving Licence System",
    desc: "Government-issued licence permitting individuals to operate various vehicles on public roads.",
    link: "https://drive.google.com/file/d/1faYqEM-jzlg50aEpGX2afTsvmmRO-4PI/view?usp=drive_link",
  },
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
                selectedPage === "projects" ? "primary" : "outline-primary"
              }
              onClick={() => setSelectedPage("projects")}
            >
              Projects
            </Button>
            <Button
              variant={
                selectedPage === "documents" ? "primary" : "outline-primary"
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
