const express = require('express');
const smsController = require("../controllers/sms");

let router = express.Router();
router.post('/sms',smsController.create);
router.put('/sms/:id',smsController.update);
router.get('/sms/:id',smsController.getOne);
router.get('/sms',smsController.getAll);
router.delete('/sms/:id',smsController.delete);

module.exports = router;
