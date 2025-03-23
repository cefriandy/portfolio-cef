import React, { useState } from 'react';
import { Row, Col, Button, Modal, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import profileImage from './profile.png';
import './Home.css';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Experiences from '../experience/Experiences';
import Testimonies from '../testimonies/Testimonies';
import projects from './project-data';

interface HomeProps {
    theme: string;
    topRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    experiencesRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
    testimoniesRef: React.RefObject<HTMLDivElement | null>;
    scrollToSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ theme, topRef, aboutRef, projectsRef, experiencesRef, contactRef, testimoniesRef, scrollToSection }) => {
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState<{ title: string; description: string; imageUrl: string[] } | null>(null);
    const [filter, setFilter] = useState('All');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleShow = (title: string, description: string, imageUrl: string[]) => {
        setModalContent({ title, description, imageUrl });
        setCurrentImageIndex(0);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? modalContent!.imageUrl.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === modalContent!.imageUrl.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className={`welcome-container ${theme}`} ref={topRef}>
                <Row className="my-4 top-section animated-background">
                    <Col md={6} className="text-section">
                        <h1 className="fade-in">Hi There!</h1>
                        <div className="fade-in delay-1">
                            <h2 className="typewriter">I'm Cefriandy Simarmata</h2>
                        </div>
                        <p className="fade-in delay-2">
                            A Backend Java Developer. Passionate about crafting high-performance backend systems with Java, Spring Boot, and PostgreSQL.
                        </p>
                        <div className="button-group fade-in delay-3">
                            <Button variant="outline-primary" onClick={() => scrollToSection('Contact')}>Hire Me</Button>
                            <Button variant="outline-primary" onClick={() => scrollToSection('Projects')}>View Work</Button>
                        </div>
                    </Col>
                    <Col md={6} className="image-section">
                        <img src={profileImage} alt="My Profile" className="img-fluid profile-picture enhanced-image" />
                    </Col>
                </Row>
                <Row className="highlights-section fade-in">
                    <Col md={3}>
                        <Card className="highlight-card">
                            <Card.Body>
                                <h4>5+ Years Experience</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="highlight-card">
                            <Card.Body>
                                <h4>15+ Scalable APIs</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="highlight-card">
                            <Card.Body>
                                <h4>Expert in Java, Spring Boot</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="highlight-card">
                            <Card.Body>
                                <h4>Worked with Top Companies</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className={`home-container ${theme}`}>
                <Row className="my-4" ref={aboutRef}><Col><About /></Col></Row>
                <Row className="my-4" ref={projectsRef}><Col><Projects filter={filter} setFilter={setFilter} projects={projects} handleShow={handleShow} /></Col></Row>
                <Row className="my-4" ref={experiencesRef}><Col><Experiences /></Col></Row>
                <Row className="my-4" ref={contactRef}><Col><Contact /></Col></Row>
                <Row className="my-4" ref={testimoniesRef}><Col><Testimonies /></Col></Row>
            </div>

            <div className={`bottom-container ${theme}`}>
                <Row className="my-4">
                    <Col>
                        <h2>Tech Stack</h2>
                        <Row>
                            <Col md={3} className="text-center">
                                <i className="bi bi-bootstrap" style={{ fontSize: '50px' }}></i>
                                <p>Bootstrap</p>
                            </Col>
                            <Col md={3} className="text-center">
                                <i className="bi bi-filetype-tsx" style={{ fontSize: '50px' }}></i>
                                <p>TypeScript</p>
                            </Col>
                            <Col md={3} className="text-center">
                                <i className="bi bi-filetype-js" style={{ fontSize: '50px' }}></i>
                                <p>JavaScript</p>
                            </Col>
                            <Col md={3} className="text-center">
                                <i className="bi bi-node-plus" style={{ fontSize: '50px' }}></i>
                                <p>Nest JS</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className="text-center">
                                <i className="bi bi-filetype-java" style={{ fontSize: '50px' }}></i>
                                <p>Java</p>
                            </Col>
                            <Col md={3} className="text-center">
                                <i className="bi bi-stars" style={{ fontSize: '50px' }}></i>
                                <p>Spring Boot</p>
                            </Col>
                            <Col md={3} className="text-center">
                                <i className="bi bi-person-gear" style={{ fontSize: '50px' }}></i>
                                <p>Jenkins</p>
                            </Col>
                            <Col md={3} className="text-center">
                                <i className="bi bi-coin" style={{ fontSize: '50px' }}></i>
                                <p>Kubernetes</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3} className="text-center">
                                <i className="bi bi-boxes" style={{ fontSize: '50px' }}></i>
                                <p>Docker</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            {modalContent && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalContent?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={6}>
                                <img src={modalContent?.imageUrl[currentImageIndex]} alt={modalContent?.title} className="modal-image" />
                                <div className="image-navigation">
                                    <Button variant="secondary" onClick={handlePrevImage}>&lt;</Button>
                                    <Button variant="secondary" onClick={handleNextImage}>&gt;</Button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <h4>{modalContent?.title}</h4>
                                <p>{modalContent?.description}</p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default Home;