import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './pages/Layout.jsx';
import { setupPhotoWaypoints } from 'js/photo-coloring'

ReactDOM.render(<Layout/>, document.getElementById('root'));

setupPhotoWaypoints()
