import { Row, Col } from 'react-bootstrap';

const TechStack = () => {
    return (
        <div>
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
        </div>
    );
};

export default TechStack;