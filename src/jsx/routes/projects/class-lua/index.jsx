import React from 'react';

import grids from 'css/objects/_grids.scss';

export default {
  name: 'Class.lua',
  slug: 'class-lua',
  released: '2016',
  tags: [ 'Software', 'Lua' ],
  images: [
    require('./images/thumbnail.png')
  ],
  description: (
    <div>
      <p>A dead simple Lua module to make classes easier to define.</p>

      <p>Object Oriented Programming (OOP) is a commonly used paradigm across all major programming languages. While Lua has support for OOP, their implementation isn't the easiest to work with.</p>

      <p>There is no class keyword like you would come to expect from other programming languages. What Lua uses instead are called metatables, which can be tedious to work with and cause confusion. </p>

      <p>Every class definition comes with a heap of overhead because of the excessive amount of work you have to do with metatables. To fix this, I made a simple module that abstracts away all of that overhead so you can focus on your code.</p>

      <div className={grids.Grid}>
        <div className={grids['Grid-halfColumn']}>
          <p><strong>Before</strong></p>
          <img src={require('./images/before.png')} />
        </div>

        <div className={grids['Grid-halfColumn']}>
          <p><strong>After</strong></p>
          <img src={require('./images/after.png')} />
        </div>
      </div>
    </div>
  )
};
