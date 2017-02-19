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
        {this.props.name}
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
