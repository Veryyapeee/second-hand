import mongoose from "mongoose";

import Town from '../interfaces/town.interface';

const shopInTownSchema = new mongoose.Schema({
    _id: false,
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true,
    }
})

const cvSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    lastName: {
        type: String,
        minlength: 3,
        maxlength: 24,
        required: true,
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true,
    },
    cv: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    }
})

const historySchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    shops: [
        shopInTownSchema
    ],
    recruiting: {
        type: Boolean,
        required: true,
    },
    cv: [
        cvSchema,
    ],
    user: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    }
})

const townSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
    },
    shops: [
        shopInTownSchema
    ],
    recruiting: {
        type: Boolean,
        required: true,
    },
    cv: [
        cvSchema,
    ],
    history: [
        historySchema,
    ]
})

const townModel = mongoose.model<Town & mongoose.Document>('Town', townSchema);
export default townModel;