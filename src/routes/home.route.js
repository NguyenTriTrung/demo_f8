const homeController = require('../controllers/HomeController');
const express = require('express');
const router = express.Router();
router.get('/', homeController.index);
module.exports = router;
