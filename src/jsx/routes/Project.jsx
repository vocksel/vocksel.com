import React from 'react';

import ProjectPage from 'jsx/components/ProjectPage';
import portfolio from './portfolio';

function getProjectBySlug(slug) {
  return portfolio.find(project => project.slug === slug);
}

export default function Project(props) {
  const project = getProjectBySlug(props.params.projectSlug);

  return (
    <ProjectPage {...project}>
      <project.Description />
    </ProjectPage>
  );
}
