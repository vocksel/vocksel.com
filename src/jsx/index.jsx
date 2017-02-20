import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute,  browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import App from './routes/App';
import Portfolio from './routes/Portfolio';
import About from './routes/About';
import Project from './routes/Project';

ReactDOM.render((
  <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
    <Route path='/' component={App}>
      <IndexRoute component={Portfolio} />
      <Route path='/about' component={About} />
      <Route path='/projects/:projectSlug' component={Project} />
    </Route>
  </Router>
), document.getElementById('root'));
