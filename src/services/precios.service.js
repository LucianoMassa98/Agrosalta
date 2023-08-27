const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class PreciosService{
    async create(data){
      
      const precio = await this.exists(data);
      if(precio){throw boom.notAcceptable("El precio ya existe");}
     
      const dat = await models.ServicioValor.create(data);
      if(!dat){throw boom.notFound("No se pudo crear el precio");}
      return dat;
    }
    async find(){
      const precios  = await models.ServicioValor.findAll();
      if(!precios){ throw boom.notFound('Servicio Not Found');}
      return precios;
    }

     async exists(query){
      const precio  = await models.ServicioValor.findOne({where:{
        desde: query.desde,
        hasta: query.hasta,
        carroceria: query.carroceria,
        tipo: query.tipo
      }});
    
      return precio;
    }
   async findOne(id){
    const precio = await models.ServicioValor.findByPk(id);
    if(!precio){throw boom.notFound("No se encontro el precio");}
    return precio;
  }
    async update(id, change){
      const servicioValor = await this.findOne(id);
      const rta = await servicioValor.update(change);
      if(!rta){ throw boom.notFound('Precio no actualizado');}
      return rta;
    }
    async delete(id){
      const serv = await this.findOne(id);
      const rta = await serv.destroy();
      if(!rta){ throw boom.notFound('Precio no eliminado');}
      return rta;
    }

   
  }
  module.exports = PreciosService;
  