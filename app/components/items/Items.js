/* React */
import React from 'react';
import PropTypes from 'prop-types';

class Items extends React.Component {
  render() {
    return (
      <span>
        {
          this.props.arr.sort().map((object, index) => (

            <span key={index} className="item">
              <span>{this.props.start}</span>
              {object}
              <span>{this.props.end}</span>
            </span>

          ))
        }
      </span>
    );
  }
}

Items.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.string).isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
};

export default Items;