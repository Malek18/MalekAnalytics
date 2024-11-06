import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiC,
  DiJavascript1,
  DiPython,
  DiGit,
  DiJava,
  DiAndroid,
  DiMysql,
  DiHtml5,DiCss3,
  DiScrum,
  DiLinux,
  DiGoogleAnalytics,
  DiLinux,
  DiMysql,
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgC />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleAnalytics />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
      </Col>
    </Row>
  );
}

export default Techstack;
