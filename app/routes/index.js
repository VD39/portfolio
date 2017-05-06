/* React */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/* My components */
import Layout from '../components/layout';
import Routes from './Routes';

/**
 * Root component.
 */
class Root extends React.Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    );
  }
}

export default Root;
