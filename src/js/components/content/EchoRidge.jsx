import React from 'react';

import Content from 'js/components/Content.jsx';
import ContentTitle from 'js/components/ContentTitle.jsx';
import { PhotoWrapper, PhotoLink, PhotoCaption } from 'js/components/Photos.jsx';

const url = 'http://www.roblox.com/games/13525723/view?rbxp=1343930';

function EchoRidge(props) {
  return (
    <Content id={"echo-ridge"}>
      <ContentTitle>Echo Ridge</ContentTitle>

      <p><a href={url}>Echo Ridge</a> is a 3D recreation of the hub level in Mega Man Star Force 3. I built it over the span of 3 months, and it has quickly become my favorite ROBLOX project to date.</p>

      <PhotoWrapper>
        <PhotoLink image={require('img/projects/echo-ridge/overview.png')} href={url} />
        <PhotoCaption>A full view of Echo Ridge, featuring the Sky Wave.</PhotoCaption>
      </PhotoWrapper>

      <p>I made the first version of Echo Ridge when I was 14, back in October of 2010. Almost 4 and a half years later, I took another look at it and felt it didn't do the original game justice.</p>

      <p>Thanks to ROBLOX's modeling system I was able to achieve a much higher level of detail. This also opened up the possibility to remove all of the seam lines, giving the map a much cleaner appearance.</p>

      <PhotoWrapper>
        <PhotoLink image={require('img/projects/echo-ridge/comparison.png')} href={url} />
        <PhotoCaption>Geo's house, before and after.</PhotoCaption>
      </PhotoWrapper>
    </Content>
  )
}

export default EchoRidge;
