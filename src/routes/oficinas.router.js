const express=require('express');
const router=express.Router();
const OficinasService = require('../services/oficinas.service');
const service = new OficinasService();
const  {
  createOficinaSchema,
  updateOficinaSchema,
  getOficinaSchema
  } = require('../schemas/oficina.schema');

  const validatorHandler = require('../middlewares/validator.handler');


  //find one
router.get('/',
async (req,res,next)=>{
  try{
    
  const oficina = await service.find();
  res.json(oficina);
  }catch(err){
    next(err);
  }
});
//find one
router.get('/:oficinaId',
validatorHandler(getOficinaSchema, 'params'),
async (req,res,next)=>{
  try{
    const{oficinaId}=req.params;
  const oficina = await service.findOne(oficinaId);
  res.json(oficina);
  }catch(err){
    next(err);
  }
});
//create
router.post('/',
validatorHandler(createOficinaSchema,'body'),
async (req, res) => {
  const body = req.body;
  const Newoficina = await service.create(body);
  res.json({
    message: 'created',
    data: Newoficina
  });
});
//update
router.patch('/:oficinaId',
validatorHandler(getOficinaSchema,'params'),
validatorHandler(updateOficinaSchema,'body'),
async (req, res,next) => {
  try{
    const { oficinaId } = req.params;
    const body = req.body;
    const cliUpdate = await service.update(oficinaId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});
//delete
router.delete('/:oficinaId',
  validatorHandler(getOficinaSchema,'params'),
  async(req, res,next) => {
  try{
    const { oficinaId } = req.params;
  const delClie = await service.delete(oficinaId);
  res.json(delClie);
  }catch(err){
    next(err);
  }
});

module.exports=router;
