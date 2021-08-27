module.exports = {
  apps : [{
    name: "onpo",
    script: 'index.js',
    watch: '.'
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
