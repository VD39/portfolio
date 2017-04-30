/* React */
import React from 'react';
import PropTypes from 'prop-types';

class Connect extends React.Component {
  render() {
    return (
      <div className="code-wrapper">

        <div className="code-header">
          <h3>social-connect.html</h3>
        </div>

        <div className="code-body">

          <div className="side-bar" />

          <ol className="list">
            {
              this.props.connections.map((object, index) => (

                <li key={index}>
                  {'<'}<a href={object.address} target="_blank" rel="noopener noreferrer" title={`View ${object.name}`}>
                    {object.name}
                  </a>{' />'}
                </li>

              ))
            }
          </ol>

        </div>

      </div>
    );
  }
}

Connect.propTypes = {
  connections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  })).isRequired
};

export default Connect;