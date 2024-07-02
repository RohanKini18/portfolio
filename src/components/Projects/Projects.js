import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";

import skill from "../../Assets/Projects/skill.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import internship from "../../Assets/Projects/Internship.jpg"
import project from "../../Assets/Projects/project.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Project Certificates"
              description="Certificates from Google, Meta, IBM, cloud etc."
              ghLink="https://github.com/"
              // demoLink="https:"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skill}
              isBlog={false}
              title="Skill Certificate"
              description="Certificates from Google, Meta, IBM, cloud, Hacker Rank etc."
              ghLink="https://github.com"
              // demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internship}
              isBlog={false}
              title="Editor.io"
              description="Includes experienced Internship Certificates"
              ghLink="https://github.com/"
              // demoLink="https://"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              // description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              description="Yet to be done...."
              // ghLink="https://github.com/"
              // demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Yet to be done...."
              //ghLink="https://github.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 

              // discription="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/RohanKini18/Face-Emotion-Recognition"
              // demoLink="https://"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
