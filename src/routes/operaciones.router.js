const express=require('express');
const router=express.Router();
const OperacionesService = require('../services/operaciones.service');
const service = new OperacionesService();
const  {
  createOperacioneSchema,
  updateOperacioneSchema,
  getOperacioneSchema
  } = require('../schemas/operacion.schema');

  const validatorHandler = require('../middlewares/validator.handler');


  //find one
router.get('/',
validatorHandler(getOperacioneSchema, 'params'),
async (req,res,next)=>{
  try{
    
  const operacion = await service.find();
  res.json(operacion);
  }catch(err){
    next(err);
  }
});
//find one
router.get('/:operacionId',
validatorHandler(getOperacioneSchema, 'params'),
async (req,res,next)=>{
  try{
    const{operacionId}=req.params;
  const operacion = await service.findOne(operacionId);
  res.json(operacion);
  }catch(err){
    next(err);
  }
});
//create
router.post('/',
validatorHandler(createOperacioneSchema,'body'),
async (req, res) => {
  const body = req.body;
  const Newoperacion = await service.create(body);
  res.json({
    message: 'created',
    data: Newoperacion
  });
});
//update
router.patch('/:operacionId',
validatorHandler(getOperacioneSchema,'params'),
validatorHandler(updateOperacioneSchema,'body'),
async (req, res,next) => {
  try{
    const { operacionId } = req.params;
    const body = req.body;
    const cliUpdate = await service.update(operacionId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});
//delete
router.delete('/:operacionId',
  validatorHandler(getOperacioneSchema,'params'),
  async(req, res,next) => {
  try{
    const { operacionId } = req.params;
  const delClie = await service.delete(operacionId);
  res.json(delClie);
  }catch(err){
    next(err);
  }
});

module.exports=router;
