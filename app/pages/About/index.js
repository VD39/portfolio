/* React */
import React from 'react';

/* Firebase */
import fbRef from '../../config/Firebase';

/* My components */
import Loader from '../../components/loader/Loader';
import AboutMe from '../../components/about/AboutMe';
import TechnicalSkills from '../../components/about/TechnicalSkills';
import WorkExperience from '../../components/about/WorkExperience';
import Connect from '../../components/about/Connect';
import Interests from '../../components/about/Interests';

/* Stylesheet */
import './about.scss';

/**
 * About component.
 */
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutData: [],
      loading: true
    };
  }

  componentDidMount() {
    const aboutData = fbRef.child('about');

    aboutData.once('value', (snap) => {
      this.setState({
        aboutData: snap.val(),
        loading: false
      });
    });
  }

  render() {
    let aboutMe;
    const about = this.state.aboutData;

    if (this.state.loading === false) {
      aboutMe = (
        <div className="about-wrapper">

          <h1 className="title">{'{ About }'}</h1>

          <div className="about row">

            <div className="col-md-12">
              <AboutMe me={about.aboutMe} />
            </div>

            <div className="col-md-12">
              <TechnicalSkills skills={about.technicalSkills} />
            </div>

            <div className="col-md-12">
              <WorkExperience experences={about.workExperence} />
            </div>

            <div className="col-sm-12 col-md-9">
              <Interests interests={about.interests} />
            </div>

            <div className="col-sm-12 col-md-3">
              <Connect connections={about.socialConnect} />
            </div>

          </div>

        </div>
      );
    } else {
      aboutMe = (
        <Loader />
      );
    }

    return (
      <section>
        <div className="container">
          {aboutMe}
        </div>
      </section>
    );
  }
}

export default About;
