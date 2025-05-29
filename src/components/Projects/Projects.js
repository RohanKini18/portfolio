import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import adh from "../../Assets/Projects/adhr.png";
import DL from "../../Assets/Projects/DL.png";
import PANC from "../../Assets/Projects/panc.png";
import passport from "../../Assets/Projects/passport.png";
import profile from "../../Assets/Projects/profile.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong> &{" "}
          <strong className="purple">Documents </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adh}
              isBlog={true}
              title="Adhaar Card"
              description="Government of India, Ministry of Electronics and Information Technology, Unique Identification Authority of India (UIDAI) has issued a unique 12-digit number called Aadhaar to every individual resident of India. It is a proof of identity and address, anywhere in India. It is a random number that does not convey any personal information about the individual."
              variant="primary"
              ghLink="https://drive.google.com/file/d/1sDeyXguKZ6tADCg_i1G3gnkGuiKI3rSD/view?usp=drive_link"
              style={{ maxWidth: "250px" }}
              // demoLink="https:"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DL}
              isBlog={true}
              title="driving licence"
              description="A driving licence is an official document that permits an individual to operate one or more types of motorized vehicles, such as a motorcycle, car, truck, or bus on a public road. It is issued by a governmental authority and serves as proof that the holder has been trained and tested in the rules of the road and the operation of the vehicle."
              ghLink="https://drive.google.com/file/d/1faYqEM-jzlg50aEpGX2afTsvmmRO-4PI/view?usp=drive_link"
              style={{ maxWidth: "250px" }}
              // demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PANC}
              isBlog={true}
              title="PAN Card"
              description="A Permanent Account Number (PAN) card is a unique identifier issued by the Income Tax Department of India to individuals and entities. It serves as a proof of identity and is essential for various financial transactions, including filing income tax returns, opening bank accounts, and conducting high-value transactions. The PAN card contains a 10-character alphanumeric code that is unique to each individual or entity."
              ghLink="https://drive.google.com/file/d/14dab6U8igu4lqdxxmTHMTKvJ1BtpotAR/view?usp=drive_link"
              style={{ maxWidth: "250px" }}
              // demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passport}
              isBlog={true}
              title="Passport"
              description="passport is an official document issued by a government that certifies the holder's identity and citizenship, allowing them to travel internationally. It contains personal information such as the holder's name, date of birth, photograph, and passport number. Passports are essential for crossing international borders and are often required for visa applications."
              ghLink="https://github.com/"
              style={{ maxWidth: "250px" }}
              // demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profile}
              isBlog={true}
              title="Passport-Size Photograph"
              description="A passport photograph is a specific type of photo that meets the requirements set by the government for use in passports. It typically features a clear, front-facing image of the individual with a neutral expression, without glasses or head coverings (unless for religious reasons). The background is usually plain and light-colored. Passport photographs are essential for identification purposes when traveling internationally."
              ghLink="https://drive.google.com/file/d/1ME7qEYsTCdguf3SUq5P8lj9RVBA-AJtS/view?usp=drive_link"
              style={{ maxWidth: "250px" }}
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 

              // discription="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."

            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/RohanKini18/Face-Emotion-Recognition"
              // demoLink="https://"      
            />
          </Col>  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
