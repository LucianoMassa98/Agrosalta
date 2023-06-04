
const {Cliente, clienteSchema}= require('./cliente.model');
const {Oficina, oficinaSchema}= require('./oficina.model');
const {Servicio, servicioSchema}= require('./servicio.model');
const {Usuario, usuarioSchema}= require('./usuario.model');
const {Vehiculo, vehiculoSchema}= require('./vehiculo.model');
const {ClienteVehiculo, clienteVehiculoSchema}= require('./cliente-vehiculo.model');
const {ServicioValor, ServicioValorSchema}= require('./servicio-valor.model');
const {operacionSchema, Operacion}= require('./operaciones.model');
const {Movimiento, movimientoSchema}= require('./movimiento.model');

function setupModels(sequelize){

Usuario.init(usuarioSchema,Usuario.config(sequelize));
Cliente.init(clienteSchema,Cliente.config(sequelize));
Vehiculo.init(vehiculoSchema,Vehiculo.config(sequelize));
ClienteVehiculo.init(clienteVehiculoSchema,ClienteVehiculo.config(sequelize));
Oficina.init(oficinaSchema,Oficina.config(sequelize));
Servicio.init(servicioSchema,Servicio.config(sequelize));
ServicioValor.init(ServicioValorSchema,ServicioValor.config(sequelize));
Operacion.init(operacionSchema,Operacion.config(sequelize));
Movimiento.init(movimientoSchema,Movimiento.config(sequelize));



Cliente.associate(sequelize.models);
Vehiculo.associate(sequelize.models);
ClienteVehiculo.associate(sequelize.models);
Oficina.associate(sequelize.models);
Servicio.associate(sequelize.models);
ServicioValor.associate(sequelize.models);
Usuario.associate(sequelize.models);
Operacion.associate(sequelize.models);
Movimiento.associate(sequelize.models);

}
module.exports = setupModels;
