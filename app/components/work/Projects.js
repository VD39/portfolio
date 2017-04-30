/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* My components */
import Project from './Project';

class Projects extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.portfolio.map((object, index) => (

            <div key={index}>

              <h2>{object.title}</h2>

              <hr className="hr" />

              <Project work={object.work} />

            </div>
          ))
        }

      </div>
    );
  }
}

Projects.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    work: PropTypes.array.isRequired
  }))
};

export default Projects;