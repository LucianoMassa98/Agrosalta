const {Model,DataTypes, Sequelize} = require('sequelize');

const VEHICULO_TABLE = 'vehiculos';
const vehiculoSchema  = {
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
  fabricante: {
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

class Vehiculo extends Model{
  // crear metodos estaticos
  static associate(models){
    this.hasMany(models.ClienteVehiculo, {
      as: 'itemsVehiculo',
      foreignKey: 'clienteVehiculoId',
    });

  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  VEHICULO_TABLE,
      modelName: 'Vehiculo',
      timestamps: false
    }
  }
}
module.exports = {
  VEHICULO_TABLE,
  vehiculoSchema,
  Vehiculo
}
