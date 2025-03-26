import { Row, Col } from 'react-bootstrap';

const TechStack = () => {
    return (
        <div>
            <h2>Tech Stack</h2>
            
            <h3>Backend</h3>
            <Row>
                <Col md={3} className="text-center">
                    <i className="bi bi-filetype-java" style={{ fontSize: '30px' }}></i>
                    <p>Java</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-node-plus" style={{ fontSize: '30px' }}></i>
                    <p>Nest JS</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-filetype-tsx" style={{ fontSize: '30px' }}></i>
                    <p>TypeScript</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-stars" style={{ fontSize: '30px' }}></i>
                    <p>Spring Boot</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-hammer" style={{ fontSize: '30px' }}></i>
                    <p>Hibernate</p>
                </Col>
            </Row>

            <h3>Frontend</h3>
            <Row>
                <Col md={3} className="text-center">
                    <i className="bi bi-filetype-jsx" style={{ fontSize: '30px' }}></i>
                    <p>React</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-filetype-jsx" style={{ fontSize: '30px' }}></i>
                    <p>JSX</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-filetype-jsx" style={{ fontSize: '30px' }}></i>
                    <p>Primefaces</p>
                </Col>
            </Row>

            <h3>Databases</h3>
            <Row>
                <Col md={3} className="text-center">
                    <i className="bi bi-database" style={{ fontSize: '30px' }}></i>
                    <p>MongoDB</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-database" style={{ fontSize: '30px' }}></i>
                    <p>PostgreSQL</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-database" style={{ fontSize: '30px' }}></i>
                    <p>Oracle Database</p>
                </Col>
            </Row>

            <h3>Containerization and Deployment</h3>
            <Row>
                <Col md={3} className="text-center">
                    <i className="bi bi-boxes" style={{ fontSize: '30px' }}></i>
                    <p>Docker</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-person-gear" style={{ fontSize: '30px' }}></i>
                    <p>Jenkins</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-cloud" style={{ fontSize: '30px' }}></i>
                    <p>GKE / Kubernetes Engine</p>
                </Col>
            </Row>

            <h3>Operating Systems</h3>
            <Row>
                <Col md={3} className="text-center">
                    <i className="bi bi-windows" style={{ fontSize: '30px' }}></i>
                    <p>Windows</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-linux" style={{ fontSize: '30px' }}></i>
                    <p>Linux</p>
                </Col>
            </Row>

            <h3>Monitoring & Reports</h3>
            <Row>
                <Col md={3} className="text-center">
                    <i className="bi bi-graph-up" style={{ fontSize: '30px' }}></i>
                    <p>Dynatrace</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-graph-up" style={{ fontSize: '30px' }}></i>
                    <p>Grafana</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-file-earmark-bar-graph" style={{ fontSize: '30px' }}></i>
                    <p>Jasper</p>
                </Col>
            </Row>

            <h3>Version Control</h3>
            <Row>
                <Col md={3} className="text-center">
                    <i className="bi bi-git" style={{ fontSize: '30px' }}></i>
                    <p>Git</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="bi bi-git" style={{ fontSize: '30px' }}></i>
                    <p>SVN</p>
                </Col>
            </Row>
        </div>
    );
};

export default TechStack;