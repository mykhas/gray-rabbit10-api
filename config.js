const milieu = require('milieu');

const config = milieu('gray-rabbit10-api', {
  environment: 'dev',
  server: {
    port: 8081
  },
  mongo: {
    url: 'mongodb://localhost:28018/gray-rabbit10-api',
  }
});


module.exports = config;
