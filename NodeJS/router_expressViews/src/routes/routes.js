const express = require('express');
const homeController = require('../controllers/homeController');
const contatoController = require('../controllers/contatoController');

const route = express.Router();

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

route.get('/contato', contatoController.paginaContato);



module.exports = route;