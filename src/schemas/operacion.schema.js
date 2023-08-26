const joi = require('joi');
const id = joi.number().integer();

const valor = joi.number();
const cuotas=joi.number();
const cotizacion=joi.number();
const propuesta=joi.number();
const poliza=joi.number();
const endoso=joi.number();
const subrogacion=joi.number();
const desde = joi.date();
const hasta = joi.date();
const usuarioId=joi.number().integer();
const oficinaId=joi.number().integer();
 const cedulaVerde = joi.string().min(3);
 const clienteId = joi.number().integer();
const pendiente = joi.boolean();
const createdAt = joi.date();


 
const createOperacionSchema = joi.object({
 usuarioId: id.required(),
 clienteId: clienteId.required(),
 clienteVehiculoId: id.required(),
 servicioId: id.required(),
 oficinaId: id.required(),
 valor: valor.required(),
 cuotas: cuotas.required(),
 desde: desde.required(),
 hasta: hasta.required(),
 cotizacion,
 propuesta,
 poliza,
 endoso,
 subrogacion,
 cedulaVerde

});
const updateOperacionSchema = joi.object({
  usuarioId,
  oficinaId,
  valor,
  cuotas,
  desde,
  hasta,
  createdAt,
  cotizacion,
  propuesta,
  poliza,
  endoso,
  subrogacion,
  cedulaVerde,
});
const getOperacionSchema = joi.object({
  operacionId: id.required()
});
const getCompararSchema = joi.object({
  clienteId: id.required(),
  servicioId: id.required(),
  clienteVehiculoId: id.required()
});
const queryOperacionSchema = joi.object({
  desde,
  hasta,
  usuarioId,
  oficinaId,
  clienteId,
  pendiente,
 

});
module.exports = {
  createOperacionSchema,
  updateOperacionSchema,
  getOperacionSchema,
  queryOperacionSchema,
  getCompararSchema
  };
