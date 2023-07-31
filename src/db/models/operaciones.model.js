const {Model,DataTypes, Sequelize} = require('sequelize');
const {USUARIO_TABLE}=require('../models/usuario.model');
const {CLIENTE_TABLE}=require('../models/cliente.model');
const {CLIENTE_VEHICULO_TABLE}=require('../models/cliente-vehiculo.model');
const {SERVICIO_TABLE}=require('../models/servicio.model');
const {OFICINA_TABLE}=require('../models/oficina.model');
const OPERACION_TABLE = 'operaciones';

const operacionSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  usuarioId: {
    field: 'usuario_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USUARIO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
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
  clienteVehiculoId: {
    field: 'cliente_vehiculo_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CLIENTE_VEHICULO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  servicioId: {
    field: 'servicio_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SERVICIO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  oficinaId: {
    field: 'oficina_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: OFICINA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  valor: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  cuotas: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  desde: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  hasta: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  cotizacion: {
    allowNull: true,
    type: DataTypes.DOUBLE,
  },
  propuesta: {
    allowNull: true,
    type: DataTypes.DOUBLE,
  },
  poliza: {
    allowNull: true,
    type: DataTypes.DOUBLE,
  },
  endoso: {
    allowNull: true,
    type: DataTypes.DOUBLE,
  },
  subrogacion: {
    allowNull: true,
    type: DataTypes.DOUBLE,
  },
  cedulaVerde: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Operacion extends Model{
  // crear metodos estaticos
  static associate(models){

    this.belongsTo(models.Usuario, {as: 'usuario'});
    this.belongsTo(models.ClienteVehiculo, {as: 'clienteVehiculo'});
    this.belongsTo(models.Servicio, {as: 'servicio'});
    this.belongsTo(models.Oficina, {as: 'oficina'});
    this.belongsTo(models.Cliente, {as: 'cliente'});
  
  
  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  OPERACION_TABLE,
      modelName: 'Operacion',
      timestamps: false
    }
  }
}
module.exports = {
  OPERACION_TABLE,
  operacionSchema,
  Operacion
}
