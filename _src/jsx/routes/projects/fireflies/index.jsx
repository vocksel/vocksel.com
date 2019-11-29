import React from 'react';

export default {
  name: 'Fireflies',
  slug: 'fireflies',
  released: '2014',
  tags: [ 'Web Design' ],
  images: [
    require('./images/perks.jpg'),
    require('./images/stars.jpg')
  ],
  link: <a href="http://fireflies.davidminnerly.com/">View it online.</a>,
  description: (
    <div>
      <p><a href={'http://fireflies.davidminnerly.com'}>Fireflies</a> is a small application that displays a quote and background image at random every time the page is loaded.</p>

      <p>It started as an <a href="https://angularjs.org">AngularJS</a> app. It fit my needs very well at the start, but a major drawback to my setup was that new images and quotes were cumbersome to implement.</p>

      <p>I later fixed this by porting Fireflies to <a href="https://djangoproject.org">Django</a>. This works considerably better, as now when I want to add a new image or quote, I can do it directly from the admin interface.</p>

      <p>All of the backgrounds and quotes mean a lot to me, I picked ones that I personally liked, and because of that I hold Fireflies very near to my heart.</p>
    </div>
  )
};
