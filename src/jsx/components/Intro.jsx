import React, { Component } from 'react';
import { Link } from 'react-router';

import links from 'css/components/_links.scss';
import { Section, Content, Title } from './layout';

export default class Intro extends Component {
  render() {
    return (
      <Section>
        <Content>
          <Title>About</Title>

          <p>Hey, nice to meet you, I'm David Minnerly. I'm a programmer, 3D modeler, and I also make websites on occasion.</p>

          <p>I'm fluent in Lua, and I can hold my ground in JavaScript and Python. I frequently post about what I'm up to on <a href="https://twitter.com/voxeldavid" className={links.twitter}>Twitter <i className="fa fa-twitter" /></a> and many of my projects are open-sourced on <a href="https://github.com/vocksel" className={links.github}>GitHub <i className="fa fa-github" /></a>.</p>

          <p>Feel free to <Link to="/contact" className={links.contact}>contact me <i className="fa fa-paper-plane-o" /></Link> with anything on your mind, I'd love to chat and get to know you.</p>
        </Content>
      </Section>
    );
  }
}
