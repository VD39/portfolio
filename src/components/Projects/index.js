// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import components
import ProjectProjects from './ProjectProjects';

/**
 * Projects component.
 */
const Projects = ({ projects }) => (
  <section className="about-wrapper">
    <h1 className="text-center title">Projects</h1>
    <div className="row margin-top">
      <div className="col-xs-12">
        {projects.map((project, index) => (
          <section className="border-bottom margin-top" key={index}>
            <h2 className="red uppercase">{project.title}</h2>
            <p className="margin-top css-comment">{project.description}</p>
            <ProjectProjects projects={project.work} />
            <br className="br" />
          </section>
        ))}
      </div>
    </div>
  </section>
);

// Proptypes
Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    work: PropTypes.array.isRequired,
  })).isRequired,
};

export default Projects;
