import React, { useState } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import profileImage from './profile.png';
import './Home.css';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Experiences from '../experience/Experiences';
import projects from './project-data';

interface HomeProps {
    activePage: string;
    theme: string;
    topRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    experiencesRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
    scrollToSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ activePage, theme, topRef, aboutRef, projectsRef, experiencesRef, contactRef, scrollToSection }) => {
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

    const handleNextImage = () => {
        if (modalContent) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % modalContent.imageUrl.length);
        }
    };

    const handlePrevImage = () => {
        if (modalContent) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + modalContent.imageUrl.length) % modalContent.imageUrl.length);
        }
    };

    return (
        <>
            <div className={`welcome-container`}>
                <Row className={`my-4 top-section animated-background ${theme}`} ref={topRef}>
                    <Col md={6} className="text-section">
                        <h1 className="fade-in">Hi There!</h1>
                        <p className="fade-in delay-1">I'm <span className="highlight-name">Cefriandy Simarmata</span>,
                            a Backend Java Developer with extensive experience for over 5 years.</p>
                        <div className="button-group fade-in delay-2">
                            <button className="btn btn-secondary" onClick={() => scrollToSection('Contact')}>Hire Me</button>
                            <button className="btn btn-secondary" onClick={() => scrollToSection('Projects')}>View Work</button>
                        </div>
                    </Col>
                    <Col md={6} className="image-section">
                        <img src={profileImage} alt="my profile" className="img-fluid profile-picture slide-in" />
                    </Col>
                </Row>
            </div>
            <div className={`home-container ${theme}`}>
                <Row className="my-4" ref={aboutRef}>
                    <Col>
                        <About />
                    </Col>
                </Row>
                <Row className="my-4" ref={projectsRef}>
                    <Col>
                        <Projects filter={filter} setFilter={setFilter} projects={projects} handleShow={handleShow} />
                    </Col>
                </Row>
                <Row className="my-4" ref={experiencesRef}>
                    <Col>
                        <Experiences />
                    </Col>
                </Row>
                <Row className="my-4" ref={contactRef}>
                    <Col>
                        <Contact />
                    </Col>
                </Row>

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
        </>
    );
};

export default Home;