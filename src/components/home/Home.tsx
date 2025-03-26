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
import Typewriter from '../util/Typewritter';
import TechStack from './TechStack';

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
                            <Typewriter texts={["I'm Cefriandy", "A Backend Developer"]} />
                        </div>
                        <p className="fade-in delay-2 message-text">
                            Passionate about crafting high-performance backend systems with Java or TypeScript.
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
                        <Card className={`highlight-card ${theme}`}>
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
                <Row className="my-4" ref={projectsRef}><Col><Projects filter={filter} setFilter={setFilter} projects={projects} handleShow={handleShow} theme={theme} /></Col></Row>                <Row className="my-4" ref={experiencesRef}><Col><Experiences /></Col></Row>
                <Row className="my-4" ref={contactRef}><Col><Contact /></Col></Row>
                <Row className="my-4" ref={testimoniesRef}><Col><Testimonies /></Col></Row>
            </div>

            <div className={`bottom-container ${theme}`}>
                <Row className="my-4">
                    <TechStack />
                </Row>
            </div>

            {modalContent && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{modalContent?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={6} className="image-container">
                                <img src={modalContent?.imageUrl[currentImageIndex]} alt={modalContent?.title} className="modal-image" />
                                <div className="image-navigation">
                                    {currentImageIndex > 0 && (
                                        <i className="bi bi-arrow-left-circle left-arrow" onClick={handlePrevImage} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                                    )}
                                    {currentImageIndex < modalContent?.imageUrl.length - 1 && (
                                        <i className="bi bi-arrow-right-circle right-arrow" onClick={handleNextImage} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                                    )}
                                </div>
                            </Col>
                            <Col md={6}>
                                <h4>{modalContent?.title}</h4>
                                <p className={`description-dark ${theme}`}>{modalContent?.description}</p>
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