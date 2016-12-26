import React from 'react';
import ReactDOM from 'react-dom';

import Website from './components/Website.jsx';
import { setupPhotoWaypoints } from './photo-coloring'

ReactDOM.render(<Website/>, document.getElementById('root'));

setupPhotoWaypoints()
