const express=require('express');
const router=express.Router();
const OperacionesService = require('../services/operaciones.service');
const service = new OperacionesService();
const  {
  createOperacionSchema,
  updateOperacionSchema,
  getOperacionSchema,
  queryOperacionSchema
  } = require('../schemas/operacion.schema');

  const validatorHandler = require('../middlewares/validator.handler');
 

  //find 
router.get('/',
validatorHandler(queryOperacionSchema, 'query'),
async (req,res,next)=>{
  try{
    
  const operacion = await service.find(req.query);
  res.json(operacion);
  }catch(err){
    next(err);
  }
});
//find one
router.get('/:operacionId',
validatorHandler(queryOperacionSchema, 'query'),
validatorHandler(getOperacionSchema, 'params'),
async (req,res,next)=>{
  try{
    const{operacionId}=req.params;
    const query = req.query;
  const operacion = await service.findOne(operacionId,query);
  res.json(operacion);
  }catch(err){
    next(err);
  }
});
//create
router.post('/',
validatorHandler(createOperacionSchema,'body'),
async (req, res,next) => {
  try{
    
    const body = req.body;
    const Newoperacion = await service.create(body);
    res.json({
      message: 'created',
      data: Newoperacion
    });
  }catch(err){
    next(err);
  }
});
//update
router.patch('/:operacionId',
validatorHandler(getOperacionSchema,'params'),
validatorHandler(updateOperacionSchema,'body'),
async (req, res,next) => {
  try{
    const { operacionId } = req.params;
    const body = req.body;
    console.log("--------->");
    const cliUpdate = await service.update(operacionId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});

//update 2
router.put('/:operacionId',
validatorHandler(getOperacionSchema,'params'),
validatorHandler(updateOperacionSchema,'body'),
async (req, res,next) => {
  try{
    const { operacionId } = req.params;
    const body = req.body;
    console.log("--------->");
    const cliUpdate = await service.update(operacionId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});
//delete
router.delete('/:operacionId',
  validatorHandler(getOperacionSchema,'params'),
  async(req, res,next) => {
  try{
    const { operacionId } = req.params;
  const delClie = await service.delete(operacionId);
  res.json(delClie);
  }catch(err){
    next(err);
  }
});

//comprobar
router.get('/:clienteId/:servicioId/clienteVehiculoId',
validatorHandler(getCompararSchema, 'params'),
async (req,res,next)=>{
  try{
    const{clienteId,servicioId,clienteIdVehiculoId}=req.params;
  const servicio = await service.comprobar(clienteId,servicioId,clienteIdVehiculoId);
  res.json(servicio);
  }catch(err){
    next(err);
  }
});

module.exports=router;
