const joi = require('joi');
const id = joi.number().integer();
const nombre = joi.string().min(3);
const valor = joi.number();
const desde = joi.date();
const hasta = joi.date();
const createServicioSchema = joi.object({
  nombre: nombre.required(),
});
const AddValorServicioSchema = joi.object({
  servicioId: id.required(),
  desde: desde.required(),
  hasta:hasta.required(),
  valor: valor.required(),
});

const SubValorServicioSchema = joi.object({
  servicioValorId:id.required()
});

const updateServicioSchema = joi.object({

  nombre,
  valor

});
const getServicioSchema = joi.object({
  servicioId: id.required()
});

module.exports = {
  createServicioSchema,
  updateServicioSchema,
  getServicioSchema,
  AddValorServicioSchema,
  SubValorServicioSchema
  };
