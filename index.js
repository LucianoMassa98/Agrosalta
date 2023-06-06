const express = require('express');
const routerApi = require('./src/routes');
const cors = require('cors');

const app = express();
const {longError,errorHandler,ormErrorHandler,BoomErrorHandler}= require('./src/middlewares/error.handler');
const port = process.env.PORT || 3000;
app.use(express.json());

const whitelist = ['http://localhost:3000','http://agrosalta-production.up.railway.app'];
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




/*// definir la representación de fecha y hora en la zona horaria de Argentina
const formatoFechaHoraArgentina = new Intl.DateTimeFormat('es-ES', { timeZone: zonaHorariaArgentina });

// Obtener la hora actual del servidor
var horaActualServidor = new Date();

// Obtener la zona horaria del servidor
var zonaHorariaServidor = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log("Hora actual del servidor: " + horaActualServidor);
console.log("Zona horaria del servidor: " + zonaHorariaServidor)

 */




app.listen(port, ()=>{
  console.log('my port: '+port);
});
