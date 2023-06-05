const express = require('express');
const routerApi = require('./src/routes');
const cors = require('cors');

const app = express();
const {longError,errorHandler,ormErrorHandler,BoomErrorHandler}= require('./src/middlewares/error.handler');
const port = process.env.PORT || 3000;
app.use(express.json());

const whitelist = ['http://localhost:3000','https://agrosalta-production.up.railway.app/api/v1/vehiculos'];
const options = {
  origin: (origin,callback)=>{
    if(whitelist.includes(origin) || !origin){
      callback(null,true);
    }else{
      callback(new Error('acceso no permitido'));
    }
  }
}

app.use(cors(options));
routerApi(app);

app.use(longError);
app.use(ormErrorHandler);
app.use(BoomErrorHandler);
app.use(errorHandler);


app.listen(port, ()=>{
  console.log('my port: '+port);
});
