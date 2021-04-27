import mongoose from "mongoose";

export interface AdminLogin {
    email: string;
    password: string;
}

export interface AdminPassword {
    oldPassword: string,
    password: string,
    confirmPassword: string
}
export default interface Admin extends mongoose.Document {
    _id: String;
    name: string;
    email: string;
    password: string;
    isAdmin: Boolean;
    generateAuthToken(): string;
}