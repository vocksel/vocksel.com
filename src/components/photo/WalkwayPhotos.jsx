import React from 'react';

import { Photo, PhotoCaption } from './PhotoComponents.jsx';

const url = 'https://walkway.org';

export function WalkwayPhoto(props) {
  return (
    <Photo href={url} title={'Visit the Walkway Over the Hudson\'s website.'}
      image={require('img/biking.jpg')}>

      <PhotoCaption>
        A photo from my trip back home from the <a href={url}>Walkway Over the Hudson</a>.
      </PhotoCaption>
    </Photo>
  );
}
