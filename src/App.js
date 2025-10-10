import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{ paddingTop: '60px' }}>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
