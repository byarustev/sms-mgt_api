require('dotenv').config();
const env={
  "development": {
    "use_env_variable": "DATABASE_URL",
    "username":"",
    "password":'',
    "database": "",
    "host": "",
    "dialect": "",
    "operatorsAliases": false
  },
  "test": {
    "use_env_variable": "TEST_DATABASE_URL",
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "",
    "operatorsAliases": false
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "",
    "operatorsAliases": false
  }
};

module.exports = env;
