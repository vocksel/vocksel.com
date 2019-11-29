import React from 'react';
import { Link } from 'react-router';

export default {
  name: 'Elixir',
  slug: 'elixir',
  released: '2014',
  tags: [ 'Software', 'Python' ],
  images: [
    require('./images/thumbnail.jpg')
  ],
  link: <a href="https://github.com/vocksel/elixir">View it on Github.</a>,
  description: (
    <div>
      <p>Elixir is a tool I devised to allow Lua source code to be easily packaged and imported into Roblox's development environment, Roblox Studio.</p>

      <p>A problem I encounter often with Roblox Studio is how restrictive it is. Everything to do with your game is packed into a single file with all your source code and level geometry. This makes it incredibly difficult to version control your code, as you have to wade through thousands of lines of XML to do so.</p>

      <p>Conveniently, Studio allows you to export objects from your game as 'Model' files, which are XML files in a format Studio recognizes. These Model files can also be imported back into Studio. This is the key to Elixir's success.</p>

      <p>Elixir compiles Lua source code into a Model file that can be imported into an existing game. It allows you to use any third-party software you like, such as your favorite text editor or Git for version control.</p>

      <h2>At the Beginning</h2>

      <p>Back in late 2014 I discovered <a href="https://github.com/Anaminus/roblox-cure">Cure</a>, a project by <a href="https://twitter.com/Anaminus">@Anaminus</a>. At the time, I had a sneaking suspicion that it was possible to write my Lua code on the filesystem and import it into Studio, but I didn't know how.</p>

      <p>Cure has a <a href="https://github.com/Anaminus/roblox-cure/blob/master/build.lua">build script</a> for compiling the project, which works the same as Elixir does now. It uses Roblox's XML format to construct a Model file that you can import. I didn't intend on using Cure itself, but the build script was exactly what I needed for my own projects.</p>

      <p>I immediately forked Cure and started trying to understand its build script to the best of my abilities. I rewrote it from the ground up so I could fully understand how it works, modifying it along the way. It got to the point where it was so different from the original that it warranted its own project, which became Elixir.</p>

      <h2>Shortcomings</h2>

      <p>A year after its conception, I was using Elixir in all of my games and it was working great. I could finally work with Git and my text editor of choice.</p>

      <p>Elixir was written in Lua, and despite how well it worked, there were still a lot of shortcomings because of this. Installing Lua on Windows can be a challenge, and you need a third-party library to easily work with the filesystem.</p>

      <p>There were also problems with the overall design of Elixir:</p>

      <ul>
        <li>You had to keep a copy of Elixir's source code in each project you wanted to use it with, and you needed another script to run it. This made it clunky to integrate and work with.</li>

        <li>I ended up using a custom XML generator to construct the Model file, which ended up being very disorganized and hard to work with. The internals were messy and hard to navigate because of this.</li>
      </ul>

      <p>While it worked in its current state, it was far from ideal.</p>

      <h2>Making the Switch</h2>

      <p>After much deliberation, I made the decision to rewrite Elixir in Python.</p>

      <p>Python is a programming language designed to work on the filesystem. It comes equipped with everything I need, including an XML generator. While initially I wasn't looking forward to rebuilding what I had from the ground up, switching to Python was the best thing I could've done for Elixir.</p>

      <p>All of the shortcomings Elixir had were gone.</p>

      <ul>
        <li>Python manages the installation of Elixir so you no longer need to keep Elixir's source code around in your project.</li>
        <li>A script to run everything is still recommended if you have a lot of options, but Elixir can now be run purely by the command line.</li>
        <li>All of my code relating to XML generation could be removed thanks to Python's built in <a href="https://docs.python.org/3.6/library/xml.etree.elementtree.html">etree</a> module.</li>
      </ul>

      <h2>Struggles With Workflow</h2>

      <p>Despite my best efforts, Elixir still has a lot of problems with its workflow. Every time you make a change, you have to recompile the Model file, import it into Studio, and then manually sort your code.</p>

      <p>When Roblox imports a compatible Model file, it dumps it into the Workspace, the same place you store level geometry. Studio has specific containers where you need to store your server, client, and shared code. With everything dumped into the Workspace, you have to manually sort these sections of your codebase each time you make a change.</p>

      <p>Manually sorting your is Elixir's biggest weakness as a tool for decoupling your code from Studio. I ended up creating <Link to="/projects/repo-import">Repo Import</Link>, which takes the imported source code and automatically sorts it for you. This makes coding games outside of Studio significantly less painful</p>

      <h2>Conclusion</h2>

      <p>I've been using Elixir and Repo Import together for about a year, and they work great. There's still some limitations and tedium involved, but I can comfortably code my games and version control them along the way.</p>
    </div>
  )
};
