import React from 'react';
import './Home.css';

function Social() {
  return (
    <div className="home__social">
      <a href="https://github.com/kmsgm?tab=repositories" className="home__social-icon">
        <i className="uil uil-github" />
      </a>

      <a href="https://www.linkedin.com/in/minseo-kim-21b413285/" className="home__social-icon">
        <i className="uil uil-linkedin" />
      </a>
    </div>
  );
}

export default Social;
