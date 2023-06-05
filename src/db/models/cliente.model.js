const {Model,DataTypes, Sequelize} = require('sequelize');

const CLIENTE_TABLE = 'clientes';
const clienteSchema  = {
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
  apellido: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  dni: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  celular: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
   sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  provincia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoConsumidor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoPersona: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codPostal: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  cuit: {
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
 
class Cliente extends Model{
  // crear metodos estaticos
  static associate(models){

    this.belongsToMany(models.Vehiculo, {
      as: 'items',
      through: models.ClienteVehiculo,
      foreignKey: 'clienteId',
      otherKey: 'vehiculoId'
    });
    
   this.hasMany(models.Operacion, {as: 'operaciones', foreignKey: 'clienteId'});
  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  CLIENTE_TABLE,
      modelName: 'Cliente',
      timestamps: false
    }
  }
}
module.exports = {
  CLIENTE_TABLE,
  clienteSchema,
  Cliente
}
