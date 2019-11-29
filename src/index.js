import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import 'normalize.css';
import './styles.scss';

document.write('<div id="root"></div>');

ReactDOM.render(<App />, document.getElementById('root'));
