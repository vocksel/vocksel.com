import React from 'react';
import moment from 'moment';

import { Photo, PhotoCaption } from './photo/photo.jsx';

const age = moment().diff('1996-07-15', 'years');

function WalkwayPhoto(props) {
  const url = 'https://walkway.org';

  return (
    <Photo href={url} title={'Visit the Walkway Over the Hudson\'s website.'}
      image={require('img/biking.jpg')}>

      <PhotoCaption>A photo from my trip back home from the
        <a href={url}>Walkway Over the Hudson</a>.</PhotoCaption>
    </Photo>
  );
}

function About(props) {
  return (
    <div>
      <p>I'm a {age}-year-old programming enthusiast living in the state of New
        York. I aim to make a career out of server administration and network
        security, and in my spare time I create websites and computer
        programs.</p>

      <p>I frequently work on open-source projects. All of which can be found on
        my <a href={"https://github.com/voxeldavid/"}>GitHub</a>.</p>

      <WalkwayPhoto />

      <p>I got my first taste of programming when I was 13. I started out by
        learning Lua on the online building game <a href={"http://roblox.com"}>
        Roblox</a>. Making my little blocky creations come to life was amazing
        to me, and it became the foundation for something more.</p>

      <p>Since then I've branched out to learning about web design, picking up
        on HTML, CSS and JavaScript along the way. I've experimented with
        creating applications on <a href={"https://angularjs.org"}>AngularJS</a>
        and <a href={"https://djangoproject.org"}>Django</a>, and both of them
        were great fun to work with.</p>
    </div>
  )
}

export default About;
