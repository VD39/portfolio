// Import dependencies.
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Home component.
 */
const HomePage = () => (
  <section className="home center-text">
    <p className="css-comment">Developer &amp;&amp; Designer</p>
    <h1>
      Hello, I&rsquo;m&nbsp;
      <NavLink title="View about" to="/about">
        Vijay
      </NavLink>
      .
    </h1>
    <p>I am a full stack web developer.</p>
    <p className="dull-lavender">
      I&nbsp;
      <span role="img" aria-label="love">
        &#128156;
      </span>
      &nbsp;coding and hacking things with:
    </p>
    <ul>
      <li className="ronchi">JavaScript</li>
      <li className="cinnabar">HTML5</li>
      <li className="indigo">CSS3</li>
    </ul>
    <NavLink className="home__link" title="View projects" to="/projects">
      View_My_Projects();
    </NavLink>
  </section>
);

export default HomePage;
