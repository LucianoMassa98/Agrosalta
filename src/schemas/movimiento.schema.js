const joi = require('joi');
const id = joi.number().integer();
const valor = joi.number();
const descripcion = joi.string();
const usuarioId=joi.number().integer();
const oficinaId=joi.number().integer();
const desde =  joi.date();
const hasta =  joi.date();

const createMovimientoSchema = joi.object({
 usuarioId: id.required(),
 oficinaId: id.required(),
 descripcion: descripcion.required(),
 valor: valor.required(),
});
const updateMovimientoSchema = joi.object({
valor,
descripcion

});
const getMovimientoSchema = joi.object({
  movimientoId: id.required()
});
const queryMovimientoSchema = joi.object({
  desde,
  hasta,
  usuarioId,
  oficinaId,
  descripcion

});


/*const queryMovimientoSchema = joi.object({
  limit,
  offset,
  costo,
  costo_min,
  costo_max: costo_max.when('costo_min',{
    is: joi.number().positive(),
    then: joi.required()
  })
});*/

module.exports = {
  createMovimientoSchema,
  updateMovimientoSchema,
  getMovimientoSchema,
  queryMovimientoSchema
  };
