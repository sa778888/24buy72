import React, { useState } from 'react';
import Brandby from './Brandby.js';
import Feedback from './Feedback.js';
import Video from './Video.js';
import './App.css';
import Brand from './brand.js';
import Intro from './Intro.js';
import About from './about.js';
import Backedby from './backedby.js';
import Faq from './faq.js';
import Footer from './Footer.js';
import Contact from './contact.js';
import OurService from './ourService.js';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // State to track active button

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleButtonHover = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleButtonLeave = () => {
    setActiveButton(null);
  };

  return (
    <div>
      <div id='navbar'>
        <div id='navleft'>
          <img src='navbarLogo.png' alt='not available' height={'70vh'} width={'60vw'} />
        </div>
        <div id='navright' className={menuOpen ? 'open' : ''}>
          <button
            id='b1'
            onMouseEnter={() => handleButtonHover('home')}
            onMouseLeave={handleButtonLeave}
            className={activeButton === 'home' ? 'active':''}
          >
            <a id='home' href='#home'>Home</a>
          </button>
          <button
            id='b1'
            onMouseEnter={() => handleButtonHover('backed')}
            onMouseLeave={handleButtonLeave}
            className={activeButton === 'backed' ? 'active':''}
          >
            <a id='backed' href='#ourserver'>Why Us?</a>
          </button>
          <button
            id='b1'
            onMouseEnter={() => handleButtonHover('aboutus')}
            onMouseLeave={handleButtonLeave}
            className={activeButton === 'aboutus' ? 'active':''}
          >
            <a id='aboutus' href='#about'>About Us</a>
          </button>
          <button
            id='b1'
            onMouseEnter={() => handleButtonHover('selecthome')}
            onMouseLeave={handleButtonLeave}
            className={activeButton === 'selecthome' ? 'active':''}
          >
            <select id='selecthome'>
            <option selected>Our Services</option>
            <option>Haldiram</option>
            <option>Coke</option>
            <option>Pepsi</option>
          </select>
          </button>
          <button
            id='b1'
            onMouseEnter={() => handleButtonHover('faqs')}
            onMouseLeave={handleButtonLeave}
            className={activeButton === 'faqs' ? 'active':''}
          >
            <a id='faqs' href='#FAQ'>FAQs</a>
          </button>
          <button
            id='b1'
            onMouseEnter={() => handleButtonHover('contact')}
            onMouseLeave={handleButtonLeave}
            className={activeButton === 'contact' ? 'active':''}
          >
            <a id='contact' href='#contactpage'>Contact</a>
          </button>
        </div>
        <button className='hamburger' onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <Intro />
      <Brand />
      <Brandby />
      <About />
      <OurService />
      <Video />
      <Faq />
      <Feedback />
      <Backedby />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;