/* eslint-disable no-unused-vars */
import { Example } from '../models/exampleModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getExample = catchAsync(async (req, res, next) => {
    const { id } = req.query;
    const filter = {};

    if (id) {
        filter._id = id;
    }

    const example = await Example.find(filter).lean().sort({ createdAt: -1 });

    res.status(200).json({
        status: 'success',
        data: example,
    });
});
