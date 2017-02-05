import React from 'react';

import Content from 'components/content/Content.jsx';
import ContentTitle from 'components/content/ContentTitle.jsx';
import { Photo, PhotoCaption } from 'components/photo/photo.jsx';

const url = 'http://fireflies.davidminnerly.com';
const title = 'Check out Fireflies in person.';

function Body() {
  return (
    <div>
      <p><a href={url}>Fireflies</a> is a small application that displays a quote and background image at random every time the page is loaded.</p>

      <Photo href={url} title={title} image={require('./images/perks.png')}>
        <PhotoCaption>A screenshot of Fireflies in action.</PhotoCaption>
      </Photo>

      <p>It started as an <a href="https://angularjs.org">AngularJS</a> app. It fit my needs very well at the start, but a major drawback to my setup was that new images and quotes were cumbersome to implement.</p>

      <p>I later fixed this by porting Fireflies to <a href="https://djangoproject.org">Django</a>. This works considerably better, as now when I want to add a new image or quote, I can do it directly from the admin interface.</p>

      <Photo href={url} title={title} image={require('./images/stars.png')}>
        <PhotoCaption>Another screenshot of Fireflies, with a different quote
          and background.</PhotoCaption>
      </Photo>

      <p>All of the backgrounds and quotes mean a lot to me, I picked ones that I personally liked, and because of that I hold Fireflies very near to my heart.</p>
    </div>
  )
}

function Fireflies(props) {
  return (
    <Content id={"echo-ridge"}>
      <ContentTitle>Fireflies</ContentTitle>
      <Body/>
    </Content>
  )
}

export default Fireflies;
