import { Row, Col } from 'react-bootstrap';
import { FaJava, FaNodeJs, FaReact, FaDocker, FaJenkins, FaWindows, FaLinux, FaGit, FaFileAlt } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiHibernate, SiPostgresql, SiMongodb, SiOracle, SiKubernetes, SiDynatrace, SiGrafana } from 'react-icons/si';
import { VscSourceControl } from 'react-icons/vsc';

const TechStack = () => {
    return (
        <div>
            <h2>Tech Stack</h2>
            
            <h3>Backend</h3>
            <Row>
                <Col md={3} className="text-center">
                    <FaJava style={{ fontSize: '50px' }} />
                    <p>Java</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaNodeJs style={{ fontSize: '50px' }} />
                    <p>Nest JS</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiTypescript style={{ fontSize: '50px' }} />
                    <p>TypeScript</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiSpringboot style={{ fontSize: '50px' }} />
                    <p>Spring Boot</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiHibernate style={{ fontSize: '50px' }} />
                    <p>Hibernate</p>
                </Col>
            </Row>

            <h3>Frontend</h3>
            <Row>
                <Col md={3} className="text-center">
                    <FaReact style={{ fontSize: '50px' }} />
                    <p>React</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaReact style={{ fontSize: '50px' }} />
                    <p>JSX</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaReact style={{ fontSize: '50px' }} />
                    <p>Primefaces</p>
                </Col>
            </Row>

            <h3>Databases</h3>
            <Row>
                <Col md={3} className="text-center">
                    <SiMongodb style={{ fontSize: '50px' }} />
                    <p>MongoDB</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiPostgresql style={{ fontSize: '50px' }} />
                    <p>PostgreSQL</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiOracle style={{ fontSize: '50px' }} />
                    <p>Oracle Database</p>
                </Col>
            </Row>

            <h3>Containerization and Deployment</h3>
            <Row>
                <Col md={3} className="text-center">
                    <FaDocker style={{ fontSize: '50px' }} />
                    <p>Docker</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaJenkins style={{ fontSize: '50px' }} />
                    <p>Jenkins</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiKubernetes style={{ fontSize: '50px' }} />
                    <p>GKE / Kubernetes Engine</p>
                </Col>
            </Row>

            <h3>Operating Systems</h3>
            <Row>
                <Col md={3} className="text-center">
                    <FaWindows style={{ fontSize: '50px' }} />
                    <p>Windows</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaLinux style={{ fontSize: '50px' }} />
                    <p>Linux</p>
                </Col>
            </Row>

            <h3>Monitoring & Reports</h3>
            <Row>
                <Col md={3} className="text-center">
                    <SiDynatrace style={{ fontSize: '50px' }} />
                    <p>Dynatrace</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiGrafana style={{ fontSize: '50px' }} />
                    <p>Grafana</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaFileAlt style={{ fontSize: '50px' }} />
                    <p>Jasper</p>
                </Col>
            </Row>

            <h3>Version Control</h3>
            <Row>
                <Col md={3} className="text-center">
                    <FaGit style={{ fontSize: '50px' }} />
                    <p>Git</p>
                </Col>
                <Col md={3} className="text-center">
                    <VscSourceControl style={{ fontSize: '50px' }} />
                    <p>SVN</p>
                </Col>
            </Row>
        </div>
    );
};

export default TechStack;