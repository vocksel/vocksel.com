import React from 'react';

import Content from 'js/components/Content.jsx';
import { PhotoWrapper, PhotoLink, PhotoCaption } from 'js/components/Photos.jsx';

function Experience(props) {
  return (
    <Content id={"experience"}>
      <p>I got my first taste of programming when I was 13. I started out by learning Lua on the online building game <a href={"http://roblox.com"}>ROBLOX</a>. Making my little blocky creations come to life was amazing to me, and it became the foundation for something more.</p>

      <p>Since then I've branched out to learning about web design, picking up on HTML, CSS and JavaScript along the way. I've experimented with creating applications on <a href={"https://angularjs.org"}>AngularJS</a> and <a href={"https://djangoproject.org"}>Django</a>, and both of them were great fun to work with.</p>
    </Content>
  )
}

export default Experience;
