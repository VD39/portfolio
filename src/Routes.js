// Import dependencies.
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import components.
import Layout from './components/Layout';
import Home from './components/Home';
import Error from './components/Error';
import About from './components/About';
import Projects from './components/Projects';

/**
 * Routes component.
 */
const Routes = ({ about, projects }) => (
  <Router basename="/portfolio">
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About {...about} />} />
        <Route
          path="/projects"
          render={() => <Projects projects={projects} />}
        />
        <Route component={Error} />
      </Switch>
    </Layout>
  </Router>
);

// PropTypes.
Routes.propTypes = {
  about: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Routes;
