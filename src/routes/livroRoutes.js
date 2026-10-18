const express = require('express');
const livroRouter = express.Router();
const LivroController = require('../controller/server');

livroRouter.get('/api/livros', LivroController.listarLivros);
livroRouter.get('/api/livros/:id', LivroController.buscarPorId);
livroRouter.post('/api/livros', LivroController.cadastrarLivro);

module.exports = livroRouter;
