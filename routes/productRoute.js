import { Router } from 'express';
import { getProdcts } from '../controller/productController.js';

const router = Router();

router.get('/', getProdcts);

export const productRouter = router;
