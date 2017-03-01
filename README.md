# [davidminnerly.com](http://davidminnerly.com)

This is the source code for my personal website. It leverages Webpack and React to create a multi-page site with a portfolio featuring my best work, along with About and Contact pages.

![Screenshot of the site](screenshots/website.png)

## Contributing

Install [NodeJS](https://nodejs.org/en/) if you don't have it already. From there you'll need to install all the packages and start the dev server to get going.

```shell
$ npm install
$ npm start # Starts the dev server
```

With the dev server running, you can start expanding upon the existing content, which can be found at the following locations:

- `src/css/`: Stylesheets, written in Sass. `main.scss` loads in all of the partials in the other folders. Read up on [inuitcss](https://github.com/inuitcss/inuitcss) to understand how everything is structured.
- `src/img/`: All of the site's images.
- `src/jsx/`: All of our React components.

Happy coding!
