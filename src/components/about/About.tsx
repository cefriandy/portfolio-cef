import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { Instagram, Linkedin, GitHub } from 'react-feather';
import './About.css';

const About: React.FC = () => {
    const handleViewResume = () => {
        window.open('/portfolio-cef/my-resume.pdf', '_blank');
    };

    return (
        <Container className="about">
            <Row>
                <Col>
                    <h2>About Me</h2>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <ul>
                        <li>
                            I am an experienced Software Engineer with a strong background in Java, TypeScript, Spring, Quarkus, NestJS, and databases like PostgreSQL and MongoDB. I excel in containerization, monitoring, cloud services, and deployment tools (Docker, Dynatrace, GCP(GKE), Jenkins).
                        </li>
                        <li>
                            Throughout my career, I have successfully led multiple projects, including PRUForce Web. My ability to collaborate effectively with cross-functional teams and solve complex problems has been key to my success.
                        </li>
                    </ul>
                </Col>
                <Col md={6}>
                    <ul>
                        <li>
                            I hold a Bachelor's degree in Computer Science from President University.
                        </li>
                        <li>
                            In addition to my technical skills, I am known for my strong leadership, teamwork, and problem-solving abilities. I am passionate about continuous learning and staying updated with the latest industry trends.
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <IconContext.Provider value={{ size: '30px' }}>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/excalichocolate" target="_blank" rel="noopener noreferrer">
                                <Instagram size={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/cefriandy-simarmata-613722129" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={30} />
                            </a>
                            <a href="https://github.com/cefriandy" target="_blank" rel="noopener noreferrer">
                                <GitHub size={30} />
                            </a>
                        </div>
                    </IconContext.Provider>
                    <Button variant="primary" className="resume-button" onClick={handleViewResume}>
                        View My Resume
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default About;