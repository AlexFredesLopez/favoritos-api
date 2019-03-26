'use strict'

var express = require('express');
var FavoritoController = require("../controllers/favorito");
var api = express.Router();

//RUTA PRODUCTOS
// api.get('/prueba/:nombre', FavoritoController.prueba);
api.get('/favoritos/:id', FavoritoController.getFavorito);
api.get('/favoritos', FavoritoController.getFavoritos);
api.post('/favorito', FavoritoController.saveFavoritos);
api.put('/favorito/:id', FavoritoController.updateFavorito);
api.delete('/favorito/:id', FavoritoController.deleteFavorito);
//RUTA PROVEEDORES


module.exports = api;