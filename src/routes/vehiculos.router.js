const express=require('express');
const router=express.Router();
const VehiculosService = require('../services/vehiculos.service');
const service = new VehiculosService();
const  {
  createVehiculoSchema,
  updateVehiculoSchema,
  getVehiculoSchema
  } = require('../schemas/vehiculo.schema');

  const validatorHandler = require('../middlewares/validator.handler');


  //find all
router.get('/',
async (req,res,next)=>{
  try{
    
  const vehiculo = await service.find();
  res.json(vehiculo);
  }catch(err){
    next(err);
  }
});
//find one
router.get('/:vehiculoId',
validatorHandler(getVehiculoSchema, 'params'),
async (req,res,next)=>{
  try{
    const{vehiculoId}=req.params;
  const vehiculo = await service.findOne(vehiculoId);
  res.json(vehiculo);
  }catch(err){
    next(err);
  }
});
//create
router.post('/',
validatorHandler(createVehiculoSchema,'body'),
async (req, res,next) => {
  try{const body = req.body;
    const Newvehiculo = await service.create(body);
    res.json({
      message: 'created',
      data: Newvehiculo
    });}catch(err){next(err);}
});
//update
router.patch('/:vehiculoId',
validatorHandler(getVehiculoSchema,'params'),
validatorHandler(updateVehiculoSchema,'body'),
async (req, res,next) => {
  try{
    const { vehiculoId } = req.params;
    const body = req.body;
    const cliUpdate = await service.update(vehiculoId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});
//delete
router.delete('/:vehiculoId',
  validatorHandler(getVehiculoSchema,'params'),
  async(req, res,next) => {
  try{
    const { vehiculoId } = req.params;
  const delClie = await service.delete(vehiculoId);
  res.json(delClie);
  }catch(err){
    next(err);
  }
});

module.exports=router;
