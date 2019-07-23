const express = require('express');
const contactController = require('../controllers/contact');

let router = express.Router();
router.post('/contact',contactController.create);
router.put('/contact/:id',contactController.update);
router.get('/contact/:id',contactController.getOne);
router.get('/contact',contactController.getAll);
router.delete('/contact/:id',contactController.delete);

module.exports = router;
