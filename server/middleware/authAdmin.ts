import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const authAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.adminInfo;
    if (!user.isAdmin) return res.status(StatusCodes.UNAUTHORIZED).send('This action is for admin only!');
    next();
}

export default authAdmin;