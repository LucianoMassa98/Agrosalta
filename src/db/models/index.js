
const {Cliente, clienteSchema}= require('./cliente.model');
const {ClienteVehiculo, clientevehiculoSchema}= require('./cliente-vehiculo.model');
const {Oficina, oficinaSchema}= require('./oficina.model');
const {Operacion, operacionSchema}= require('./operaciones.model');
const {Servicio, servicioSchema}= require('./servicio.model');
const {Usuario, usuarioSchema}= require('./usuario.model');
const {Vehiculo, vehiculoSchema}= require('./vehiculo.model');

function setupModels(sequelize){

Usuario.init(usuarioSchema,Usuario.config(sequelize));
Cliente.init(clienteSchema,Cliente.config(sequelize));
Vehiculo.init(vehiculoSchema,Vehiculo.config(sequelize));
ClienteVehiculo.init(clientevehiculoSchema,ClienteVehiculo.config(sequelize));
Oficina.init(oficinaSchema,Oficina.config(sequelize));
Operacion.init(operacionSchema,Operacion.config(sequelize));
Servicio.init(servicioSchema,Servicio.config(sequelize));
//Usuario.init(UsuarioSchema,Usuario.config(sequelize));

//Usuario.associate(sequelize.models);
Cliente.associate(sequelize.models);
Vehiculo.associate(sequelize.models);
ClienteVehiculo.associate(sequelize.models);
Oficina.associate(sequelize.models);
Operacion.associate(sequelize.models);
Servicio.associate(sequelize.models);
Usuario.associate(sequelize.models);


}
module.exports = setupModels;
