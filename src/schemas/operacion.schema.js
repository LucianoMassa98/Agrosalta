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

const createOperacionSchema = joi.object({
 usuarioId: id.required(),
 clienteVeehiculoId: id.required(),
 servicioId: id.required(),
 oficinaId: id.required(),
 valor: valor.required(),
 cuotas: cuotas.required(),
 desde: desde.required(),
 hasta: hasta.required(),
 sumaAsegurada: sumaAsegurada.required(),
 clausulaAjuste: clausulaAjuste.required(),
 prima: prima.required(),
 nroCotizacion: nroCotizacion.required(),
 premio: premio.required(),
});
const updateOperacionSchema = joi.object({
cuotas,
desde,
hasta,
sumaAsegurada,
clausulaAjuste,
prima,
nroCotizacion,
premio

});
const getOperacionSchema = joi.object({
  operacionId: id.required()
});

module.exports = {
  createOperacionSchema,
  updateOperacionSchema,
  getOperacionSchema
  };
