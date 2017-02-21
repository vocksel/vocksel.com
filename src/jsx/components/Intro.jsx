import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <section className="Intro Grid">
        <div className="Grid-fullColumn">
          <h1 className="Intro-title">Hi! I'm David Minnerly</h1>

          <p className="Intro-text">I'm a programmer, 3D modeler, and I also make websites on occasion. I frequently post about what I'm doing on <a href="https://twitter.com/voxeldavid" className="Link--twitter">Twitter <i className="fa fa-twitter" /></a> and many of my projets are open-sourced on <a href="https://github.com/vocksel" className="Link--github">GitHub <i className="fa fa-github" /></a>.</p>
        </div>
      </section>
    );
  }
}
