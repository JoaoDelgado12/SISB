const express = require('express');
const emprestimoRouter = express.Router();
const EmprestimoController = require('../controller/server');

emprestimoRouter.get('/api/emprestimos', EmprestimoController.listarEmprestimos);
emprestimoRouter.post('/api/emprestimos', EmprestimoController.criarEmprestimo);
emprestimoRouter.post('/api/emprestimos/:id/devolver', EmprestimoController.devolverEmprestimo);
emprestimoRouter.post('/api/emprestimos/:id/renovar', EmprestimoController.renovarEmprestimo);

module.exports = emprestimoRouter;
