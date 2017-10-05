// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';

/**
 * Routes component.
 */
const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
