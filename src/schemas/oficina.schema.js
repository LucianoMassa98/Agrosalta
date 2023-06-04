const joi = require('joi');
const id = joi.number().integer();
const nombre = joi.string().min(3);
const celular = joi.string().min(3);
const direccion = joi.string().min(3);
const desde = joi.date();
const hasta = joi.date();

const createOficinaSchema = joi.object({
 

  nombre: nombre.required(),
  celular: celular.required(),
  direccion: direccion.required(),
 
});
const updateOficinaSchema = joi.object({
  nombre,
  celular,
  direccion,

});
const getOficinaSchema = joi.object({
  oficinaId: id.required()
});
const queryOficinaSchema = joi.object({
  desde,
  hasta

});
module.exports = {
  createOficinaSchema,
  updateOficinaSchema,
  getOficinaSchema,
  queryOficinaSchema
  };
