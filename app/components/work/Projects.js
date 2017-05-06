/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* My components */
import Project from './Project';

/* Stylesheet */
import './projects.scss';

/**
 * Projects component.
 */
class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        {
          this.props.portfolio.map((object, index) => (

            <div key={index}>
              <div className="code-wrapper">

                <div className="code-header">

                  <h3>&gt;&gt; {index + 1}_{object.title}</h3>

                </div>

              </div>

              <p className="description">{object.description}</p>

              <Project work={object.work} />

            </div>
          ))
        }

      </div>
    );
  }
}

/**
 * Projects props.
 */
Projects.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    work: PropTypes.array.isRequired
  }))
};

export default Projects;
