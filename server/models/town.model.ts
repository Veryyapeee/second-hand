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
    cv: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
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
        cvSchema
    ]
})

const townModel = mongoose.model<Town & mongoose.Document>('Town', townSchema);
export default townModel;