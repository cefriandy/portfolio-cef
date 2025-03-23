import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Header from './components/headers/Header';
import Footer from './components/footer/Footer';
import Loading from './loading/Loading';
import ScrollToTop from './components/scroll/ScrollToTop';

const App: React.FC = () => {
  const [setActivePage] = useState('About');
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  const topRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const testimoniesRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  const scrollToSection = (section: string) => {
    const offset = 80;
    let element: HTMLElement | null = null;

    switch (section) {
      case 'Home':
        element = topRef.current;
        break;
      case 'Projects':
        element = projectsRef.current;
        break;
      case 'Experiences':
        element = experiencesRef.current;
        break;
      case 'Contact':
        element = contactRef.current;
        break;
      case 'Testimonies':
        element = testimoniesRef.current;
        break;
      case 'About':
      default:
        element = aboutRef.current;
        break;
    }

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header toggleTheme={toggleTheme} theme={theme} scrollToSection={scrollToSection} />
      <div className={`App ${theme}`}>
        <Home
          theme={theme}
          topRef={topRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          experiencesRef={experiencesRef}
          contactRef={contactRef}
          testimoniesRef={testimoniesRef}
          scrollToSection={scrollToSection}
        />
        <ScrollToTop />
      </div>
      <Footer theme={theme} />
    </Router>
  );
};

export default App;