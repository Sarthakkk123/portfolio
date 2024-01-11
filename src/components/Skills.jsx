import React from "react";
import { Row, Col, Image } from "react-bootstrap";
// import "./Skills.css"; // Add your own CSS file for additional styling
import html5 from "../assets/skill-icon/HTML5.png";
import css3 from "../assets/skill-icon/css3.png";
import javaScriptImg from "../assets/skill-icon/javaScript.png";
import reactJs from "../assets/reactIMG.png";
import angular from "../assets/skill-icon/AngularJs.png";
import nodeJs from "../assets/skill-icon/nodeJs.png";
import typeScript from "../assets/skill-icon/TypeScript.png";
import MySQL from "../assets/skill-icon/MySQL.png";
import java from "../assets/skill-icon/JAVA.png";
import springBoot from "../assets/skill-icon/springBoot.png";
import bootStrap from "../assets/skill-icon/bootstrap.png";
import postgreSQL from "../assets/skill-icon/postgreSQL.png";
import cpp from "../assets/skill-icon/cpp.png";

const Skills = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12 aboutTxt">
          <span className="blueTxt">Skills </span>
          <span>& Education</span>
        </div>
      </div>

      <Row>
        {/* Skills Section */}
        <Col lg={9} md={12} sm={12} className="checkBoxes">
          <Row>
            {skillsData.map((skill, index) => (
              <Col key={index} md={3} sm={6} xs={6} className="mb-3">
                <div>
                  <Image
                    className="skillsImage"
                    src={skill.image}
                    alt={skill.name}
                  />
                </div>
                <div>{skill.name}</div>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Education Section */}
        <Col lg={3} md={12} sm={12} className="educationSection text-center">
          {educationData.map((edu, index) => (
            <Col key={index} md={12} sm={4} xs={12} className="mb-4 educationItem">
              <div>
                <div className="eduYear">{edu.year}</div>
                <div className="board">{edu.board}</div>
                <div className="degree">{edu.degree}</div>
                <div className="percentage">{edu.percentage}</div>
              </div>
            </Col>
          ))}
        </Col>
      </Row>
    </div>
  );
};

const skillsData = [
  { name: "HTML5", image: html5 },
  { name: "CSS3", image: css3 },
  { name: "JavaScript", image: javaScriptImg },
  { name: "ReactJs", image: reactJs },
  { name: "Angular", image: angular },
  { name: "NodeJs", image: nodeJs },
  { name: "TypeScript", image: typeScript },
  { name: "MySQL", image: MySQL },
  { name: "JAVA", image: java },
  { name: "Springboot", image: springBoot },
  { name: "Bootstrap", image: bootStrap },
  { name: "PostgreSQL", image: postgreSQL },
  { name: "C++", image: cpp },
];

const educationData = [
  {
    year: "2022",
    board: "Pune University",
    degree: "Bachelor of Engineering",
    percentage: "65%",
  },
  {
    year: "2017",
    board: "Maharashtra Board",
    degree: "HSC",
    percentage: "67%",
  },
  {
    year: "2015",
    board: "Maharashtra Board",
    degree: "SSC",
    percentage: "89%",
  },
];

export default Skills;
