import React, { Component } from 'react';

import ProjectTile from 'jsx/components/project/ProjectTile';
import portfolio from './portfolio';

export default class Home extends Component {
  render() {
    const projects = portfolio.map((project, index) =>
      <ProjectTile key={index} name={project.name} slug={project.slug}
        released={project.released} image={project.images[0]} />
    );

    return (
      <div>
        <div className="Grid">
          {projects}
        </div>
      </div>
    );
  }
}
