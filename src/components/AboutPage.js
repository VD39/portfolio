// Import dependencies
import React, { Component } from 'react';

// Import firebase
import fbRef from '../config/Firebase';

// Import components
import Loader from './Loader';
import About from './About';

class AboutPage extends Component {
  // Intial state
  state = {
    aboutData: [], // About data
    loading: true // Loading state
  };

  /**
   * Gets the data from Firebase once the component has mounted.
   */
  componentDidMount = () => {
    const aboutData = fbRef.child('about'); // Set the reference to the about child
    // Get the value from the reference
    aboutData.once('value', (snap) => {
      // Set the state
      this.setState({
        aboutData: snap.val(),
        loading: false
      });
    });
  }

  /**
   * Once the route has changed, disconnect from Firebase.
   */
  componentWillUnmount = () => {
    fbRef.off(); // Disconnect from Firebase
  }

  /**
   * Render the AboutPage component.
   */
  render() {
    const { loading, aboutData } = this.state; // State
    return loading ? <Loader /> : <About about={aboutData} />;
  }
}

export default AboutPage;
