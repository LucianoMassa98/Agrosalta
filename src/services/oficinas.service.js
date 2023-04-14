const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');

class OficinasService{
    async create(data){
      const dat = await models.Oficina.create(data);
      return dat;
    }
    async find(){
      const ofi  = await models.Oficina.findAll();
      if(!ofi){ throw boom.notFound('Oficina Not Found');}
      return ofi;
    }
    async findOne(id){
      const ofi  = await models.Oficina.findByPk(id);
      if(!ofi){ throw boom.notFound('Oficina Not Found');}
      return ofi;
    }
    async update(id, change){
      const oficina = await this.findOne(id);
      const rta = await oficina.update(change);
      return rta;
    }
    async delete(id){
      const oficina = await this.findOne(id);
      const rta = await oficina.destroy();
      return rta;
    }
  }
  module.exports = OficinasService;
  