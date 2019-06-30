// Import dependencies.
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Returns view code link if there is a URL.
 * @param {string} url - Url of the link.
 * @param {string} title - Title for the link.
 */
const viewCode = (url, title) =>
  url ? (
    <p>
      <a
        className="function"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        title={`View ${title} code`}
      >
        View code
      </a>
    </p>
  ) : null;

/**
 * Project component.
 */
const Project = ({ className, projects }) =>
  projects
    .reverse()
    .map(({ codeURL, description, name, technologies, visitSiteUrl }) => (
      <li className={`${className} project`} key={name}>
        <h3>
          <a
            className="function"
            href={visitSiteUrl}
            rel="noopener noreferrer"
            target="_blank"
            title={`View ${name}`}
          >
            {name}
          </a>
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <p className="no-margin-bottom">
          <span className="egg-blue">Technologies_Used</span>
          <span ariaHidden="true"> = [</span>
        </p>
        <ul className="project__list no-margin-bottom">
          {technologies.sort().map(technology => (
            <li className="project__item brass" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
        <p ariaHidden="true">];</p>
        {viewCode(codeURL, name)}
      </li>
    ));

// PropTypes.
Project.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      codeURL: PropTypes.string,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      technologies: PropTypes.array.isRequired,
      visitSiteUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Project;
