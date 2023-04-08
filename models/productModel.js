import { Schema, model } from 'mongoose';

const productSchema = new Schema(
    {
        description: String,
        url: String,
        price: Number,
        rating: String,
        review_count: Number,
        img_url: String,
    },
    { timestamp: true }
);

export const Products = model('products', productSchema);
