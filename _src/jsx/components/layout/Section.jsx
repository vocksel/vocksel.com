/**
 * Container for sections of content.
 *
 * This is used in conjunction with the Content and Title components to
 * construct sections of content on the page.
 *
 * Usage:

    <Section>
      <Content>
        <Title>Hello, World!</Title>

        <p>Some content in the section.</p>
      </Content>
    </Section>

 * Section is a grid container, and Content spans the entire width. You can add
 * a sidebar like so:

    <Section>
      <Content reduced>
        <Title>Page</Title>

        <p>Main content</p>
      </Content>

      <Content aside>
        <Title>Sidebar</Title>

        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">GitHub</a></li>
        </ul>
      </Content>
    </Section>

 */

import React, { Component } from 'react';
import classNames from 'classnames';

import style from './Section.scss';

export default class Section extends Component {
  render() {
    const className = classNames(style.base, this.props.className);
    return (
      <section className={className}>
        {this.props.children}
      </section>
    );
  }
}
