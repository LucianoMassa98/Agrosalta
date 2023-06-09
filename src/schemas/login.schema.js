const joi = require('joi');

const username = joi.string().min(3);
const password = joi.string().min(3);
const oficinaId = joi.number().integer();

const signInSchema = joi.object({
  username: username.required(),
  password: password.required(),
  oficinaId: oficinaId.required()
});

module.exports = {
  signInSchema
  };
