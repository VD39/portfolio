/* React */
import React from 'react';
import PropTypes from 'prop-types';

class Intrests extends React.Component {
  render() {
    return (
      <div className="code-wrapper">

        <div className="code-header">
          <h3>intrests.exe</h3>
        </div>

        <div className="code-body cmd">

          <p>
            <span className="green"> Vijay Dubb@LAPTOP-7839</span>
            <span className="purple"> VD39</span>
            <span className="yellow"> ~/Intrests</span>
            <span className="blue"> (master)</span>
          </p>

          <p>$ my intrests are:</p>
          {
            this.props.interests.map((object, index) => (

              <p key={index}>&gt;&gt; {object}</p>

            ))
          }
          <p>interests@3.10.10 C:\Program Files\interests\display</p>

        </div>

      </div>
    );
  }
}

Intrests.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Intrests;