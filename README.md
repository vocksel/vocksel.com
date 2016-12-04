# The Website of David Minnerly

This is the source code for my personal website, [davidminnerly.com](http://davidminnerly.com). It's a simple one-pager that leverages [inuitcss](https://github.com/inuitcss/getting-started), [Gulp](http://gulpjs.com) and numerous other amazing utilities.

This is my first project working with inuitcss and Gulp. inuitcss is absolutely amazing for keeping my CSS organized. As of yet I haven't had any problems locating my styles. And Gulp is an astounding build system. I can write plain JavaScript in a Gulp task without having to make a plugin of some kind.

## Contributing

This project uses the [Gulp](http://gulpjs.com) build system for all of its tasks. You'll need a copy of [Node](http://nodejs.org) installed to download the dependencies.

```bash
$ npm install -g gulp-cli
$ npm install
```

The main task you'll be interested in is `gulp serve` which will build all of the files under `src/` and serve them up in the browser at [localhost:8080](http://localhost:8080).

From there it's just a matter of expanding upon the existing content, which can be found at the following locations:

- `src/css/`: Stylesheets, written in Sass. `main.scss` loads in all of the partials in the other folders. Read up on [inuitcss](https://github.com/inuitcss/inuitcss) to understand how everything works.
- `src/img/`: All of the site's images.
- `src/js/`: JavaScript files used in our markup.
- `src/templates/`: [Pug](https://pugjs.org/) layouts and mixins to give the site a consistent look.
- `src/views/`: Pages for the site. This is where the index goes, along with things like an 'about' or 'contact' page.

Happy coding!
