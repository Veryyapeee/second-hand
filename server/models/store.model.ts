import mongoose from 'mongoose';

import Store, { StoreAddress } from '../interfaces/store.interface';

const addressSchema = new mongoose.Schema({
    _id: false,
    town: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true,
    },
    street: {
        type: String,
        minlength: 3,
        maxlength: 50,
    }
})

export const openHoursSchema = new mongoose.Schema({
    _id: false,
    monday: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    tuesday: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    wednesday: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    thursday: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    friday: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    saturday: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    sunday: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
})

const priceSchema = new mongoose.Schema({
    _id: false,
    monday: {
        type: Number,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    tuesday: {
        type: Number,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    wednesday: {
        type: Number,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    thursday: {
        type: Number,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    friday: {
        type: Number,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    saturday: {
        type: Number,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    sunday: {
        type: Number,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
})

export const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    photo: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    }
})

const historySchema = new mongoose.Schema({
    _id: false,
    userName: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    name: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true,
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    address: {
        type: addressSchema,
        required: true,
    },
    contact: {
        type: String,
        minlength: 5,
        maxlength: 24,
        required: true,
    },
    openHours: {
        type: openHoursSchema,
        required: true,
    },
    suppDay: {
        type: String,
        minlength: 3,
        maxlength: 24,
    },
    price: {
        type: priceSchema,
        required: true,
    },
    news: [newsSchema],
    gallery: {
        type: [String],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true,
    }
})

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true,
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    address: {
        type: addressSchema,
        required: true,
    },
    contact: {
        type: String,
        minlength: 5,
        maxlength: 24,
        required: true,
    },
    openHours: {
        type: openHoursSchema,
        required: true,
    },
    suppDay: {
        type: String,
        minlength: 3,
        maxlength: 24,
    },
    price: {
        type: priceSchema,
        required: true,
    },
    news: [newsSchema],
    gallery: {
        type: [String],
        required: true,
    },
    history: [
        historySchema
    ]
})

const storeModel = mongoose.model<Store & mongoose.Document>('Store', storeSchema);
export default storeModel;