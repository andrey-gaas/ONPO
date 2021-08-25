module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user: "Nuzhdin@d120-079",
      host: "10.3.120.79",
      path: "C:/Users/nuzhdin/Desktop/Git_rep/ONPO",
      repo: "git@github.com:andrey-gaas/ONPO.git",
      ref: "origin/main",
      key: "C:/Users/nuzhdin/.ssh/deploy_rsa.pub",
      'pre-deploy-local': '',
      'post-deploy' : 'npm run build',
      'pre-setup': ''
    }
  }
};
