const express=require('express');
const router=express.Router();
const PreciosService = require('../services/precios.service');
const service = new PreciosService();

const  {
  createPrecioSchema,
  getPrecioSchema,
  updatePrecioSchema
  } = require('../schemas/precio.schema');

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






//create
router.post('/',
validatorHandler(createPrecioSchema,'body'),
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




//update
router.put('/:precioId',
validatorHandler(getPrecioSchema,'params'),
validatorHandler(updatePrecioSchema,'body'),
async (req, res,next) => {
  try{
    const { precioId } = req.params;
    const body = req.body;
    const cliUpdate = await service.update(precioId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});
//delete
router.delete('/:precioId',
  validatorHandler(getPrecioSchema,'params'),
  async(req, res,next) => {
  try{
    const { precioId } = req.params;
  const delClie = await service.delete(precioId);
  res.json(delClie);
  }catch(err){
    next(err);
  }
});



module.exports=router;
