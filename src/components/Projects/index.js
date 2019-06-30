// Import dependencies.
import React from 'react';
import PropTypes from 'prop-types';

// Import components.
import Project from './Project';

/**
 * Projects component.
 */
const Projects = ({ projects }) => (
  <section className="projects">
    <h1 className="projects__title brackets center-text">Projects</h1>
    {projects.map(({ description, project, title }) => (
      <article className="projects__projects" key={title}>
        <h2 className="dull-lavender uppercase">{title}</h2>
        <p className="css-comment">{description}</p>
        <ul className="two-columns no-margin-bottom">
          <Project className="two-columns__column" projects={project} />
        </ul>
      </article>
    ))}
  </section>
);

// PropTypes.
Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      project: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Projects;
