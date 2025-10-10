import React from 'react';

const Home = () => {
  return (
    <section id="home" className="vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            <div className="mb-4">
              <img 
                src="profile pic.jpg" 
                alt="Paras Chavan"
                className="rounded-circle mb-4"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              />
            </div>
            <h1 className="display-4 mb-3">Hi, I'm Paras Chavan</h1>
            <p className="lead mb-4">Welcome to my portfolio website</p>
            <a 
              href="resume 1.pdf"
              download
              className="btn btn-primary btn-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;