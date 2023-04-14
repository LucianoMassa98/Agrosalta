const {models} = require('../libs/sequelize');
const boom = require('@hapi/boom');

class UsuariosService{
    async create(data){
      const dat = await models.Usuario.create(data);
      return dat;
    }
    async find(){
      const user  = await models.Usuario.findAll();
      if(!user){ throw boom.notFound('Usuario Not Found');}
      return user;
    }
    async findOne(id){
      const user  = await models.Usuario.findByPk(id);
      if(!user){ throw boom.notFound('Usuario Not Found');}
      return user;
    }
    async update(id, change){
      const user = await this.findOne(id);
      const rta = await user.update(change);
      return rta;
    }
    async delete(id){
      const user = await this.findOne(id);
      const rta = await user.destroy();
      return rta;
    }
  }
  module.exports = UsuariosService;
  