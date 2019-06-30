// Import dependencies.
import React from 'react';
import PropTypes from 'prop-types';

/**
 * SocialConnect component.
 */
const SocialConnect = ({ className, socialConnect }) => (
  <article className={`${className} social-connect`}>
    <h2 className="dull-lavender uppercase">Connect</h2>
    <ul>
      {socialConnect.map(({ address, name }) => (
        <li className="social-connect__item" key={name}>
          <a
            className="html-tag"
            href={address}
            rel="noopener noreferrer"
            target="_blank"
            title={`View ${name}`}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  </article>
);

// PropTypes.
SocialConnect.propTypes = {
  className: PropTypes.string,
  socialConnect: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// DefaultProps.
SocialConnect.defaultProps = {
  className: '',
};

export default SocialConnect;
