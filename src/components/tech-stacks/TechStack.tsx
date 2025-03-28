import { Row, Col } from 'react-bootstrap';
import { FaJava, FaNodeJs, FaReact, FaGlobe, FaDocker, FaJenkins, FaWindows, FaLinux, FaGit, FaFileAlt } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiHibernate, SiPostgresql, SiMongodb, SiOracle, SiKubernetes, SiDynatrace, SiGrafana } from 'react-icons/si';
import { VscSourceControl } from 'react-icons/vsc';
import 'primeicons/primeicons.css';
import './TechStack.css'

const TechStack = () => {
    return (
        <div>
            <h2>Tech Stack</h2>

            <h3 className="tech-title">Backend</h3>
            <Row>
                <Col md={3} className="text-center">
                    <FaJava style={{ fontSize: '35px' }} />
                    <p>Java</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaNodeJs style={{ fontSize: '35px' }} />
                    <p>Nest JS</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiTypescript style={{ fontSize: '35px' }} />
                    <p>TypeScript</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiSpringboot style={{ fontSize: '35px' }} />
                    <p>Spring Boot</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiHibernate style={{ fontSize: '35px' }} />
                    <p>Hibernate</p>
                </Col>
            </Row>

            <h3 className="tech-title">Frontend</h3>
            <Row>
                <Col md={3} className="text-center">
                    <FaReact style={{ fontSize: '35px' }} />
                    <p>React</p>
                </Col>
                <Col md={3} className="text-center">
                    <i className="pi pi-prime" style={{ fontSize: '35px' }}></i>
                    <p>Primefaces</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaGlobe style={{ fontSize: '35px' }} />
                    <p>JSF</p>
                </Col>
            </Row>

            <h3 className="tech-title">Databases</h3>
            <Row>
                <Col md={3} className="text-center">
                    <SiMongodb style={{ fontSize: '35px' }} />
                    <p>MongoDB</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiPostgresql style={{ fontSize: '35px' }} />
                    <p>PostgreSQL</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiOracle style={{ fontSize: '35px' }} />
                    <p>Oracle Database</p>
                </Col>
            </Row>

            <h3 className="tech-title">Containerization and Deployment</h3>
            <Row>
                <Col md={3} className="text-center">
                    <FaDocker style={{ fontSize: '35px' }} />
                    <p>Docker</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaJenkins style={{ fontSize: '35px' }} />
                    <p>Jenkins</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiKubernetes style={{ fontSize: '35px' }} />
                    <p>GKE / Kubernetes Engine</p>
                </Col>
            </Row>

            <h3 className="tech-title">Operating Systems</h3>
            <Row>
                <Col md={3} className="text-center">
                    <FaWindows style={{ fontSize: '35px' }} />
                    <p>Windows</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaLinux style={{ fontSize: '35px' }} />
                    <p>Linux</p>
                </Col>
            </Row>

            <h3 className="tech-title">Monitoring & Reports</h3>
            <Row>
                <Col md={3} className="text-center">
                    <SiDynatrace style={{ fontSize: '35px' }} />
                    <p>Dynatrace</p>
                </Col>
                <Col md={3} className="text-center">
                    <SiGrafana style={{ fontSize: '35px' }} />
                    <p>Grafana</p>
                </Col>
                <Col md={3} className="text-center">
                    <FaFileAlt style={{ fontSize: '35px' }} />
                    <p>Jasper</p>
                </Col>
            </Row>

            <h3 className="tech-title">Version Control</h3>
            <Row>
                <Col md={3} className="text-center">
                    <FaGit style={{ fontSize: '35px' }} />
                    <p>Git</p>
                </Col>
                <Col md={3} className="text-center">
                    <VscSourceControl style={{ fontSize: '35px' }} />
                    <p>SVN</p>
                </Col>
            </Row>
        </div>
    );
};

export default TechStack;