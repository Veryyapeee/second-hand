const multer = require('multer');
import { v4 as uuidv4 } from 'uuid';
import express, { NextFunction, Request, Response } from 'express';

import createNewTown from '../src/town/endpoints/createTown';
import changeTownName from '../src/town/endpoints/changeTownName';
import changeTownRecruitingStatus from '../src/town/endpoints/changeTownRecruitingStatus';
import addCv from '../src/town/endpoints/addCv';

import getAllTowns from '../middleware/getAllTowns';
import getSingleTown from '../middleware/getSingleTown';

// Setup multer for CV file
const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) {
        callback(null, './static/upload/cv');
    },
    filename: function (req: Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
        const guId = uuidv4();
        callback(null, `${guId}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage });

export default class TownController {
    public path = `/town`;
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(this.path, getAllTowns, this.createTown);
        this.router.put(`${this.path}/:townId/changeName`, getAllTowns, this.changeTownName);
        this.router.put(`${this.path}/:townId/changeStatus`, this.changeTownRecruitingStatus);
        this.router.put(`${this.path}/:townId/addCv`, getSingleTown, upload.single('CV'), this.addCv);
    }

    createTown(req: Request, res: Response) {
        createNewTown(req, res);
    }

    changeTownName(req: Request, res: Response) {
        changeTownName(req, res);
    }

    changeTownRecruitingStatus(req: Request, res: Response) {
        changeTownRecruitingStatus(req, res)
    }

    addCv(req: Request, res: Response, next: NextFunction) {
        addCv(req, res);
    }
}