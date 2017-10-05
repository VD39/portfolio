// Import dependencies
import React, { Component } from 'react';

// Import firebase
import fbRef from '../config/Firebase';

// Import components
import Loader from './Loader';
import Projects from './Projects';

class ProjectsPage extends Component {
  state = {
    projectsData: [],
    loading: true
  };

  /**
   * Gets the data from Firebase once the component has mounted.
   */
  componentDidMount = () => {
    const workData = fbRef.child('work'); // Set the reference to the work child
    // Get the value from the reference
    workData.once('value', (snap) => {
      // Set the state
      this.setState({
        projectsData: snap.val(),
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
   * Render the ProjectPage component.
   */
  render() {
    const { loading, projectsData } = this.state; // State
    return loading ? <Loader /> : <Projects projects={projectsData} />;
  }
}

export default ProjectsPage;
