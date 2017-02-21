import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    return (
      <section className="Section Grid">
        <header className="Grid-fullColumn">
          <h1 className="Section-title">{this.props.name}</h1>
        </header>

        {this.props.children}
      </section>
    );
  }
}
