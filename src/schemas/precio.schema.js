const joi = require('joi');
const id = joi.number().integer();
const valor = joi.number();
const desde = joi.date();
const hasta = joi.date();
const carroceria = joi.string().min(3);
const tipo = joi.string().min(3);


const createPrecioSchema = joi.object({
  desde: desde.required(),
  hasta:hasta.required(),
  valor: valor.required(),
  carroceria: carroceria.required(),
  tipo: tipo.required()
});

const getPrecioSchema = joi.object({
  precioId:id.required()
});

const updatePrecioSchema = joi.object({
  valor
});

module.exports = {
  createPrecioSchema,
  getPrecioSchema,
  updatePrecioSchema
  };
