## Stay Tuned

This is the source code for my personal website, [davidminnerly.com](http://davidminnerly.com). I'm currently in the process of transitioning from my [Middleman](http://middlemanapp.com) site ([release 4.3.0](https://github.com/VoxelDavid/voxeldavid-website/releases/tag/v4.3.0)). It's going to be a little while before I have anything presentable.

## Contributing

This project uses the [Gulp](http://gulpjs.com) build system for all of it's tasks. You'll need Node and optionally Ruby if you'd like to work on the [Sass](http://sass-lang.com) files.

```bash
# You need Gulp installed globally so you can run the gulpfile from the command line.
$ npm install -g gulp
$ npm install
$ bower install
```

The main task you'll be interested in is `gulp serve` which will build all of the files under `src/` and serve them up in the browser at http://localhost

From there it's just a matter of expanding upon the existing content.

Happy coding!
