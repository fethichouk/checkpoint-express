const express  = require('express');
const { home, services, contact } = require('../controllers/controller');
const { workHours } = require('../middlewares/workHours');

const Route = express.Router();

Route.get('/Home',workHours,home)
Route.get('/Services',workHours,services)
Route.get('/Contact ',workHours,contact )



module.exports = Route