import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import './Projects.css';

interface ProjectProps {
    filter: string;
    setFilter: (filter: string) => void;
    projects: Array<{ title: string; description: string; imageUrl: string[]; category: string }>;
    handleShow: (title: string, description: string, imageUrl: string[]) => void;
    theme: string;
}

const Projects: React.FC<ProjectProps> = ({ filter, setFilter, projects, handleShow, theme }) => {
    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);
    return (
        <div className={`projects-container ${theme}`}>
            <h2>Projects</h2>
            <Form.Group controlId="projectFilter" className="filter-group">
                <Form.Label>Filter by Category</Form.Label>
                <Form.Control as="select" value={filter} onChange={(e) => setFilter(e.target.value)} className="custom-select">
                    <option value="All">All</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                </Form.Control>
            </Form.Group>
            <Row>
                {filteredProjects.map((project, index) => (
                    <Col md={4} key={index} className="project-card">
                        <Fade triggerOnce>
                            <Card>
                                <Card.Img variant="top" src={project.imageUrl[0]} className="project-image" alt={project.title} onClick={() => handleShow(project.title, project.description, project.imageUrl)} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleShow(project.title, project.description, project.imageUrl)}>
                                        Learn More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Fade>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Projects;