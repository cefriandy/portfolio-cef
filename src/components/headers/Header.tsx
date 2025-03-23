import React, { useState } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import CLogo from '../../assets/CLogo.png';

interface HeaderProps {
  setActivePage: (page: string) => void;
  toggleTheme: () => void;
  theme: string;
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActivePage, toggleTheme, theme, scrollToSection }) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (page: string, section: string) => {
    setActivePage(page);
    setExpanded(false);
    setTimeout(() => {
      scrollToSection(section);
    }, 300);
  };

  const handleToggleTheme = () => {
    toggleTheme();
    setExpanded(false);
  };

  return (
    <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme === 'dark' ? 'dark' : 'light'} expand="lg" className={`header-navbar sticky-top ${theme === 'dark' ? 'dark' : ''}`} expanded={expanded}>
      <Navbar.Brand href="/" className="ml-3 brand-padding">
        <img src={CLogo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" end onClick={() => handleNavClick('Home', 'Home')} className="nav-link">
            <h5>Home</h5>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" onClick={() => handleNavClick('About', 'About')} className="nav-link">
            <h5>About</h5>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/projects" onClick={() => handleNavClick('Projects', 'Projects')} className="nav-link">
            <h5>Projects</h5>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/experience" onClick={() => handleNavClick('Experiences', 'Experiences')} className="nav-link">
            <h5>Experiences</h5>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" onClick={() => handleNavClick('Contact', 'Contact')} className="nav-link">
            <h5>Contact</h5>
          </Nav.Link>
          <div className="theme-switch-button">
            <FontAwesomeIcon icon={faSun} className={`icon ${theme === 'dark' ? 'icon-light' : 'icon-dark'}`} />
            <Form.Check
              type="switch"
              id="theme-switch"
              label=""
              checked={theme === 'dark'}
              onChange={handleToggleTheme}
            />
            <FontAwesomeIcon icon={faMoon} className={`icon ${theme === 'dark' ? 'icon-light' : 'icon-dark'}`} />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;