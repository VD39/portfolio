/* React */
import React from 'react';
import PropTypes from 'prop-types';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="code-wrapper">

        <div className="code-header">
          <h3>about-me.json</h3>
        </div>

        <div className="code-body">

          <div className="side-bar" />

          <ol>
            <li>{'{'}</li>

            <li>
              <span className="tab">
                <span className="blue">&quot;name&quot;: </span>
                <span className="green">&quot;</span>
                <span
                  className="green"
                  dangerouslySetInnerHTML={{
                    __html: this.props.me.name
                  }}
                />
                <span className="green">&quot;</span>,
              </span>
            </li>

            <li>
              <span className="tab">
                <span className="blue">&quot;currentStatus&quot;: </span>
                <span className="green">&quot;</span>
                <span
                  className="green"
                  dangerouslySetInnerHTML={{
                    __html: this.props.me.currentStatus
                  }}
                />
                <span className="green">&quot;</span>
              </span>
            </li>

            <li>
              <span className="tab">
                <span className="blue">&quot;summary&quot;: </span>
                <span className="green">&quot;</span>
                <span
                  className="green"
                  dangerouslySetInnerHTML={{
                    __html: this.props.me.summary
                  }}
                />
                <span className="green">&quot;</span>
              </span>
            </li>

            <li>{'}'}</li>
          </ol>

        </div>

      </div>
    );
  }
}

AboutMe.propTypes = {
  me: PropTypes.shape({
    name: PropTypes.string.isRequired,
    currentStatus: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
  })
};

export default AboutMe;