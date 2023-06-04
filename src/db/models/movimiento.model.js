const {Model,DataTypes, Sequelize} = require('sequelize');
const {USUARIO_TABLE}=require('../models/usuario.model');
const {OFICINA_TABLE}=require('../models/oficina.model');
const MOVIMIENTO_TABLE = 'movimientos';

const movimientoSchema  = {
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
  descripcion:{
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

class Movimiento extends Model{
  // crear metodos estaticos
  static associate(models){

    this.belongsTo(models.Usuario, {as: 'usuario'});
    this.belongsTo(models.Oficina, {as: 'oficina'});
  
  
  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  MOVIMIENTO_TABLE,
      modelName: 'Movimiento',
      timestamps: false
    }
  }
}
module.exports = {
  MOVIMIENTO_TABLE,
  movimientoSchema,
  Movimiento
}
