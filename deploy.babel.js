import git from 'simple-git';
import config from './webpack.config.babel.js';

// Remote repositories for deploying the site. These can only be pushed to with
// proper authorization.
const REMOTES = {
  staging: 'ssh://git@davidminnerly.com/~/beta.davidminnerly.git',
  production: 'ssh://git@davidminnerly.com/~/davidminnerly.git'
}

const outputDir = config.output.path;
const repo = git(outputDir)
  .init()
  .add('.')
  .commit('Release');

switch (process.env.NODE_ENV) {
  case 'development':
    repo.addRemote('origin', REMOTES.staging);
    break;
  case 'production':
    repo.addRemote('origin', REMOTES.production);
    break;
}

repo.push(['-f', 'origin', 'master'])
