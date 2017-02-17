import React, { Component } from 'react';

import ProjectPage from 'jsx/components/ProjectPage';
import portfolio from './portfolio';

function getProjectBySlug(slug) {
  return portfolio.find(project => project.slug === slug);
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
