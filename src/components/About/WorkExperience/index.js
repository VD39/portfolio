// Import dependencies.
import React from 'react';
import PropTypes from 'prop-types';

/**
 * WorkExperience component.
 */
const WorkExperience = ({ workExperience }) => (
  <article className="work-experience">
    <h2 className="dull-lavender uppercase">Work_Experience</h2>
    <ul>
      {workExperience.map(({ company, endDate, jobTitle, startDate }) => (
        <li key={company}>
          <h3 className="ocean-green no-margin-bottom">
            {jobTitle}
            {' @ '}
            {company}
          </h3>
          <p className="red-violet">
            {startDate}
            {' – '}
            {endDate}
          </p>
        </li>
      ))}
    </ul>
  </article>
);

// PropTypes.
WorkExperience.propTypes = {
  workExperience: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default WorkExperience;
