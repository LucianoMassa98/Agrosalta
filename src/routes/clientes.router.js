const express=require('express');
const router=express.Router();
const ClientesService = require('../services/clientes.service');
const service = new ClientesService();
const  {
  createClienteSchema,
  updateClienteSchema,
  getClienteSchema,
  createClienteVehiculoSchema,
  getClienteVehiculoSchema
  } = require('../schemas/cliente.schema');

const validatorHandler = require('../middlewares/validator.handler');


  //find one
router.get('/',

async (req,res,next)=>{
  try{
    
  const cliente = await service.find();
  res.json(cliente);
  }catch(err){
    next(err);
  }
}); 
//find one
router.get('/:clienteId',
validatorHandler(getClienteSchema, 'params'),
async (req,res,next)=>{
  try{
    const{clienteId}=req.params;
  const cliente = await service.findOne(clienteId);
  res.json(cliente);
  }catch(err){
    next(err);
  }
});
//create
router.post('/',
validatorHandler(createClienteSchema,'body'),
async (req, res,next) => {
  try{const body = req.body;
    const Newcliente = await service.create(body);
    res.json({
      message: 'created',
      data: Newcliente
    });}catch(err){
      next(err);
    }
});
//update
router.patch('/:clienteId',
validatorHandler(getClienteSchema,'params'),
validatorHandler(updateClienteSchema,'body'),
async (req, res,next) => {
  try{
    const { clienteId } = req.params;
    const body = req.body;
    const cliUpdate = await service.update(clienteId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});

//update 2
router.put('/:clienteId',
validatorHandler(getClienteSchema,'params'),
validatorHandler(updateClienteSchema,'body'),
async (req, res,next) => {
  try{
    const { clienteId } = req.params;
    const body = req.body;
    const cliUpdate = await service.update(clienteId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});
//delete
router.delete('/:clienteId',
  validatorHandler(getClienteSchema,'params'),
  async(req, res,next) => {
  try{
    const { clienteId } = req.params;
  const delClie = await service.delete(clienteId);
  res.json(delClie);
  }catch(err){
    next(err);
  }
});



//find one CKIENTE-VEHICULO
router.get('/vehiculo/:clienteId',
validatorHandler(getClienteSchema, 'params'),
async (req,res,next)=>{
  try{
    const{clienteId}=req.params;
  const cliente = await service.findVehiculos(clienteId);
  res.json(cliente);
  }catch(err){
    next(err);
  }
});
//create CKIENTE-VEHICULO
router.post('/vehiculo',
validatorHandler(createClienteVehiculoSchema,'body'),
async (req, res,next) => {
  try{
    const body = req.body;
    const Newcliente = await service.createVehiculo(body);
    res.json({
      message: 'created',
      data: Newcliente
    }); 
  }catch(err){
    next(err);
  }
}); 

//delete CKIENTE-VEHICULO
router.delete('/vehiculo/:clienteVehiculoId',
  validatorHandler(getClienteVehiculoSchema,'params'),
  async(req, res,next) => {
  try{
    const { clienteVehiculoId } = req.params;
  const delClie = await service.deleteVehiculo(clienteVehiculoId);
  res.json(delClie);
  }catch(err){
    next(err);
  }
});

module.exports=router;
