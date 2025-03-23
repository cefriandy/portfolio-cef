import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { Instagram, Linkedin, GitHub } from 'react-feather';
import './About.css';

const About: React.FC = () => {
    const handleViewResume = () => {
        window.open('/my-resume.pdf', '_blank');
    };
    
    return (
        <Container className="about">
            <Row>
                <Col>
                    <h2>About Me</h2>
                    <p>Experienced Software Engineer proficient in Java, TypeScript, Spring, Quarkus,
                        NestJS, and databases like PostgreSQL and MongoDB. Skilled in containerization,
                        monitoring, cloud services and deployment tools (Docker, Dynatrace, GCP(GKE), Jenkins)</p>
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