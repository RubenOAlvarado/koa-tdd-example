// Update with your config settings.

const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {

  test:{
    client: 'pg',
    connection: 'postgres://munditoro:munditoro@localhost:5432/koa_api_test',
    pool: { min: 0, max: 30, acquireTimeoutMillis: 60 * 1000 },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds:{
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://munditoro:munditoro@localhost:5432/koa_api',
    pool: { min: 0, max: 30, acquireTimeoutMillis: 60 * 1000 },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds:{
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

};
