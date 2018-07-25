module.exports = {
  apps: [{
    name: 'react-redux-universal',
    script: 'npm',
    args: 'start',
  }],

  deploy: {
    production: {
      user: 'lemonrhum',
      host: '206.189.147.90',
      ref: 'origin/master',
      repo: 'git@github.com:bangnguyenanh/react-redux-universal.git',
      path: '/home/lemonrhum/kevinnguyen.xyz',
      'post-deploy': 'yarn && yarn run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
