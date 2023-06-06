const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class loginService{
   
    async signIn(body){

    console.log("--->"+models);
      const options= { where:{}}
      const {username, password, oficinaId}=body;
      options.where.username= username;
      options.where.password= password;
      
      const res  = await models.Usuario.findOne(options);
      if(!res){ throw boom.notFound('Usuario Not Found');}
      const res2 = await models.Oficina.findByPk(oficinaId,{
        include:[{
          model: models.Movimiento,
          as: 'movimientos',
          limit: 1,
          order: [['createdAt', 'DESC']]
          }],
        
      });
      var estado = true;

      if(!res2){throw boom.notFound('Movimientos not found');}
      
      if(res2.dataValues.movimientos.length>0){
      if(res2.movimientos[0].dataValues.descripcion=="Cierre de caja"){estado=false;}
      }else{
        estado=false;
      }

      return {
              ...res.dataValues, 
              estado: estado
              };
    }
    
  
    
  }
  module.exports = loginService;
  