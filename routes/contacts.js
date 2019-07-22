import express from 'express';
import contactController from '../controllers/contact';

const router = express.Router();
router.post('/contact',contactController.create);
router.put('/contact/:id',contactController.create);
router.get('/contact/:id',contactController.getOne);
router.get('/contact',contactController.getAll);
router.delete('/contact/:id',contactController.delete);
export default router;
