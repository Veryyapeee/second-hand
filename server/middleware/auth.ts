import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import jwt from 'jsonwebtoken';
import config from 'config';

const auth = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-auth-token') as string;
    if (!token)
        return res.status(StatusCodes.UNAUTHORIZED).send('Access denied. No token provided.');
    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.adminInfo = decoded;
        next();
    } catch (ex) {
        res.status(StatusCodes.BAD_REQUEST).send('Invalid token');
    }
}