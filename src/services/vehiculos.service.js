const {models} = require('../libs/sequelize');
const boom = require('@hapi/boom');

class VehiculosService{
    async create(data){
      const dat = await models.Vehiculo.create(data);
      return dat;
    }
    async find(){
      const vehi  = await models.Vehiculo.findAll();
      if(!vehi){ throw boom.notFound('Vehiculo Not Found');}
      return vehi;
    }
    async findOne(id){
      const vehi  = await models.Vehiculo.findByPk(id);
      if(!vehi){ throw boom.notFound('Vehiculo Not Found');}
      return vehi;
    }
    async update(id, change){
      const vehi = await this.findOne(id);
      const rta = await vehi.update(change);
      return rta;
    }
    async delete(id){
      const vehi = await this.findOne(id);
      const rta = await vehi.destroy();
      return rta;
    }
  }
  module.exports = VehiculosService;
  