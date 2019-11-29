/**
 * Contains content on the page.
 *
 * This is used in conjunction with the Section component. Section establishes
 * the grid that Content works off of.
 *
 * Usage:

    <Section>
      <Content>
        <p>Hello, World!</p>

        <p>Any node can go in here. Paragraphs, images, lists, you name it.</p>
      </Content>
    </Section>

 * You can also add a sidebar:

    <Section>
      <Content reduced>
        <p>Main content. It was simply resized to give the sidebar some room.
      </Content>

      <Content aside>
        <p>This will appear next to the main content.</p>
      </Content>
    </Section>
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import style from './Content.scss';

export default class Content extends Component {
  getClassName() {
    if (this.props.reduced) {
      return style.reduced;
    } else if (this.props.aside) {
      return style.aside;
    } else if (this.props.half) {
      return style.half;
    } else {
      return style.base;
    }
  }

  render() {
    const className = classNames(this.getClassName(), this.props.className);
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

Content.propTypes = {
  reduced: PropTypes.bool,
  aside: PropTypes.bool
};
