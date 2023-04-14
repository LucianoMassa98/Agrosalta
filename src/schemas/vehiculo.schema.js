const joi = require('joi');
const id = joi.number().integer();
const nombre = joi.string().min(3);
const fabricante = joi.string().min(3);


const createVehiculoSchema = joi.object({
 

  nombre: nombre.required(),
  fabricante: fabricante.required(),
});
const updateVehiculoSchema = joi.object({

  nombre,
  fabricante
});
const getVehiculoSchema = joi.object({
  vehiculoId: id.required()
});

module.exports = {
  createVehiculoSchema,
  updateVehiculoSchema,
  getVehiculoSchema
  };
