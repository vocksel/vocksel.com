import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
    </Route>
  </Router>
), document.getElementById('root'));
