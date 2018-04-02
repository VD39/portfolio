// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Intrests component.
 */
const Intrests = ({ interests }) => (
  <article className="margin-top">
    <h2 className="red uppercase">Interests</h2>
    <div className="margin-top">
      {interests.map((interest, index) => (
        <section key={index}>
          <p>
            <span className="tag">{'> '}</span>
            {interest}
          </p>
        </section>
      ))}
    </div>
  </article>
);

// Proptypes
Intrests.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Intrests;
