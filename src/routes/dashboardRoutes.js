const express = require('express');
const dashboardRouter = express.Router();

const DashboardController = require('../controller/server');

dashboardRouter.get('/api/estatisticas', DashboardController.getEstatisticas);
dashboardRouter.get('/api/emprestimos', DashboardController.getEmprestimos);

module.exports = dashboardRouter;
