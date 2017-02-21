import React, { Component } from 'react';
import { Link } from 'react-router';

import links from 'css/components/_links.scss';
import grids from 'css/objects/_grids.scss';
import Section from './Section';

export default class Intro extends Component {
  render() {
    return (
      <Section name="About">
        <div className={grids['Grid-fullColumn']}>
          <p>Hey, nice to meet you. I'm David Minnerly. I'm a programmer, 3D modeler, and I also make websites on occasion.</p>

          <p>I'm 20 years old, and I've been programming since I was 13. I'm fluent in Lua, and I can hold my ground in JavaScript and Python. I've also done a bit of 3D modeling in recent years, and I've made a few websites. I frequently post about what I'm up to on <a href="https://twitter.com/voxeldavid" className={links['Link--twitter']}>Twitter <i className="fa fa-twitter" /></a> and many of my projets are open-sourced on <a href="https://github.com/vocksel" className={links['Link--github']}>GitHub <i className="fa fa-github" /></a>.</p>
        </div>
      </Section>
    );
  }
}
