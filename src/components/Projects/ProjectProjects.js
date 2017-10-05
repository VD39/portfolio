// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Returns view code link if there is a URL.
 * @param {string} url - Url of the link.
 * @param {string} title - Title for the link.
 */
function viewCode(url, title) {
  return url ? (
    <p>
      <a className="function" href={url} target="_blank" rel="noopener noreferrer" title={`View ${title} code.`}>
        View code
      </a>
    </p>
  ) : null;
}

/**
 * Project component.
 */
function ProjectProjects({ projects }) {
  return (
    <div className="row">
      {
        projects.reverse().map((project, index) => (
          <article className="col-xs-12 col-md-6 margin-top" key={index}>
            <h3>
              <a className="function" href={project.visitSiteUrl} target="_blank" rel="noopener noreferrer" title={`View ${project.name}.`}>
                {project.name}
              </a>
            </h3>
            <p dangerouslySetInnerHTML={{
              __html: project.description
            }}
            />
            <p><span className="variable">Technologies_Used</span> = [<span className="string">{project.technologiesUsed.sort().join(', ')}</span>];</p>
            {viewCode(project.codeURL, project.name)}
          </article>
        ))
      }
    </div>
  );
}

// Proptypes
ProjectProjects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    visitSiteUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologiesUsed: PropTypes.array.isRequired,
    codeURL: PropTypes.string
  })).isRequired
};

export default ProjectProjects;
