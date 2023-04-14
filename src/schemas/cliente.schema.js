const joi = require('joi');
const id = joi.number().integer();
const dni = joi.number();
const nombre = joi.string().min(3);
const apellido = joi.string().min(3);
const celular = joi.number();
const direccion = joi.string().min(3);
const email = joi.string().min(3);
const sexo = joi.string().min(3);
const provincia = joi.string().min(3);
const tipoConsumidor = joi.string().min(3);
const tipoPersona = joi.string().min(3);
const codPostal = joi.number();
const cuit = joi.number();
const imagen = joi.string().uri();

const createClienteSchema = joi.object({
 
  nombre: nombre.required(),
  apellido: apellido.required(),
  dni: dni.required(),
  celular: celular.required(),
  direccion: direccion.required(),
  email: email.required(),
  imagen: imagen,
  sexo: sexo.required(),
  provincia: provincia.required(),
  tipoConsumidor: tipoConsumidor.required(),
  tipoPersona: tipoPersona.required(),
  codPostal: codPostal.required(),
  cuit: cuit.required()
});
const createClienteVehiculoSchema = joi.object({
 
  clienteId: id.required(),
  vehiculoId: id.required(),
  origen: joi.string().min(3).required(),
  patente: joi.string().min(3).required(),
  año: joi.number().required(),
  motor: joi.number().required(),
  combustible: joi.string().min(3).required(),
  carroceria: joi.string().min(3).required(),
  chasis: joi.string().min(3).required(),
  color: joi.string().min(3).required(),
  prendario: joi.string().min(3).required()
});
const updateClienteSchema = joi.object({

  nombre,
  apellido,
  dni,
  celular,
  imagen,
  direccion,
  email,
  sexo,
  provincia,
  tipoConsumidor,
  tipoPersona,
  codPostal,
  cuit

});
const getClienteSchema = joi.object({
  clienteId: id.required()
});
const getClienteVehiculoSchema = joi.object({
  clienteVehiculoId: id.required()
});

module.exports = {
  createClienteSchema,
  updateClienteSchema,
  getClienteSchema,
  getClienteVehiculoSchema,
  createClienteVehiculoSchema
  };
