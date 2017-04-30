/* React */
import React from 'react';
import { Route } from 'react-router-dom';

/* My components */
import Home from '../pages/Home/Index';
import About from '../pages/About/Index';
import Work from '../pages/Work/Index';

class Routes extends React.Component {
  render() {
    return (
      <div>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />

      </div>
    );
  }
}

export default Routes;