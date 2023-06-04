const express=require('express');
const router=express.Router();
const loginService = require('../services/login.service');
const service = new loginService();
const  { signInSchema} = require('../schemas/login.schema');
const validatorHandler = require('../middlewares/validator.handler');

router.post('/signIn',
validatorHandler(signInSchema, 'body'),
async (req,res,next)=>{
  try{
    const body=req.body;
    console.log(body);
  const usuario = await service.signIn(body);
  res.json(usuario);
  }catch(err){
    next(err);
  }
});


module.exports=router;
