const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class loginService{
   
    async signIn(body){

      const options= { where:{}}
      const {username, password, oficinaId}=body;
      options.where.username= username;
      options.where.password= password;
      
      const res  = await models.Usuario.findOne(options);
      if(!res){ throw boom.notFound('Usuario Not Found');}
      const res2 = await models.Oficina.findByPk(oficinaId,{
        include:['movimientos'],
      });
      var estado = true;

      if(!res2){throw boom.notFound('Movimientos not found');}
      if(res2.movimientos[0].descripcion=="Cierre de caja"){estado=false;}


      return {
              ...res.dataValues, 
              estado: estado
              };
    }
    
  
    
  }
  module.exports = loginService;
  