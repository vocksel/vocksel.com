import React from 'react';

export default {
  name: 'Rhinebeck Apartment',
  slug: 'apartment',
  released: '2016',
  tags: [ '3D Modeling', 'Roblox' ],
  images: [
    require('./images/living-room.jpg'),
    require('./images/bedroom.jpg'),
    require('./images/desk.jpg'),
    require('./images/bed.jpg'),
    require('./images/bookcase.jpg'),
    require('./images/outside.jpg')
  ],

  description: (
    <div>
      <p>A high-end apartment based in Rhinebeck, New York.</p>

      <p>My projects prior to this apartment have only consisted of light 3D modeling. I wanted to challenge myself and make the apartment something special, and to do this I spent a little over 4 months creating 50+ models to furnish the living space I created.</p>

      <p>Some of the models are large and easy to spot, others you might not notice at all. Even if some models are not looked at closely enough to examine the details, or if they never get seen at all, they still contribute to the overall &ldquo;lived in&rdquo; feeling I wanted to convey.</p>

      <p>I love games where detail is packed into every nook and cranny. Where there's so much to see that you can't possibly see everything in a single playthrough. Books filled with extensive lore, an assortment of unique items and props as far as the eye can see, and numerous storylines that you may never uncover. I love that feeling of <em>knowing</em> that I'm surrounded by all these intricate details, even if I never notice them.</p>

      <p>While the apartment is not at that level of detail, the desire to create something packed with intricacy and sentimental value was a driving force as I created this living space.</p>
    </div>
  )
};
