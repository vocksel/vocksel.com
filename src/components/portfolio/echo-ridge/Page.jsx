import React from 'react';

import { Photo, PhotoCaption } from 'components/photo/photo.jsx';

const url = 'http://www.roblox.com/games/13525723/view?rbxp=1343930';

function Body() {
  return (
    <div>
      <p><a href={url}>Echo Ridge</a> is a 3D recreation of the hub level in Mega Man Star Force 3. I built it over the span of 3 months, and it has quickly become my favorite Roblox project to date.</p>

      <Photo href={url} image={require('./images/overview.png')}>
        <PhotoCaption>A full view of Echo Ridge, featuring the Sky Wave.</PhotoCaption>
      </Photo>

      <p>I made the first version of Echo Ridge when I was 14, back in October of 2010. Almost 4 and a half years later, I took another look at it and felt it didn't do the original game justice.</p>

      <p>Thanks to Roblox's modeling system I was able to achieve a much higher level of detail. This also opened up the possibility to remove all of the seam lines, giving the map a much cleaner appearance.</p>

      <Photo href={url} image={require('./images/comparison.png')}>
        <PhotoCaption>Geo's house, before and after.</PhotoCaption>
      </Photo>
    </div>
  )
}

function EchoRidge(props) {
  return (
    <div>
      <h1>Echo Ridge</h1>

      <Body/>
    </div>
  )
}

export default EchoRidge;
