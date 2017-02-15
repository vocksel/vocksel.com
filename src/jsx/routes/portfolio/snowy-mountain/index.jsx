import React from 'react';

export default {
  name: 'Snowy Mountain',
  slug: 'snowy-mountain',
  released: '2015',
  tags: [ '3D Modeling', 'Roblox' ],
  images: [
    require('./images/mountain.png'),
    require('./images/hill.png'),
    require('./images/rune.png')
  ],
  description: (
    <div>
      <p>An ominous mountain, blanketed in a thick layer of snow. Features a small cave and standing stone, with a mysterious glowing rune carved into it.</p>

      <p>I used a set of <a href="https://www.roblox.com/library/218283829/Ancient-Stones">public domain rock meshes</a> to design the mountain. At the time I wasn’t very well versed in Roblox’s modeling system, and when I saw them I was inspired to create something, the result being the mountain you see before you.</p>

      <p>Despite the assets used not being my own creation, the end result gave me useful insight into designing mountainous terrain, and I’m quite pleased with the overall ambience of the finished project.</p>
    </div>
  )
};
