import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://www.linkedin.com/in/paras-chavan-563aa728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white me-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/ParasChavan02" className="text-white me-3">
            <i className="bi bi-github"></i>
          </a>
         
        </div>
        <p className="mb-0">© {new Date().getFullYear()} Paras Chavan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;