import React from 'react';
import moment from 'moment';

import Content from 'components/content/Content.jsx';
import { WalkwayPhoto } from 'components/photo/WalkwayPhotos.jsx';

const age = moment().diff('1996-07-15', 'years');

function About(props) {
  return (
    <Content id={"about"}>
      <p>I'm a {age}-year-old programming enthusiast living in the state of New York. I aim to make a career out of server administration and network security, and in my spare time I create websites and computer programs.</p>

      <p>I frequently work on open-source projects. All of which can be found on my <a href={"https://github.com/voxeldavid/"}>GitHub</a>.</p>

      <WalkwayPhoto />
    </Content>
  )
}

export default About;
