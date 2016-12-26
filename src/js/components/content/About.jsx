import React from 'react';
import moment from 'moment';

import Content from 'js/components/Content.jsx';
import { PhotoWrapper, PhotoLink, PhotoCaption } from 'js/components/Photos.jsx';

const age = moment().diff('1996-07-15', 'years');

function About(props) {
  return (
    <Content id={"about"}>
      <p>I'm a {age}-year-old programming enthusiast living in the state of New York. I aim to make a career out of server administration and network security, and in my spare time I create websites and computer programs.</p>

      <p>I frequently work on open-source projects. All of which can be found on my <a href={"https://github.com/voxeldavid/"}>GitHub</a>.</p>

      <PhotoWrapper>
        <PhotoLink image={require('img/biking.jpg')}
          href={"https://walkway.org"}
          title={"Visit the Walkway Over the Hudon's website"} />

        <PhotoCaption>
          A photo from my trip back home from the <a href={"https://walkway.org"}>Walkway Over the Hudson</a>
        </PhotoCaption>
      </PhotoWrapper>
    </Content>
  )
}

export default About;
