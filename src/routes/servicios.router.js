const express=require('express');
const router=express.Router();
const ServiciosService = require('../services/servicios.service');
const service = new ServiciosService();
const  {
  createServicioSchema,
  updateServicioSchema,
  getServicioSchema,
  AddValorServicioSchema,
  SubValorServicioSchema
  } = require('../schemas/servicio.schema');

  const validatorHandler = require('../middlewares/validator.handler');


  //find all
router.get('/',
async (req,res,next)=>{
  try{
    
  const servicio = await service.find();
  res.json(servicio);
  }catch(err){
    next(err);
  }
});
//find one
router.get('/:servicioId',
validatorHandler(getServicioSchema, 'params'),
async (req,res,next)=>{
  try{
    const{servicioId}=req.params;
  const servicio = await service.findOne(servicioId);
  res.json(servicio);
  }catch(err){
    next(err);
  }
});
//create
router.post('/',
validatorHandler(createServicioSchema,'body'),
async (req, res,next) => {
 try{
  const body = req.body;
  const Newservicio = await service.create(body);
  res.json({
    message: 'created',
    data: Newservicio
  });
 }catch(err){next(err);}
});

router.post('/addValor',
validatorHandler(AddValorServicioSchema,'body'),
async (req, res,next) => {
 try{
  const body = req.body;
  const Newservicio = await service.addServicioValor(body);
  res.json({
    message: 'created',
    data: Newservicio
  });
 }catch(err){next(err);}
});
//update
router.patch('/:servicioId',
validatorHandler(getServicioSchema,'params'),
validatorHandler(updateServicioSchema,'body'),
async (req, res,next) => {
  try{
    const { servicioId } = req.params;
    const body = req.body;
    const cliUpdate = await service.update(servicioId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});
//delete
router.delete('/:servicioId',
  validatorHandler(getServicioSchema,'params'),
  async(req, res,next) => {
  try{
    const { servicioId } = req.params;
  const delClie = await service.delete(servicioId);
  res.json(delClie);
  }catch(err){
    next(err);
  }
});

router.delete('/subValor/:servicioValorId',
  validatorHandler(SubValorServicioSchema,'params'),
  async(req, res,next) => {
  try{
    const { servicioValorId } = req.params;
  const delClie = await service.subServicioValor(servicioValorId);
   res.json(delClie);
  }catch(err){
    next(err);
  }
});

module.exports=router;
