import React from 'react';
import ReactDOM from 'react-dom';

// Sample project data
const projects = [
  {
    id: 1,
    title: "AI Shopping App",
    description: "AI shopping app redefines online shopping by combining advanced AI technology with engaging social features.",
    category: "Artificial Intelligence",
    teamSize: 21,
    roles: ["UI/UX Designer", "Frontend Developer", "Mobile App Tester", "AI/ML Engineers"]
  },
  {
    id: 2,
    title: "Echoes Of Warmth",
    description: "EOW is a non profit that is starting a blog site to spread knowledge in Technology, Business, Arts and Healthcare.",
    category: "Nonprofits",
    teamSize: 15,
    roles: ["Content Writer - Tech", "Content Writer - Health", "Content Writer - Business"]
  },
  {
    id: 3,
    title: "Platform for blackpreneurs",
    description: "A social platform to connect black entrepreneurs globally allowing interaction and business promotion.",
    category: "Software",
    teamSize: 3,
    roles: ["UX Designer", "Frontend Developer", "Backend Engineer"]
  },
  {
    id: 4,
    title: "AI-Powered Task Management",
    description: "Building a productivity app that uses AI to prioritize tasks based on user habits and preferences.",
    category: "Productivity",
    teamSize: 3,
    roles: ["Backend Developer", "UX Designer", "ML Engineer"]
  },
  {
    id: 5,
    title: "Sustainable Marketplace",
    description: "An e-commerce platform connecting eco-friendly product sellers with environmentally conscious consumers.",
    category: "E-commerce",
    teamSize: 2,
    roles: ["Frontend Developer", "Marketing Specialist", "Content Writer"]
  },
  {
    id: 6,
    title: "Local Events Discovery App",
    description: "Mobile app that helps users discover local events based on their interests and location, with social features.",
    category: "Social",
    teamSize: 4,
    roles: ["Mobile Developer", "UX/UI Designer", "Backend Engineer"]
  }
];

// Simple project card
const ProjectCard = ({ project }) => (
  <div style={{
    backgroundColor: '#111827',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '20px',
    border: '1px solid #1f2937'
  }}>
    <h3 style={{
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: 'white'
    }}>
      {project.title}
    </h3>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.875rem',
      color: '#9ca3af',
      marginBottom: '8px'
    }}>
      <span>Category: {project.category}</span>
      <span>Team Size: {project.teamSize}</span>
    </div>
    <p style={{
      color: '#d1d5db',
      marginBottom: '16px',
      fontSize: '0.875rem'
    }}>
      {project.description}
    </p>
    <div style={{
      borderTop: '1px solid #1f2937',
      paddingTop: '12px',
      marginTop: '12px'
    }}>
      <h4 style={{
        fontSize: '0.875rem',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: 'white'
      }}>
        Available Roles:
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {project.roles.slice(0, 3).map((role, index) => (
          <button
            key={index}
            style={{
              padding: '8px 12px',
              backgroundColor: '#1f2937',
              color: 'white',
              border: '1px solid #374151',
              borderRadius: '4px',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  </div>
);

// Main projects page
const ProjectsPage = () => {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 0',
        borderBottom: '1px solid #1f2937',
        marginBottom: '32px'
      }}>
        <div style={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          background: 'linear-gradient(to right, #ff4d4d, #ffbb00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          TeamBuilder
        </div>
        <nav style={{ display: 'flex', gap: '24px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
          <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
        </nav>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '16px',
            background: 'linear-gradient(to right, #ff4d4d, #ffbb00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Discover Projects
          </h1>
          <p style={{ color: '#9ca3af', maxWidth: '600px', margin: '0 auto 24px' }}>
            Find exciting projects to join or create your own to build your dream team
          </p>
          <button style={{
            padding: '10px 20px',
            background: 'linear-gradient(to right, #ff4d4d, #ffbb00)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Create New Project
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      <footer style={{
        marginTop: '60px',
        textAlign: 'center',
        padding: '20px 0',
        borderTop: '1px solid #1f2937',
        color: '#9ca3af'
      }}>
        <p>© {new Date().getFullYear()} TeamBuilder. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Render the component directly to the page
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<ProjectsPage />, rootElement);
}

export default ProjectsPage;
