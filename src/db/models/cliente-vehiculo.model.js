const {Model,DataTypes, Sequelize} = require('sequelize');
const {CLIENTE_TABLE}=require('../models/cliente.model');
const {VEHICULO_TABLE}=require('../models/vehiculo.model');
const CLIENTE_VEHICULO_TABLE = 'clientes_vehiculos';
const clienteVehiculoSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  clienteId: {
    field: 'cliente_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CLIENTE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  vehiculoId: {
    field: 'vehiculo_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: VEHICULO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  origen: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  patente: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  año: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  motor: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  combustible: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  carroceria: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  chasis: {
    type: DataTypes.STRING,
    allowNull: true,
  },
   color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prendario: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}
 
class ClienteVehiculo extends Model{
  // crear metodos estaticos
  static associate(models){
    this.belongsTo(models.Cliente, {as: 'cliente'});
    this.belongsTo(models.Vehiculo, {as: 'vehiculo'});
  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  CLIENTE_VEHICULO_TABLE,
      modelName: 'ClienteVehiculo',
      timestamps: false
    }
  }
}
module.exports = {
  CLIENTE_VEHICULO_TABLE,
  clienteVehiculoSchema,
  ClienteVehiculo
}
