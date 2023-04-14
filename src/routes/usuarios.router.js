const express=require('express');
const router=express.Router();
const UsuariosService = require('../services/usuarios.service');
const service = new UsuariosService();
const  {
  createUsuarioSchema,
  updateUsuarioSchema,
  getUsuarioSchema
  } = require('../schemas/usuario.schema');

  const validatorHandler = require('../middlewares/validator.handler');


  //find all
router.get('/',

async (req,res,next)=>{
  try{
    
  const usuario = await service.find();
  res.json(usuario);
  }catch(err){
    next(err);
  }
});
//find one
router.get('/:usuarioId',
validatorHandler(getUsuarioSchema, 'params'),
async (req,res,next)=>{
  try{
    const{usuarioId}=req.params;
  const usuario = await service.findOne(usuarioId);
  res.json(usuario);
  }catch(err){
    next(err);
  }
});
//create
router.post('/',
validatorHandler(createUsuarioSchema,'body'),
async (req, res) => {
  const body = req.body;
  const Newusuario = await service.create(body);
  res.json({
    message: 'created',
    data: Newusuario
  });
});
//update
router.patch('/:usuarioId',
validatorHandler(getUsuarioSchema,'params'),
validatorHandler(updateUsuarioSchema,'body'),
async (req, res,next) => {
  try{
    const { usuarioId } = req.params;
    const body = req.body;
    const cliUpdate = await service.update(usuarioId,body);
    res.json(cliUpdate);
  }
  catch(err){
    next(err);
  }
});
//delete
router.delete('/:usuarioId',
  validatorHandler(getUsuarioSchema,'params'),
  async(req, res,next) => {
  try{
    const { usuarioId } = req.params;
  const delClie = await service.delete(usuarioId);
  res.json(delClie);
  }catch(err){
    next(err);
  }
});

module.exports=router;
