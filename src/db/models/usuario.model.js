const {Model,DataTypes, Sequelize} = require('sequelize');

//const {ROLE_TABLE}=require('../models/role.model');
const USUARIO_TABLE = 'usuarios';
const usuarioSchema  = {
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
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  }, 
  tipo: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  celular: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nacimiento: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Usuario extends Model{
  // crear metodos estaticos
  static associate(models){

    
    this.hasMany(models.Operacion, {as: 'operaciones', foreignKey: 'usuarioId'});
    //this.hasMany(models.Venta, {as: 'ventas', foreignKey: 'usuarioId'});


  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}
module.exports = {
  USUARIO_TABLE,
  usuarioSchema,
  Usuario
}
