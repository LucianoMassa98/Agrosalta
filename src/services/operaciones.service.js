const {models} = require('../libs/sequelize');
const boom = require('@hapi/boom');
const { Op } = require('sequelize');
class OperacionesService{
    async create(data){

      const dat = await models.Operacion.create(data);
      return dat;
    }
    async find(query){

      const options= {
        where:{}
      };
      const {desde,hasta} = query;
      if(desde && hasta){
        options.where.createdAt={
          [Op.gte]: desde,
          [Op.lte]: hasta
        }
      }
     
      const {usuarioId} = query;
      if(usuarioId){ options.where.usuarioId= usuarioId;}
      const {oficinaId} = query;
      if(oficinaId){ options.where.oficinaId= oficinaId;}

      const {clienteId} = query;
      if(clienteId){ options.where.clienteId= clienteId;}
       
      const ope  = await models.Operacion.findAll(options);
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
  