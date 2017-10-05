// Import dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import styles
import './HomePage.scss';

/**
 * Home component.
 */
function HomePage() {
  return (
    <section className="home text-center">
      <p className="css-comment">Developer &amp;&amp; Designer</p>
      <h1>Hello, I&#39;m <NavLink to="/about">Vijay</NavLink>.</h1>
      <p>I am a full stack web developer.</p>
      <p className="red">
        I &#10084; coding and hacking things with:
        <span className="js"> JavaScript</span>,
        <span className="ts"> TypeScript</span>,
        <span className="html"> HTML5</span>,
        <span className="css"> CSS3</span>,
        <span className="node"> Node.js</span>.
      </p>
      <p><NavLink to="/projects" className="code-link">View_My_Projects();</NavLink></p>
    </section>
  );
}

export default HomePage;
