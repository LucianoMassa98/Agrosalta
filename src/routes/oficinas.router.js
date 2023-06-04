const express=require('express');
const router=express.Router();
const OficinasService = require('../services/oficinas.service');
const service = new OficinasService();
const  {
  createOficinaSchema,
  updateOficinaSchema,
  getOficinaSchema,
  queryOficinaSchema
  } = require('../schemas/oficina.schema');

  const validatorHandler = require('../middlewares/validator.handler');


  //find all
router.get('/',
validatorHandler(queryOficinaSchema, 'query'),
async (req,res,next)=>{
  try{
    const query = req.query;
  const oficina = await service.find(query);
  res.json(oficina);
  }catch(err){
    next(err);
  }
});
//find one
router.get('/:oficinaId',
validatorHandler(queryOficinaSchema, 'query'),
validatorHandler(getOficinaSchema, 'params'),
async (req,res,next)=>{
  try{
    const{oficinaId}=req.params;
    const query = req.query;
  const oficina = await service.findOne(oficinaId,query);
  res.json(oficina);
  }catch(err){
    next(err);
  }
});




//create
router.post('/',
validatorHandler(createOficinaSchema,'body'),
async (req, res,next) => {
  try{const body = req.body;
    const Newoficina = await service.create(body);
    res.json({
      message: 'created',
      data: Newoficina
    });}catch(err){ next(err);}
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
