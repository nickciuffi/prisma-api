import express from 'express';
import typesController from '../controllers/typesController';

const router = express.Router();

router.get('/', typesController.index);
router.post('/', typesController.insert);
router.get('/:id', typesController.get);
router.delete('/:id', typesController.delete);
router.put('/:id', typesController.update);

export default router;
