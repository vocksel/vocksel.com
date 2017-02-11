import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects/:projectSlug' component={Project} />
    </Route>
  </Router>
), document.getElementById('root'));
