// Deploys the site to the server.
//
// This can only be done with SSH access to the server. If you haven't been
// authorized to deploy, this file can be ignored.
//
// Usage:
//
//   # Deploys to the production environment (davidminnerly.com)
//   $ npm run deploy:prod
//
//   # Deploys to the development environment (beta.davidminnerly.com).
//   # This is used commonly when you're testing out changes and want to see
//   # how they'll look online before being fully ready to push to production.
//   $ npm run deploy:dev

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
