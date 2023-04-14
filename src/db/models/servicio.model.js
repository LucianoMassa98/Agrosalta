const {Model,DataTypes, Sequelize} = require('sequelize');

const SERVICIO_TABLE = 'servicios';
const servicioSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  valor: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Servicio extends Model{
  // crear metodos estaticos
  static associate(models){
    
    this.hasMany(models.Operacion, {
      as: 'operaciones',
      foreignKey: 'servicioId'});
   /* this.hasMany(models.Operacion , {
    as: 'operaciones',
    foreignKey: 'operacionId'
    });*/

  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName: SERVICIO_TABLE,
      modelName: 'Servicio',
      timestamps: false
    }
  }
}
module.exports = {
  SERVICIO_TABLE,
  servicioSchema,
  Servicio
}
