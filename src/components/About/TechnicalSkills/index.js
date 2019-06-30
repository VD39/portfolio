// Import dependencies.
import React from 'react';
import PropTypes from 'prop-types';

/**
 * TechnicalSkills component.
 */
const TechnicalSkills = ({ technicalSkills }) => (
  <article className="technical-skills">
    <h2 className="dull-lavender uppercase">Technical_Skills</h2>
    <div className="two-columns">
      {technicalSkills.map(({ skills, title }) => (
        <section className="two-columns__column" key={title}>
          <h3 className="ocean-green">{title}</h3>
          <ul className="technical-skills__skills brass">
            {skills.sort().map(skill => (
              <li className="technical-skills__skill" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </article>
);

// PropTypes.
TechnicalSkills.propTypes = {
  technicalSkills: PropTypes.arrayOf(
    PropTypes.shape({
      skills: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TechnicalSkills;
