/* React */
import React from 'react';

/* Stylesheet */
import './footer.scss';

/**
 * Footer component.
 */
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">

        <div className="container">
          <p className="text-center">
            Copyright &copy; Vijay Dubb. 2011 &#8211; Present. All rights reserved.
          </p>
        </div>

      </footer>
    );
  }
}

export default Footer;
