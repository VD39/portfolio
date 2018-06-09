// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import components
import Connect from './Connect';
import Interests from './Interests';
import WorkExperience from './WorkExperience';
import TechnicalSkills from './TechnicalSkills';

/**
 * About component.
 */
const About = ({ about }) => (
  <section className="about-wrapper">
    <h1 className="text-center title">About</h1>
    <div className="row margin-top">
      <div className="col-xs-12 margin-top">
        <article>
          <p
            className="text-center js-comment"
            dangerouslySetInnerHTML={{
              __html: about.aboutMe.currentStatus,
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: about.aboutMe.summary,
            }}
          />
        </article>
      </div>
      <div className="col-xs-12 margin-top">
        <TechnicalSkills skills={about.technicalSkills} />
      </div>
      <div className="col-xs-12 margin-top">
        <WorkExperience experiences={about.workExperience} />
      </div>

      <div className="col-xs-12 col-md-9 margin-top">
        <Interests interests={about.interests} />
      </div>
      <div className="col-xs-12 col-md-3 margin-top">
        <Connect connections={about.socialConnect} />
      </div>
    </div>
  </section>
);

// Proptypes
About.propTypes = {
  about: PropTypes.shape({
    aboutMe: PropTypes.object.isRequired,
    technicalSkills: PropTypes.array.isRequired,
    workExperience: PropTypes.array.isRequired,
    interests: PropTypes.array.isRequired,
    socialConnect: PropTypes.array.isRequired,
  }).isRequired,
};

export default About;
