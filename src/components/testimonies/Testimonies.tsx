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
        name: 'John Doe',
        position: 'CEO, Company A',
        message: 'Cefriandy is an exceptional developer. His work on our backend systems has been transformative.'
    },
    {
        name: 'Jane Smith',
        position: 'CTO, Company B',
        message: 'Working with Cefriandy has been a pleasure. His expertise in Java and Spring Boot is unparalleled.'
    },
    {
        name: 'Michael Johnson',
        position: 'Lead Developer, Company C',
        message: 'Cefriandy consistently delivers high-quality code and innovative solutions.'
    }
];

const Testimonies: React.FC = () => {
    return (
        <div className="testimonies-container">
            <h2 className="section-title">Testimonials</h2>
            <Row>
                {testimonies.map((testimony, index) => (
                    <Col md={4} key={index}>
                        <Card className="testimony-card">
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