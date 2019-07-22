import express from 'express';
import smsController from "../controllers/sms";

const router = express.Router();
router.post('/sms',smsController.create);
router.put('/sms/:id',smsController.update);
router.get('/sms/:id',smsController.getOne);
router.get('/sms',smsController.getAll);
router.delete('/sms/:id',smsController.getOne);
export default router;
