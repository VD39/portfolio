/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* My components */
import Items from '../items/Items';

class TechnicalSkills extends React.Component {
  render() {
    return (
      <div className="code-wrapper">

        <div className="code-header">
          <h3>technical-skills.js</h3>
        </div>

        <div className="code-body">

          <div className="side-bar" />

          <ol className="list">
            {
              this.props.skills.map((object, index) => (

                <li key={index}>
                  <span className="let">let </span> {object.title} = [
                  <Items arr={object.skills} start="'" end="'" />
                  ];
                </li>

              ))
            }
          </ol>

        </div>

      </div>
    );
  }
}

TechnicalSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired
  })).isRequired
};

export default TechnicalSkills;
