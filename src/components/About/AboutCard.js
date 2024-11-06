import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Malek Jaafar </span>
            from <span className="purple"> Aix-en-provence, France.</span>
            <br />
            I am a passionate data analyst specialized in 
            <span className="purple"> Python</span>, 
            <span className="purple"> Machine learning</span>, and 
            <span className="purple"> SQL</span>.
            <br />
            With a strong background in computer engineering, I focus on 
            data management, data treatement, and data analystics to create 
            innovative solutions.
            <br />
            <br />
            Some other activities that I enjoy include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
