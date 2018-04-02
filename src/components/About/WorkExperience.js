// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import styles
import './WorkExperience.scss';

/**
 * WorkExperience component.
 */
const WorkExperience = ({ experences }) => (
  <article className="margin-top">
    <h2 className="red uppercase">Work_Experience</h2>
    <div className="ui grid">
      {experences.map((experence, index) => (
        <section className="margin-top" key={index}>
          <h3 className="interface">
            {experence.jobTitle} @ {experence.company}
          </h3>
          <p className="return min-margin">
            {experence.startDate} – {experence.endDate}
          </p>
        </section>
      ))}
    </div>
  </article>
);

// Proptypes
WorkExperience.propTypes = {
  experences: PropTypes.arrayOf(PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
  })).isRequired,
};

export default WorkExperience;
