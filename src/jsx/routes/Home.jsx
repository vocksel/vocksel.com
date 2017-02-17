import React from 'react';

import ProjectTile from 'jsx/components/ProjectTile';
import portfolio from './portfolio';

export default function Home() {
  const projects = portfolio.map((project, index) =>
    <ProjectTile key={index} name={project.name} slug={project.slug}
      released={project.released} image={project.images[0]} />
  );

  return (
    <div className="portfolio">
      {projects}
    </div>
  );
}
