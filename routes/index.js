import { Router } from 'express';
import { exampleRoute } from './exampleRoute.js';
import { productRouter } from './productRoute.js';

const router = Router();

router.use('/demo', exampleRoute);

// Products routes
router.use('/products', productRouter);

export default router;
