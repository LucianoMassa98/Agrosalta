const boom = require('@hapi/boom');
function validatorHandler(schema, property){
return (req,res,next)=>{
  const data = req[property];

  console.log(data);
  const {error} = schema.validate(data);
  console.log("2");
  if(error){ 
   
    next(boom.badRequest(error));  }
  next();

}
}
module.exports = validatorHandler;
