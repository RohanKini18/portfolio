import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,

  SiVercel,

} from "react-icons/si";
import { SiWindows } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiMacos /> */}
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiIntellijidea />
      </Col>
    </Row>
  );
}

export default Toolstack;
