import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <Container className={`footer-container ${theme}`}>
        <Row>
          <Col md={12} className="text-center">
            <p>&copy; {new Date().getFullYear()} Created by Cefriandy Simarmata. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;