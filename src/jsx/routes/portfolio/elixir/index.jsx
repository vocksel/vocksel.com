import React from 'react';
import { Link } from 'react-router';

export default {
  name: 'Elixir',
  slug: 'elixir',
  released: '2014',
  tags: [ 'Software', 'Python' ],
  images: [
    require('./images/thumbnail.png')
  ],
  description: (
    <div>
      <p>Elixir is a tool I devised to allow Lua source code to be easily packaged and imported into Roblox’s development environment, Roblox Studio.</p>

      <p>A problem I encounter often with Roblox Studio is how restrictive it is. Everything to do with your game is packed into a single file. All your code, your map geometry, everything. If you want to version control your game, you have to commit the entire game if you don’t want to go trudging through thousands of lines of XML.</p>

      <p>Elixir solves the above problem. I can write all of my game’s code on the filesystem and then import the single file into Roblox Studio. All of my code is now in my game, with minimal effort on my part.</p>

      <h2>History</h2>

      <p>Back in late 2014 I discovered <a href="">Cure</a>, a project by Roblox user Anaminus. At the time, I had a sneaking suspicion that it was possible to write my Lua code on the filesystem and import it into Studio, but I didn’t know how.</p>

      <p>Roblox games are composed of instances, which can range from source code containers to geometry. These instances can be saved as XML files to your computer, you can even drag-and-drop them back into Studio to import them.</p>

      <p>This is how Cure’s build script works. It compiles Lua source code into a Roblox-compatible XML file that can be imported into Studio. I didn’t intend on using Cure itself, but the build script was exactly what I needed.</p>

      <p>I immediately forked Cure and started trying to understand the build script to the best of my abilities, eventually modifying it to the point where it warranted its own project.</p>

      <h2>Shortcomings</h2>

      <p>A year later, I was using Elixir in all of my games and it was working great. I could finally work with Git and my text editor of choice.</p>

      <p>Elixir was written in Lua, and despite how well it worked, there were still a lot of shortcomings because of this. Installing Lua on Windows can be a challenge, and you need a third-party library to easily work with the filesystem.</p>

      <p>There were also problems with the overall design of Elixir:</p>

      <ul>
        <li><strong>It was clunky to use.</strong> You had to keep a copy of Elixir’s source code in each project you wanted to use it with, and you needed another build script to run it.</li>

        <li><strong>It’s internals were chaotic.</strong> I ended up using a custom XML generator to construct the packaged file, which ended up being very disorganized and hard to work with. I attempted to find a third-party library to remedy this, but came up short.</li>
      </ul>

      <p>While it worked in its current state, it was far from ideal.</p>

      <h2>Making the Switch</h2>

      <p>After much deliberation, I made the decision to rewrite Elixir in Python.</p>

      <p>Python is a programming language designed to work on the filesystem. It comes equipped with everything I need, including an XML generator. While initially I wasn’t looking forward to rebuilding what I had from the ground up, switching to Python was the best thing I could’ve done for Elixir.</p>

      <p>All of the shortcomings Elixir had were gone.</p>

      <ul>
        <li>Python manages the installation of Elixir so you no longer need to keep Elixir’s source code around in your project.</li>
        <li>A build script is still recommended if you have a lot of settings, but Elixir can now be run via the command line as well.</li>
        <li>All of my code relating to XML generation could be removed thanks to Python’s built in etree module.</li>
      </ul>

      <h2>Struggles with Workflow</h2>

      <p>Despite my best efforts, Elixir still has a lot of problems with its workflow.</p>

      <p>Every time you make a change, you have to recompile the XML file, drag and drop it into Roblox Studio, and then sort your client, server, and shared code.</p>

      <p>When Roblox imports a compatible XML file, it dumps it right into the location where it stores all of your game geometry, the Workspace. Roblox has specific containers where you need to store your code, and because everything is dumped into the Workspace, you have to manually move each part of your codebase to their respective locations every time you make a change.</p>

      <p>This was and still is Elixir’s greatest hurdle. I started a new project called <Link to="/projects/repo-import">Repo Import</Link> that I encourage you to read about next. In short: it takes the imported source code and automatically sorts it for you. This fixes the sorting part of the above workflow, but you still have to recompile and drag-and-drop every time you make a change.</p>

      <p>The Elixir + Repo Import combo is what I’ve been using for months now, but it still has the glaring issue of compile->drag-and-drop. And when you’re recompiling 20+  times every day, the tedium starts to get to you.</p>

      <p>However, all is not lost. This story has a happy ending. I recently published <Link to="/projects/studio-bridge">Studio Bridge</Link>, which again, I encourage you to read about. It uses Roblox’s built-in HTTP service and a NodeJS server to sync all of the source code in your project with Roblox Studio. And while still in its infancy, Studio Bridge is shaping up to be exactly what I’ve been needing all these years.</p>

      <h2>Conclusion</h2>

      <p>Elixir isn’t the best if you want to incorporate it into a workflow for developing a game on Roblox, but it’s still a great tool if you want to bundle up your source code.</p>
    </div>
  )
};
