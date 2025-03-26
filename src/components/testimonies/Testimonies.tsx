import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './Testimonies.css';

interface Testimony {
    name: string;
    position: string;
    message: string;
}

const testimonies: Testimony[] = [
    {
        name: 'Raihan Dzaky',
        position: 'Frontend Engineer | FLO Energy',
        message: 'Cefriandy is an exceptional developer. His work on our backend systems has been transformative.'
    },
    {
        name: 'Riki Prambudi',
        position: 'Frontend Developer | Prudential Indonesia',
        message: 'Working with Cefriandy has been a pleasure. His expertise in Java and Spring Boot is unparalleled.'
    },
    {
        name: 'N Fikri',
        position: 'Software Developer, CGV',
        message: 'Cefriandy consistently delivers high-quality code and innovative solutions.'
    }
];

interface TestimoniesProps {
    theme: string;
}

const Testimonies: React.FC<TestimoniesProps> = ({ theme }) => {
    return (
        <div className={`testimonies-container ${theme}`}>
            <h2 className="section-title">Testimonials</h2>
            <Row>
                {testimonies.map((testimony, index) => (
                    <Col md={4} key={index}>
                        <Card className={`testimony-card ${theme}`}>
                            <Card.Body>
                                <Card.Title>{testimony.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{testimony.position}</Card.Subtitle>
                                <Card.Text>{testimony.message}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Testimonies;