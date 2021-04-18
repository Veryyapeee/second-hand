import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const updateGallery = async (req: Request, res: Response) => {
    // Get files paths
    const files: any = req.files;
    const filePaths: string[] = files.map((file: Express.Multer.File) => file.path);
}

export default updateGallery;