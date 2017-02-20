import React, { Component } from 'react';

import ProjectTile from './project/ProjectTile';
import projects from 'jsx/routes/projects';

export default class Portfolio extends Component {
  getProjectTiles() {
    return projects.map((project, index) =>
      <ProjectTile key={index} name={project.name} slug={project.slug}
        released={project.released} image={project.images[0]} />
    );
  }

  render() {
    const tiles = this.getProjectTiles();

    return (
      <div>
        <div className="Grid">
          {tiles}
        </div>
      </div>
    );
  }
}
