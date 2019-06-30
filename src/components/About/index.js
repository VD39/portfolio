// Import dependencies.
import React from 'react';
import PropTypes from 'prop-types';

// Import components.
import Interests from './Interests';
import SocialConnect from './SocialConnect';
import TechnicalSkills from './TechnicalSkills';
import WorkExperience from './WorkExperience';

/**
 * About component.
 */
const About = ({
  aboutMe,
  interests,
  technicalSkills,
  socialConnect,
  workExperience,
}) => (
  <section className="about">
    <h1 className="about__title brackets center-text">About</h1>
    <p
      className="about__current-status html-comment center-text"
      dangerouslySetInnerHTML={{
        __html: aboutMe.currentStatus,
      }}
    />
    <article>
      <div
        dangerouslySetInnerHTML={{
          __html: aboutMe.summary,
        }}
      />
    </article>
    <TechnicalSkills technicalSkills={technicalSkills} />
    <WorkExperience workExperience={workExperience} />
    <div className="two-columns">
      <Interests
        className="about__interests two-columns__column"
        interests={interests}
      />
      <SocialConnect
        className="about__social-content two-columns__column"
        socialConnect={socialConnect}
      />
    </div>
  </section>
);

// PropTypes.
About.propTypes = {
  aboutMe: PropTypes.shape({
    currentStatus: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
  socialConnect: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  technicalSkills: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  workExperience: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default About;
