import React, { Component } from 'react';

import ProjectPage from 'jsx/components/project/ProjectPage';
import projects from './projects';

function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}

export default class Project extends Component {
  render() {
    const { projectSlug } = this.props.params;
    const project = getProjectBySlug(projectSlug);

    return (
      <ProjectPage {...project}>
        {project.description}
      </ProjectPage>
    );
  }
}
