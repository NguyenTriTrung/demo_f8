const newsController = require('../controllers/NewsController');
const express = require('express');
const route = express.Router();
route.get('/', newsController.index);
module.exports = route;
