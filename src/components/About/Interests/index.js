// Import dependencies.
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Interests component.
 */
const Interests = ({ className, interests }) => (
  <article className={`${className} interests`}>
    <h2 className="dull-lavender uppercase">Interests</h2>
    <ul>
      {interests.map(interest => (
        <li className="interests__item" key={interest}>
          {interest}
        </li>
      ))}
    </ul>
  </article>
);

// PropTypes.
Interests.propTypes = {
  className: PropTypes.string,
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// DefaultProps.
Interests.defaultProps = {
  className: '',
};

export default Interests;
