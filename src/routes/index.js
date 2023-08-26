const express = require('express');

const usuariosRouter = require('./usuarios.router');
const clientesRouter = require('./clientes.router');
const oficinasRouter = require('./oficinas.router');
const vehiculosRouter = require('./vehiculos.router');
const serviciosRouter = require('./servicios.router');
const operacionesRouter = require('./operaciones.router');
const movimientosRouter = require('./movimientos.router');
const loginRouter = require('./login.router');
const precioRouter = require('./precio.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/usuarios', usuariosRouter);
    router.use('/clientes', clientesRouter);
    router.use('/oficinas', oficinasRouter);
    router.use('/vehiculos', vehiculosRouter);
    router.use('/servicios', serviciosRouter);
    router.use('/operaciones', operacionesRouter);
    router.use('/movimientos', movimientosRouter);
    router.use('/login', loginRouter);
    router.use('/precios', precioRouter);
}
module.exports = routerApi;
