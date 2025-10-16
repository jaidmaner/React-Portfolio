import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://www.linkedin.com/in/mohmadjaid-maner-201715289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white me-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/jaidmaner/Website.git" className="text-white me-3">
            <i className="bi bi-github"></i>
          </a>
         
        </div>
        <p className="mb-0">© {new Date().getFullYear()} Jaid Maner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;