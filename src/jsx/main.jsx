import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import routes from './routes';

ReactDOM.render((
  <Router history={browserHistory}
    routes={routes}
    render={applyRouterMiddleware(useScroll())} />
), document.getElementById('root'));
