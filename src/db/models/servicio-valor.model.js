const {Model,DataTypes, Sequelize} = require('sequelize');

const SERVICIO_VALOR_TABLE = 'servicios_valores';
const ServicioValorSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  valor: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  desde: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  hasta: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  carroceria: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  tipo: {
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
 
class ServicioValor extends Model{
  // crear metodos estaticos
  static associate(models){

  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  SERVICIO_VALOR_TABLE,
      modelName: 'ServicioValor',
      timestamps: false
    }
  }
}
module.exports = {
  SERVICIO_VALOR_TABLE,
  ServicioValorSchema,
  ServicioValor
}
