import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time weather updates and forecasts. Built with React and integrates with OpenWeather API for accurate weather data.",
      technologies: ["React", "API Integration", "Bootstrap", "CSS3"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with features like task creation, deadline setting, priority levels, and progress tracking.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-white">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '15px'
              }}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold mb-3 text-white">{project.title}</h5>
                  <p className="card-text flex-grow-1 text-white">{project.description}</p>
                  <div className="mt-3">
                    <div className="mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="badge me-2 mb-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            backdropFilter: 'blur(5px)',
                            color: 'black',
                            padding: '8px 12px',
                            borderRadius: '20px',
                            fontSize: '0.85rem'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      className="btn w-100"
                      style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'black',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        backdropFilter: 'blur(5px)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                      onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;