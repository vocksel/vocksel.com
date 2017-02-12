import React from 'react';

import ProjectTile from 'jsx/components/ProjectTile';
import portfolio from './portfolio';

export default function Home() {
  const projects = portfolio.map((project, index) => {
    return <ProjectTile key={index} {...project} />
  });

  return (
    <div className="portfolio">
      {projects}
    </div>
  );
}
