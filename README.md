### About
This is the source code for my personal website.

I love the idea of things being open source where people can poke and prod at
others work, which is why I put all my files up here on GitHub instead of just
pushing changes to a repo on my webserver.

### Contributing

You should have a general knowledge of the
[Ruby](http://ruby-lang.org) language and the
[Nanoc](http://nanoc.ws) static site generator before continuing.

After cloning the repository run `bundle` on it to get the required gems.

If you're editing anything in the content directory use `bundle exec guard &
nanoc view` to automatically compile changes and have them viewable at localhost:3000