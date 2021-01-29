const meController = require('../controllers/MeController');
const express = require('express');
const router = express.Router();
router.get('/stored/courses', meController.show);
router.get('/trash/courses', meController.showTrash);
module.exports = router;
