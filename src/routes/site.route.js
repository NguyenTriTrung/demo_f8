const siteController = require('../controllers/SiteController');
const router = require('express').Router();
router.get('/:slug', siteController.show);
router.get('/', siteController.search);
module.exports = router;
