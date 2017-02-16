import React, { Component } from 'react';

class MainImage extends Component {
  render() {
    return (
      <div className="ProjectPreview-image"
        style={{ backgroundImage: `url(${this.props.image})` }} />
    );
  }
}

class Meta extends Component {
  render() {
    return (
      <div className="ProjectPreview-meta">
        <span className="ProjectPreview-title grid__col grid__col--2-of-3">
          {this.props.name}
        </span>

        <span className="ProjectPreview-date grid__col grid__col--1-of-3">
          <i className="fa fa-clock-o" /> {this.props.released}
        </span>
      </div>
    );
  }
}

export default class ProjectPreview extends Component {
  render() {
    return (
      <div className="ProjectPreview">
        <MainImage image={this.props.image} />
        <Meta name={this.props.name} released={this.props.released} />
      </div>
    );
  }
}
