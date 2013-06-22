### About
This is the source code for my personal website.

I love the idea of things being open source where people can poke and prod at
others work, which is why I put all my files up here on GitHub instead of just
pushing changes to a repo on my webserver.

### Contributing
The Gem [Bundler](http://gembundler.com/) is used to manage the site's gem
dependencies. Run `bundle install` on your version of the repository to get
setup.

If you're editing files in the /content/ directory run `rake watch` to invoke
the 'bundle exec guard' and 'nanoc view' commands. This watches /content/ for
changes, compiles them to /output/ and allows everything to be viewable at
http://localhost:3000/
