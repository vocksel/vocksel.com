import React, { Component } from 'react';

import grids from 'css/objects/_grids.scss';
import Section from './Section';
import ProjectTile from './project/ProjectTile';
import Title from './layout/Title';
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
      <Section>
        {/* HACK: Currently we need to wrap the title in a full-width column so
          that it appears above the project tiles. Special components should be
          made so we can remove this. */}
        <div className={grids.full}>
          <Title>Selected work</Title>
        </div>

        {tiles}
      </Section>
    );
  }
}
