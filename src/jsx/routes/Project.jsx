import React from 'react';

import ProjectPage from 'jsx/components/ProjectPage';
import portfolio from './portfolio';

function getProjectBySlug(slug) {
  for (const project of portfolio) {
    if (slug === project.slug) {
      return project;
    };
  };
}

export default function Project(props) {
  const slug = props.params.projectSlug;
  const project = getProjectBySlug(slug);

  return (
    <ProjectPage {...project}>
      {project.description}
    </ProjectPage>
  );
}
