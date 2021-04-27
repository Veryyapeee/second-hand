import express, { Request, Response } from 'express';

import authUser from '../src/admin/endpoints/authUser';

export default class AuthController {
    public path = '/login';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.post(this.path, this.authUser);
    }

    authUser(req: Request, res: Response) {
        authUser(req, res);
    }
}