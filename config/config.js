require('dotenv').config();

const {PORT,
    DATABASE_DIALECT,
    NODE_ENV,
    TEST_DATABASE_URL,
    DATABASE_URL } = process.env;

const APP_DATABASE_URL= NODE_ENV ==='test' ? TEST_DATABASE_URL : DATABASE_URL;

const environmentVariables = {
  PORT: PORT || 4000,
  DATABASE_URL:APP_DATABASE_URL,
  DATABASE_DIALECT: DATABASE_DIALECT || 'postgres',
  NODE_ENV: NODE_ENV || 'production'
};

module.exports = environmentVariables;
// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   }
// }
