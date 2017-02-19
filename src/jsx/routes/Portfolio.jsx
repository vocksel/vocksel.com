import React, { Component } from 'react';

import ProjectTile from 'jsx/components/project/ProjectTile';
import projects from './projects';

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
