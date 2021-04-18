import mongoose from 'mongoose';

import CheapStore from '../interfaces/cheapStore.interface';
import { openHoursSchema } from './store.model';

const cargoSchema = new mongoose.Schema({
    _id: false,
    shoes: {
        type: Number,
        minlength: 3,
        maxlength: 24,
        required: true,
    }
})

const priceSchema = new mongoose.Schema({
    _id: false,
    monday: {
        cargoSchema
    },
    tuesday: {
        cargoSchema
    },
    wednesday: {
        cargoSchema
    },
    thursday: {
        cargoSchema
    },
    friday: {
        cargoSchema
    },
    saturday: {
        cargoSchema
    },
    sunday: {
        cargoSchema
    },
})

const historySchema = new mongoose.Schema({
    description: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    openHours: {
        openHoursSchema,
    },
    price: {
        priceSchema,
    },
    userName: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true,
    }
})

const cheapStoreSchema = new mongoose.Schema({
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    openHours: {
        openHoursSchema,
    },
    price: {
        priceSchema,
    },
    history: [
        historySchema,
    ]
})

const cheapStoreModel = mongoose.model<CheapStore & mongoose.Document>('CheapStore', cheapStoreSchema);

export default cheapStoreModel;