const joi = require('joi');

const username = joi.string().min(3);
const password = joi.string().min(3);


const signInSchema = joi.object({
  username: username.required(),
  password: password.required()
});

module.exports = {
  signInSchema
  };
