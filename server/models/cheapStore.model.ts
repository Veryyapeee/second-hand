import mongoose from 'mongoose';

import CheapStore from '../interfaces/cheapStore.interface';
import { openHoursSchema } from './store.model';

const cargoSchema = new mongoose.Schema({
    _id: false,
    shoes: {
        type: Number,
        required: true,
    },
    shirt: {
        type: Number,
        required: true,
    },
    socks: {
        type: Number,
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
        type: openHoursSchema,
        required: true
    },
    price: {
        type: cargoSchema,
        required: true
    }
})

const cheapStoreModel = mongoose.model<CheapStore & mongoose.Document>('CheapStore', cheapStoreSchema);

export default cheapStoreModel;