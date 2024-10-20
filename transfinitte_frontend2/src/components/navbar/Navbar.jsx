import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/arbitron.jpg';

const Menu = ({ onMouseEnter, onMouseLeave }) => (
  <>
    <p onMouseEnter={() => onMouseEnter('home')} onMouseLeave={onMouseLeave}>
      <a href='#home'>Home</a>
    </p>
    <p onMouseEnter={() => onMouseEnter('project')} onMouseLeave={onMouseLeave}>
      <a href='#wgpt3'>Our Project</a>
    </p>
    <p onMouseEnter={() => onMouseEnter('analytics')} onMouseLeave={onMouseLeave}>
      <a href='#possibility'>Competitors</a>
    </p>
    <p onMouseEnter={() => onMouseEnter('studies')} onMouseLeave={onMouseLeave}>
      <a href='#features'>Structured Data</a>
    </p>
    <p onMouseEnter={() => onMouseEnter('library')} onMouseLeave={onMouseLeave}>
      <a href='#blog'>Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hoveredButton, setHoveredButton] = useState('');

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton('');
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="GPT3 Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        </div>
        <div className="gpt3__navbar-wrapper">
          <div className="gpt3__navbar-sign">
            
          </div>

          <div className="gpt3__navbar-menu">
            {toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                </div>
                <div className="gpt3__navbar-menu_container-links-sign"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>
  {`
    .gpt3__navbar-links p {
      transition: opacity 0.3s;
    }
    .gpt3__navbar-links p a {
      color: white; /* Change color to white */
    }
    .gpt3__navbar-links p:not(:hover) {
      opacity: ${hoveredButton ? '0.5' : '1'};
    }
    .gpt3__navbar-links p:hover {
      opacity: 1; /* Make the hovered button fully visible */
    }
  `}
</style>

    </div>
  );
};

export default Navbar;
