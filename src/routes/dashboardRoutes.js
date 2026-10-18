const express = require('express');
const dashboardRouter = express.Router();
const dashboardController = require('../../js/model/apiModel');

dashboardRouter.get('/api/estatisticas', dashboardController.getEstatisticas);
dashboardRouter.get('/api/emprestimos', dashboardController.getEmprestimos);

module.exports = dashboardRouter;