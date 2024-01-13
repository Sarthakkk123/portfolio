import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import infosys from "../assets/infosys.png";
import todo from "../assets/todo.png";
import flipkart from "../assets/flipkart.png";

const projectsData = [
  {
    title: "RPS Finance Consultant",
    image: infosys,
    category: "Professional",
    technologies: ["ReactJs", "PostgreSQL", "BootStrap", "NodeJs"],
    description: [
      "Led development at RPS Finance Consultant, a finance firm, employing ReactJs, PostgreSQL, BootStrap, and NodeJs technologies.",
      "Skillfully implemented ChatGPT API to introduce an AI-powered chatbot, effectively managing emails, scheduling meetings, and delivering updates.",
      "Streamlined client interactions, enhancing efficiency in managing communication and appointments.",
    ],
  },
  {
    title: "PF Withdrawal",
    image: infosys,
    category: "Professional",
    technologies: ["ReactJs", "PostgreSQL", "BootStrap", "NodeJs"],
    description: [
      "Spearheaded 'PF Withdrawal Solution' development, utilizing ReactJs, Node.js, and PostgreSQL",
      "Innovatively integrated 'Extract Edge' for precise document validation automation",
      "Optimized QC analyst workflow, amplifying PF withdrawal process efficiency",
      "Translated intricate processes into user-friendly solutions, elevating overall experience.",
    ],
  },
  {
    title: "Todo Application",
    image: todo,
    category: "Personal",
    technologies: ["React", "Firebase", "Bootstrap"],
    description: [
      "Enabled users to Add, Edit, and Delete tasks seamlessly.",
      "Implemented local storage for offline access and persistent data across sessions.",
      "Deployed ToDo app on Firebase for efficient data storage and hosting.",
    ],
    // githubLink: "https://github.com/example/project2",
    viewLink: "https://todo-ss1999.web.app/",
  },
  {
    title: "Flipkart Clone",
    image: flipkart,
    category: "Personal",
    technologies: ["Angular", "Firebase", "Bootstrap"],
    description: [
      "Implemented functionalities for adding/removing items, creating bills, enhancing the user shopping experience.",
      "Enabled dynamic data fetching from APIs for real-time product updates.",
      "Deployed Flipkart app on Firebase for scalable data storage and reliable hosting.",
    ],
    githubLink: "https://github.com/Sarthakkk123/flipkart",
    viewLink: "https://flipkartt-2023.web.app/",
  },
];

const Project = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <Container className="text-center mt-4">
      <Row>
        <div className="col-12 aboutTxt">
          <span className="blueTxt">Project </span>
        </div>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button
            variant={filter === "All" ? "primary" : "outline-primary"}
            onClick={() => handleFilterChange("All")}
          >
            All
          </Button>{" "}
          <Button
            variant={filter === "Professional" ? "primary" : "outline-primary"}
            onClick={() => handleFilterChange("Professional")}
          >
            Professional
          </Button>{" "}
          <Button
            variant={filter === "Personal" ? "primary" : "outline-primary"}
            onClick={() => handleFilterChange("Personal")}
          >
            Personal
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center justify-content-sm-start">
        {filteredProjects.map((project, index) => (
          <Col key={index} md={4} sm={10} xs={10} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body className="text-left">
                <Card.Title>{project.title}</Card.Title>
                <div className="d-flex justify-content-between mt-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.viewLink && (
                    <a
                      href={project.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  )}
                </div>
                <Card.Text>
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                  <br />
                  <div className="d-flex flex-column">
                    <ul>
                      {project.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Project;