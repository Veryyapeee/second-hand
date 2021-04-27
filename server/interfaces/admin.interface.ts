import mongoose from "mongoose";

export default interface Admin extends mongoose.Document {
    _id: String;
    name: string;
    email: string;
    password: string;
    isAdmin: Boolean;
    generateAuthToken(): string;
}