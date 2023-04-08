import { client } from '../index.js';
import { Products } from '../models/productModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getProdcts = catchAsync(async (req, res, next) => {
    const { _id } = req.query;
    const filter = {};
    if (filter) {
        filter._id = _id;
    }
    console.time('concatenation');

    const isProducts = await client.get('products');

    if (isProducts) {
        console.timeEnd('concatenation');

        return res.status(200).json({
            status: 'scuccess',
            data: JSON.parse(isProducts),
        });
    } else {
        console.time('concatenation');
        const products = await Products.find();

        await client.set('products', JSON.stringify(products));

        console.timeEnd('concatenation');

        return res.status(200).json({
            status: 'scuccess',
            data: products,
        });
    }
});
