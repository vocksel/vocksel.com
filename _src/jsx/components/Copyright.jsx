import React, { Component } from 'react';

export default class Copyright extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return <span>&copy; {this.getYear()} David Minnerly</span>;
  }
}
