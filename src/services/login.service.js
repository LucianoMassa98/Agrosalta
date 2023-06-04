const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class loginService{
   
    async signIn(body){

      const options= { where:{}}
      const {username, password}=body;
      options.where.username= username;
      options.where.password= password;
      
      const res  = await models.Usuario.findOne(options);
      if(!res){ throw boom.notFound('Usuario Not Found');}

      return res;
    }
    
  
    
  }
  module.exports = loginService;
  