const {models} = require('../libs/sequelize');
const boom = require('@hapi/boom');

class OperacionesService{
    async create(data){
      const dat = await models.Operacion.create(data);
      return dat;
    }
    async find(){
      const ope  = await models.Operacion.findAll();
      if(!ope){ throw boom.notFound('Operacion Not Found');}
      return ope;
    }
    async findOne(id){
      const ope  = await models.Operacion.findByPk(id);
      if(!ope){ throw boom.notFound('Operacion Not Found');}
      return ope;
    }
    async update(id, change){
      const ope = await this.findOne(id);
      const rta = await ope.update(change);
      return rta;
    }
    async delete(id){
      const ope = await this.findOne(id);
      const rta = await ope.destroy();
      return rta;
    }
  }
  module.exports = OperacionesService;
  