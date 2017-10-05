// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Connect component.
 */
function Connect({ connections }) {
  return (
    <article className="margin-top">
      <h2 className="red uppercase">Connect</h2>
      <div className="margin-top">
        {
          connections.map((connection, index) => (
            <section key={index}>
              <p>
                {'<'}<a href={connection.address} target="_blank" rel="noopener noreferrer" title={`View ${connection.name}.`}>
                  {connection.name}
                </a>{' />'}
              </p>
            </section>
          ))
        }
      </div>
    </article>
  );
}

// Proptypes
Connect.propTypes = {
  connections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  })).isRequired
};

export default Connect;
