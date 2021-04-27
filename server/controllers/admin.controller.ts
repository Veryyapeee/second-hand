import express, { Request, Response } from 'express';

import createNewUser from '../src/admin/endpoints/createAdmin';
import changePassword from '../src/admin/endpoints/changePassword';
import getUserMe from '../src/admin/endpoints/getUserMe';
import getAllUsers from '../src/admin/endpoints/getAllUsers';

import authUser from '../middleware/auth';

export default class AdminController {
    public path = '/users';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(this.path, this.createNewUser);
        this.router.put(`${this.path}/changePassword`, authUser, this.changePassword);
        this.router.get(this.path, authUser, this.getUserMe);
        this.router.get(`${this.path}/allUsers`, authUser, this.getAllUsers);
    }

    createNewUser(req: Request, res: Response) {
        createNewUser(req, res);
    }
    changePassword(req: Request, res: Response) {
        changePassword(req, res);
    }
    getUserMe(req: Request, res: Response) {
        getUserMe(req, res);
    }
    getAllUsers(req: Request, res: Response) {
        getAllUsers(req, res);
    }
}