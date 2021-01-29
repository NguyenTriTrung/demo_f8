const courseController = require('../controllers/CourseController');
const express = require('express');
const router = express.Router();
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit',courseController.edit);
router.post('/handle-form-action/',courseController.handleFormAction)
router.patch('/:id/restored',courseController.restored);
router.delete('/:id/force',courseController.deleteForce);
router.put('/:id',courseController.update);
router.delete('/:id',courseController.destroy);
router.get('/:slug', courseController.show);

module.exports = router;
