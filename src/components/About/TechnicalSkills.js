// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

/**
 * TechnicalSkills component.
 */
function TechnicalSkills({ skills }) {
  return (
    <article className="margin-top">
      <h2 className="red uppercase">Technical_Skills</h2>
      <div className="row">
        {
          skills.map((skill, index) => (
            <section className="col-sm-12 col-md-6 margin-top" key={index}>
              <h3 className="interface">{skill.title}</h3>
              <p className="string">{skill.skills.sort().join(', ')}</p>
            </section>
          ))
        }
      </div>
    </article>
  );
}

// Proptypes
TechnicalSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
  })).isRequired
};

export default TechnicalSkills;
