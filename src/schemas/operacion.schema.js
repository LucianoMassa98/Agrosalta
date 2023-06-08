const joi = require('joi');
const id = joi.number().integer();
const premio= joi.number();
const valor = joi.number();
const cuotas=joi.number();
const sumaAsegurada=joi.number();
const clausulaAjuste=joi.number();
const prima=joi.number();
const nroCotizacion=joi.number();
const desde = joi.date();
const hasta = joi.date();
const usuarioId=joi.number().integer();
const oficinaId=joi.number().integer();
 const cedulaVerde = joi.string().min(3);
 const clienteId = joi.number().integer();
const pendiente = joi.boolean();
const createdAt = joi.date();

const createOperacionSchema = joi.object({
 usuarioId,
 clienteId: clienteId.required(),
 clienteVehiculoId,
 servicioId: id.required(),
 oficinaId: id.required(),
 valor: valor.required(),
 cuotas: cuotas.required(),
 desde: desde.required(),
 hasta: hasta.required(),
 cedulaVerde: cedulaVerde.required(),
});
const updateOperacionSchema = joi.object({
  usuarioId,
  oficinaId,
  valor,
  cuotas,
  desde,
  hasta,
  createdAt
});
const getOperacionSchema = joi.object({
  operacionId
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
  queryOperacionSchema
  };
