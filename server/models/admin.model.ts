import mongoose from 'mongoose';
import config from "config";
import jwt from "jsonwebtoken"

import Admin from '../interfaces/admin.interface';

const adminSchema = new mongoose.Schema<Admin>({
    name: {
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
    password: {
        type: String,
        minlength: 8,
        maxlength: 255,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
})

adminSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, name: this.name, isAdmin: this.isAdmin },
        config.get('jwtPrivateKey')
    );
    return token;
}

const adminModel = mongoose.model<Admin & mongoose.Document>('Admin', adminSchema);

export default adminModel;