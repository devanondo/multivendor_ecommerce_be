import { Schema, model } from 'mongoose'

const ExampleSchema = new Schema(
    {
        title: String,
    },
    { timestamps: true }
)

export const Example = model('Example', ExampleSchema)
