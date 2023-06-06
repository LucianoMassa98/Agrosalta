const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize');
const {Op}= require('sequelize');

class OficinasService{
    async create(data){
      const dat = await models.Oficina.create(data);
      return dat;
    }
    async find(query){
      const options={
        where:{},
        
        include: []
      };
      const {desde,hasta} = query;
      if(desde && hasta){
        
        options.where={
          
          createdAt:{
            [Op.gte]: desde,
            [Op.lte]: hasta
          }
          
        };
        options.include.push('operaciones');
        options.include.push('movimientos');
        /*

        options.include.push({
          model: models.Operacion,
          as: 'operaciones',
          include:['cliente','usuario','servicio']
          }
        );

        options.include.push({
          model: models.Movimiento,
          as: 'movimientos',
          include:['usuario']
          }
        );
       */
      
      }
      
      const ofi  = await models.Oficina.findAll(options);
      if(!ofi){ throw boom.notFound('Oficina Not Found');}
      return ofi;
    }
    async findOne(id,query){
       
      const options={
        include: []
      };
      const {desde,hasta} = query;
      if(desde && hasta){
        
      options.include.push({
          model: models.Operacion,
          as: 'operaciones',
          include:['cliente','usuario','servicio'],
          where:{
            createdAt:{
              [Op.gte]: desde,
              [Op.lte]: hasta
            }
          }
          }
        );

        options.include.push({
          model: models.Movimiento,
          as: 'movimientos',
          include:['usuario'],
          where:{
            createdAt:{
              [Op.gte]: desde,
              [Op.lte]: hasta
            }
          }
          }
        );

       }
      
      const ofi  = await models.Oficina.findByPk(id,options);
      if(!ofi){ throw boom.notFound('Oficina Not Found');}
      return ofi;
    }
    async update(id, change){
      const oficina = await this.findOne(id,{});
      const rta = await oficina.update(change);
      return rta;
    }
    async delete(id){
      const oficina = await this.findOne(id,{});
      const rta = await oficina.destroy();
      return rta;
    }
  }
  module.exports = OficinasService;
  