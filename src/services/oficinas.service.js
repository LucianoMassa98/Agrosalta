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
        include: []
      };
      const {desde,hasta} = query;
      if(desde && hasta){
        

        const fechaDesde = new Date(desde);
        const fechaHasta = new Date(hasta);
        //fechaDesde.setHours(fechaDesde.getHours() + 3);
        //fechaHasta.setHours(fechaHasta.getHours() + 3);
       
        options.include.push({
          model: models.Operacion,
          as: 'operaciones',
          required: false,
           where:{
            createdAt:{
              [Op.gte]: fechaDesde,
              [Op.lte]: fechaHasta
            }
           }
          
          }
        );

        options.include.push({
          model: models.Movimiento,
          as: 'movimientos',
          required: false,
           where:{
            createdAt:{
              [Op.gte]: fechaDesde,
              [Op.lte]: fechaHasta
            }
           }
          }
        );
      
      
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
        
        const fechaDesde = new Date(desde);
        const fechaHasta = new Date(hasta);
        fechaDesde.setHours(fechaDesde.getHours() + 3);
        fechaHasta.setHours(fechaHasta.getHours() + 3);

      options.include.push({
          model: models.Operacion,
          as: 'operaciones',
          required: false,
          where: {
            createdAt:{
              [Op.gte]: fechaDesde,
              [Op.lte]: fechaHasta
            }
          },
          include:['cliente','usuario','servicio'],
          
          }
        );

        options.include.push({
          model: models.Movimiento,
          as: 'movimientos',
          required: false,
          where: {
            createdAt:{
              [Op.gte]: fechaDesde,
              [Op.lte]: fechaHasta
            }
          },
          include:['usuario'],
          
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
  