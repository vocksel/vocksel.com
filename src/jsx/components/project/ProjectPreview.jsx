import React, { Component } from 'react';

export default class ProjectPreview extends Component {
  render() {
    return (
      <div className="ProjectPreview">
        <div className="ProjectPreview-image"
          style={{ backgroundImage: `url(${this.props.image})` }} />
      </div>
    );
  }
}
