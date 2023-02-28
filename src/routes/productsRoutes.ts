import express from 'express';
import productsController from '../controllers/productsController';

const router = express.Router();

router.get('/', productsController.index);
router.get('/:id', productsController.get);
router.post('/', productsController.insert);
router.delete('/:id', productsController.delete);
router.put('/:id', productsController.update);

export default router;
