const express = require('express');
const usuarioRouter = express.Router();
const UsuarioController = require('../controller/server');

usuarioRouter.get('/api/usuarios', UsuarioController.listarUsuarios);
usuarioRouter.post('/api/usuarios', UsuarioController.cadastrarUsuario);

module.exports = usuarioRouter;
