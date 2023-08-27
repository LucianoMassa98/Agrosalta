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
        include: [],
        where:{}
      };
      const {desde,hasta} = query;
      if(desde && hasta){
        const fechaDesde = new Date(desde);
        const fechaHasta = new Date(hasta);
        fechaDesde.setHours(fechaDesde.getHours() + 3);
        fechaHasta.setHours(fechaHasta.getHours() + 3);
        options.where.createdAt={
          [Op.gte]: fechaDesde,
          [Op.lte]: fechaHasta
        }
      }
      const {pendiente}=query;
      if(pendiente){
        options.required=false;
        const fechaActual = new Date()
        options.where={
            hasta: {
            [Op.lte]: fechaActual,
            },
        }
        options.include.push('cliente');
        options.include.push({
          model: models.ClienteVehiculo,
          as: 'clienteVehiculo',
          include:['vehiculo']
        });
        options.include.push('servicio');
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
    async findOne(id,query){

      const options = {
        include:['servicio','clienteVehiculo']
      }
     
      
      const ope  = await models.Operacion.findByPk(id,options);
      if(!ope){ throw boom.notFound('Operacion Not Found');}
      return ope;
    }
    async update(id, change){
      
      const ope = await this.findOne(id,{});
      const rta = await ope.update(change);
      return rta;
    }
    async delete(id){

      const ope = await this.findOne(id,{});
      const rta = await ope.destroy();
      return rta;
    }

    async comprobar(clienteId,servicioId,clienteVehiculoId){
        console.log(clienteId +" -- "+ servicioId+ " -- "+clienteVehiculoId);
      const operacion = await models.Operacion.findOne({
        where:{
          clienteId: clienteId,
          servicioId: servicioId,
          clienteVehiculoId: clienteVehiculoId
        }
      });

      if(!operacion){throw boom.notFound("Operacion no encontrada");}

      return operacion;

    }
  }
  module.exports = OperacionesService;
  