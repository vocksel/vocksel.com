import React, { Component } from 'react';

const currentYear = new Date().getFullYear();

export default class Copyright extends Component {
  render() {
    return <span>&copy; {currentYear} David Minnerly</span>;
  }
}
