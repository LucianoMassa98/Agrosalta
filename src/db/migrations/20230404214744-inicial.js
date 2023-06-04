'use strict';

/** @type {import('sequelize-cli').Migration} */

const {CLIENTE_TABLE,clienteSchema}=require('../models/cliente.model');
const {OFICINA_TABLE,oficinaSchema}=require('../models/oficina.model');
const {SERVICIO_TABLE,servicioSchema}=require('../models/servicio.model');
const {SERVICIO_VALOR_TABLE,ServicioValorSchema}=require('../models/servicio-valor.model');
const {USUARIO_TABLE, usuarioSchema}=require('../models/usuario.model');
const {VEHICULO_TABLE,vehiculoSchema}=require('../models/vehiculo.model');
const {CLIENTE_VEHICULO_TABLE,clienteVehiculoSchema}=require('../models/cliente-vehiculo.model');
const {OPERACION_TABLE,operacionSchema}=require('../models/operaciones.model');
const {MOVIMIENTO_TABLE,movimientoSchema}=require('../models/movimiento.model');
 
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable(OFICINA_TABLE,oficinaSchema);
    await queryInterface.createTable(SERVICIO_TABLE,servicioSchema);
    await queryInterface.createTable(SERVICIO_VALOR_TABLE,ServicioValorSchema);
    await queryInterface.createTable(VEHICULO_TABLE,vehiculoSchema);
    await queryInterface.createTable(USUARIO_TABLE,usuarioSchema);
    await queryInterface.createTable(CLIENTE_TABLE,clienteSchema);
    await queryInterface.createTable(CLIENTE_VEHICULO_TABLE,clienteVehiculoSchema);
    await queryInterface.createTable(OPERACION_TABLE,operacionSchema);
    await queryInterface.createTable(MOVIMIENTO_TABLE,movimientoSchema);

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable(MOVIMIENTO_TABLE);
    await queryInterface.dropTable(OPERACION_TABLE);
    await queryInterface.dropTable(CLIENTE_VEHICULO_TABLE);
    await queryInterface.dropTable(CLIENTE_TABLE);
    await queryInterface.dropTable(USUARIO_TABLE);
    await queryInterface.dropTable(VEHICULO_TABLE);
    await queryInterface.dropTable(SERVICIO_VALOR_TABLE);
    await queryInterface.dropTable(SERVICIO_TABLE);
    await queryInterface.dropTable(OFICINA_TABLE);
  }
};
