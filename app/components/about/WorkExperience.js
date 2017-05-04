/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* My components */
import Items from '../items/Items';

class WorkExperience extends React.Component {
  render() {
    return (
      <div className="code-wrapper">

        <div className="code-header">
          <h3>/#/work-experience</h3>
        </div>

        <div className="code-body">
          {
            this.props.experences.map((object, index) => (

              <div className="experience" key={index}>

                <h3> {object.jobTitle} @ {object.company} </h3>

                <p className="green">
                  {object.startDate} – {object.endDate}
                </p>

                <p
                  dangerouslySetInnerHTML={{
                    __html: object.description
                  }}
                />

                <p className="list">Main skills used:&nbsp;
                  <Items arr={object.skills} start="" end="" />
                </p>

                <div className="seperator" />

              </div>

            ))
          }
        </div>

      </div>
    );
  }
}

WorkExperience.propTypes = {
  experences: PropTypes.arrayOf(PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
  })).isRequired
};

export default WorkExperience;
