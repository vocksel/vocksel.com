import React from 'react';
import moment from 'moment';

const age = moment().diff('1996-07-15', 'years');

export default function About() {
  return (
    <div>
      <p>I'm a {age}-year-old programming enthusiast living in the state of New York. I aim to make a career out of server administration and network security, and in my spare time I create websites and computer programs.</p>

      <p>I got my first taste of programming when I was 13. I started out by learning Lua on the online building game <a href={'http://roblox.com'}> Roblox</a>. Making my little blocky creations come to life was amazing to me, and it became the foundation for something more.</p>

      <p>Since then I've branched out to learning about web design, picking up on HTML, CSS and JavaScript along the way. I've experimented with creating applications on <a href={'https://angularjs.org'}>AngularJS</a> and <a href={'https://djangoproject.org'}>Django</a>, and both of them were great fun to work with.</p>
    </div>
  );
}
