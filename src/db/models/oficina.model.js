const {Model,DataTypes, Sequelize} = require('sequelize');
const OFICINA_TABLE = 'oficinas';
const oficinaSchema  = {
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
  celular: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  direccion: {
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

class Oficina extends Model{
  // crear metodos estaticos
  static associate(models){

    this.hasMany(models.Operacion, {as: 'operaciones', foreignKey: 'oficinaId'});
    this.hasMany(models.Movimiento, {as: 'movimientos', foreignKey: 'oficinaId'});
    
  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName: OFICINA_TABLE,
      modelName: 'Oficina',
      timestamps: false
    }
  }
}
module.exports = {
  OFICINA_TABLE,
  oficinaSchema,
  Oficina
}
