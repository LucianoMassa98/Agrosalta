const {models} = require('../libs/sequelize');
const boom = require('@hapi/boom');
const { Op } = require('sequelize');
 
class ClientesService {
  async create(data) {
    const dat = await models.Cliente.create(data);
    return dat;
  }
  async createVehiculo(data) {
    const dat = await models.ClienteVehiculo.create(data);
    return dat;
  }
  async find() {
    const cli = await models.Cliente.findAll();
    if (!cli) {
      throw boom.notFound("Cliente Not Found");
    }
    return cli;
  }
  async findVehiculos(clienteId) {
    const cli = await models.Cliente.findByPk(clienteId, {
      include: ["items"],
      // buscar dentro de VentaProducto todos los
    });

    //const cli  = await models.ClienteVehiculo.findAll();
    if (!cli) {
      throw boom.notFound("ClienteVehiculo Not Found");
    }
    return cli;
  }
  async findOne(id) {
    const clies = await models.Cliente.findByPk(id, {
      include: [
        { model: models.Vehiculo, as: "items" },
        {
          model: models.Operacion,
          as: "operaciones",
          include: [
            "servicio",
            {
              model: models.ClienteVehiculo,
              as: "clienteVehiculo",
              include: ["vehiculo"],
            },
          ],
        },
      ],
    });
    if (!clies) {
      throw boom.notFound("cliente Not Found");
    }
    return clies;
  }
  async update(id, change) {
    const cliente = await this.findOne(id);
    const rta = await cliente.update(change);
    return rta;
  }
  async delete(id) {
    const cliente = await this.findOne(id);
    const rta = await cliente.destroy();
    return rta;
  }
  async deleteVehiculo(id) {
    const clienteVehiculo = await models.ClienteVehiculo.findByPk(id);
    const rta = await clienteVehiculo.destroy();
    return rta;
  }
  async calcular(id){
    const vehiculo = await models.ClienteVehiculo.findByPk(id);
    if(!vehiculo){throw boom.notFound("Vehiculo del cliente no encontrado");}

    const fechaModelo = new Date(vehiculo.año, 0, 31);
    console.log(fechaModelo);
    const precio = await models.ServicioValor.findOne({
      where:{
        desde: {
        [Op.lte]: fechaModelo
        },
        hasta:{
        [Op.gte]: fechaModelo
        },
        carroceria: vehiculo.carroceria,
        tipo: vehiculo.tipo
      }
    });

    if(!precio){ throw boom.notFound("No hay precio disponible para este vehiculo");}
    return precio;
  }
}
  module.exports = ClientesService;
  