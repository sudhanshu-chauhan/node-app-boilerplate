const convict = require('convict');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const config = convict({
  env: {
    doc: 'the application environment.',
    format: ['prod', 'dev', 'test', 'local'],
    default: 'local',
    env: 'NODE_ENV',
  },
  saltRounds: {
    doc: 'salt rounds for hashing password',
    format: Number,
    default: 10,
    env: 'SALT_ROUNDS',
  },
  appSecret: {
    doc: 'application secret for generating jwt token',
    format: String,
    default: '',
    env: 'APP_SECRET',
  },
  port: {
    doc: 'the port for app server',
    format: 'port',
    default: 3000,
    env: 'PORT',
  },
  mongo: {
    host: {
      doc: 'the host for mongod',
      format: String,
      default: 'localhost',
      env: 'MONGO_HOST',
    },
    port: {
      doc: 'the port for mongodb host',
      format: 'port',
      default: 27017,
      env: 'MONGO_PORT',
    },
    db: {
      doc: 'the name of the database',
      format: String,
      default: 'testdb',
      env: 'MONGO_DB',
    },
  },
});

const env = config.get('env');
config.loadFile(`${__dirname}/.${env}.d/${env}.json`);
config.validate({ allowed: 'strict' });
module.exports = config;
