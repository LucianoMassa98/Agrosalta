const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class ServiciosService{
    async create(data){
      const dat = await models.Servicio.create(data);
      return dat;
    }
    async find(){
      const serv  = await models.Servicio.findAll();
      if(!serv){ throw boom.notFound('Servicio Not Found');}
      return serv;
    }
    async findOne(id){
      const serv = await models.Servicio.findByPk(id);
      if(!serv){ throw boom.notFound('Servicio Not Found');}
      return serv;
    }
    async update(id, change){
      const serv = await this.findOne(id);
      const rta = await serv.update(change);
      return rta;
    }
    async delete(id){
      const serv = await this.findOne(id);
      const rta = await serv.destroy();
      return rta;
    }
  }
  module.exports = ServiciosService;
  