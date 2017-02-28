import React from 'react';

export default {
  name: 'Echo Ridge',
  slug: 'echo-ridge',
  released: '2016',
  tags: [ '3D Modeling', 'Roblox' ],
  images: [
    require('./images/overview.jpg'),
    require('./images/geos-house-exterior.jpg'),
    require('./images/geos-living-room.jpg'),
    require('./images/geos-room.jpg'),
    require('./images/sky-wave-teleport.jpg'),
    require('./images/sky-wave.jpg')
  ],
  link: <a href="http://www.roblox.com/games/13525723/view?rbxp=1343930">View it on Roblox.</a>,
  description: (
    <div>
      <p><a href={'http://www.roblox.com/games/13525723/view?rbxp=1343930'}> Echo Ridge</a> is a 3D recreation of the hub level in Mega Man Star Force 3. I built it over the span of 3 months, and it has quickly become my favorite Roblox project to date.</p>

      <p>I made the first version of Echo Ridge when I was 14, back in October of 2010. Almost 4 and a half years later, I took another look at it and felt it didn't do the original game justice.</p>

      <p>Thanks to Roblox's modeling system I was able to achieve a much higher level of detail. This also opened up the possibility to remove all of the seam lines, giving the map a much cleaner appearance.</p>
    </div>
  )
};
