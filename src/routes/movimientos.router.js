const express=require('express');
const router=express.Router();
const MovimientosService = require('../services/movimientos.service');
const service = new MovimientosService();
const  {
  createMovimientoSchema,
  updateMovimientoSchema,
  getMovimientoSchema,
  queryMovimientoSchema
  } = require('../schemas/movimiento.schema');

  const validatorHandler = require('../middlewares/validator.handler');


  //find 
  router.get('/',
validatorHandler(queryMovimientoSchema, 'query'),
async (req,res,next)=>{
  try{
  const operacion = await service.find(req.query);
  res.json(operacion);
  }catch(err){
    next(err);
  }
});
//find one
router.get('/:movimientoId',
validatorHandler(getMovimientoSchema, 'params'),
async (req,res,next)=>{
  try{
    const{movimientoId}=req.params;
  const operacion = await service.findOne(movimientoId);
  res.json(operacion);
  }catch(err){
    next(err);
  }
});
//create
router.post('/',
validatorHandler(createMovimientoSchema,'body'),
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
router.patch('/:movimientoId',
validatorHandler(getMovimientoSchema,'params'),
validatorHandler(updateMovimientoSchema,'body'),
async (req, res,next) => {
  try{
    const { movimientoId } = req.params;
    const body = req.body;
    const cliUpdate = await service.update(movimientoId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});
//delete
router.delete('/:movimientoId',
  validatorHandler(getMovimientoSchema,'params'),
  async(req, res,next) => {
  try{
    const { movimientoId } = req.params;
  const delClie = await service.delete(movimientoId);
  res.json(delClie);
  }catch(err){
    next(err);
  }
});

module.exports=router;
