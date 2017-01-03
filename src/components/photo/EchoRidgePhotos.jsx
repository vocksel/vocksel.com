import React from 'react';

import { Photo, PhotoCaption } from './PhotoComponents.jsx';

export function OverviewPhoto(props) {
  return (
    <Photo {...props} image={require('img/projects/echo-ridge/overview.png')}>
      <PhotoCaption>A full view of Echo Ridge, featuring the Sky Wave.</PhotoCaption>
    </Photo>
  );
}

export function ComparisonPhoto(props) {
  return (
    <Photo {...props} image={require('img/projects/echo-ridge/comparison.png')}>
      <PhotoCaption>Geo's house, before and after.</PhotoCaption>
    </Photo>
  );
}
