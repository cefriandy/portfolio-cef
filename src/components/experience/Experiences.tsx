import './Experiences.css';

const experiences = [
  {
    year: 'Feb 2023 - Present',
    title: 'Backend Engineer',
    company: 'NTT Indonesia - Onsite: Prudential Indonesia',
    location: 'Onsite',
    description: [
      'Develop APIs and database structures to ensure seamless transition from the existing system to the new architecture.',
      'Test the system and troubleshoot any issues that arise during the migration process.',
      'Managed the deployment process of applications.'
    ],
    techStack: 'Java, Quarkus, Spring, Nest JS, TypeScript, MongoDB, PostgreSQL, Docker, GKE, Jenkins, GIT'
  },
  {
    year: 'Jul 2021 - Feb 2023',
    title: 'Software Developer',
    company: 'NTT Indonesia - Onsite: Prudential Indonesia',
    location: 'Onsite',
    description: [
      'Developing, testing, and maintaining software applications and systems.',
      'Managing and leading a team of vendor developers.',
      'Collaborating with cross-functional teams to implement new features.',
      'Troubleshooting and debugging software issues as they arise.',
      'Creating technical documentation to help other team members understand the codebase.',
      'Refactoring and improving existing code to increase performance and maintainability.',
      'Monitoring production systems to ensure high availability and performance.',
      'Creating and maintaining deployment scripts and automation tools.'
    ],
    techStack: 'React JS, Redux, Java, Quarkus, Spring, PostgreSQL, Docker, GKE, Jenkins, DynaTrace, Redis, GIT'
  },
  {
    year: 'May 2020 - May 2021',
    title: 'Java Developer',
    company: 'Prosia Sistematika',
    location: 'Remote',
    description: [
      'Developing, testing, and maintaining software applications and systems based on design documents.',
      'Collaborating with cross-functional teams to design and implement new features.',
      'Writing clean and maintainable code that meets industry standards.'
    ],
    techStack: 'Java, Spring MVC, OracleDB, JSF, PrimeFaces, Jasper, SVN'
  }
];

const Experiences = () => {
  return (
    <div className="experiences">
      <h2>Experiences</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience">
          <div className="details">
            <div className="title-location">
              <h3 className="title">{exp.title}</h3>
              <span className="location">{exp.location}</span>
            </div>
            <h4 className="company">{exp.company}</h4>
            <ul className="description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="tech-stack"><strong>Tech Stack:</strong> {exp.techStack}</p>
          </div>
          <div className="year">{exp.year}</div>
        </div>
      ))}
    </div>
  );
}

export default Experiences;