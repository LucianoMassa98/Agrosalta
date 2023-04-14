const joi = require('joi');
const id = joi.number().integer();
const username = joi.string().min(3);
const password = joi.string().min(3);
const dni = joi.number();
const nombre = joi.string().min(3);
const apellido = joi.string().min(3);
const celular = joi.string().min(3);
const direccion = joi.string().min(3);
const email = joi.string().min(3);
const imagen = joi.string().uri();
const nacimiento = joi.date();

const createUsuarioSchema = joi.object({
 
  username: username.required(),
  password: password.required(),
  nombre: nombre.required(),
  apellido: apellido.required(),
  dni: dni.required(),
  celular: celular.required(),
  direccion: direccion.required(),
  email: email.required(),
  imagen: imagen,
  nacimiento: nacimiento.required()
});
const updateUsuarioSchema = joi.object({
  username,
  password,
  nombre,
  apellido,
  dni,
  celular,
  imagen,
  direccion,
  email,
  nacimiento

});
const getUsuarioSchema = joi.object({
  usuarioId: id.required()
});

module.exports = {
  createUsuarioSchema,
  updateUsuarioSchema,
  getUsuarioSchema
  };
