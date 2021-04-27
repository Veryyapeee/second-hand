import express, { Request, Response } from 'express';

import createNewUser from '../src/admin/endpoints/createAdmin';

export default class AdminController {
    public path = '/users';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(this.path, this.createNewUser);
    }

    createNewUser(req: Request, res: Response) {
        createNewUser(req, res);
    }
}