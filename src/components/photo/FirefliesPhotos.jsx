import React from 'react';

import { Photo, PhotoCaption } from './PhotoComponents.jsx';

export function PerksPhoto(props) {
  return (
    <Photo {...props} image={require('img/projects/fireflies/perks.png')}>
      <PhotoCaption>
        A screenshot of Fireflies in action.
      </PhotoCaption>
    </Photo>
  );
}

export function StarsPhoto(props) {
  return (
    <Photo {...props} image={require('img/projects/fireflies/stars.png')}>
      <PhotoCaption>
        Another screenshot of Fireflies, with a different quote and background.
      </PhotoCaption>
    </Photo>
  );
}
