
const Sequelize = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('../db/models');

const options = {
  dialect: 'mysql',
  logging: config.isProd ? false : true,
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
    timezone: '-03:00'
  }
}

console.log('Modo Produccion: '+config.isProd);
const dat = new Sequelize( config.dbUrl, options);
console.log("salio por aqui");
setupModels(dat);

module.exports = dat;
