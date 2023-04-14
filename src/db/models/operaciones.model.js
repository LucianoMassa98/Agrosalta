const {Model,DataTypes, Sequelize} = require('sequelize');
const {USUARIO_TABLE}=require('../models/usuario.model');
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
    onDelete: 'SET NULL'
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
    onDelete: 'SET NULL'
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
    onDelete: 'SET NULL'
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
    onDelete: 'SET NULL'
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
  sumaAsegurada: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  clausula: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  prima: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  premio: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  cotizacion: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  propuesta: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  poliza: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  endoso: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  subrogacion: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  cedulaVerde: {
    allowNull: false,
    type: DataTypes.DOUBLE,
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
