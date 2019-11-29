import React, { Component } from 'react';

import style from './Title.scss';

export default class Title extends Component {
  render() {
    return (
      <h1 className={style.base}>{this.props.children}</h1>
    );
  }
}
