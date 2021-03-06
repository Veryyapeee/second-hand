import express, { Request, Response } from 'express';

import createNewTown from '../src/town/endpoints/createTown';
import changeTownName from '../src/town/endpoints/changeTownName';
import changeTownRecruitingStatus from '../src/town/endpoints/changeTownRecruitingStatus';
import addCv from '../src/town/endpoints/addCv';
import removeCv from '../src/town/endpoints/removeCv';
import getTownInfo from '../src/town/endpoints/getTownInfo';
import getTowns from '../src/town/endpoints/getAllTowns';
import deleteTown from '../src/town/endpoints/deleteTown';

import getAllTowns from '../middleware/getAllTowns';
import getSingleTown from '../middleware/getSingleTown';

import authUser from '../middleware/auth';
import authAdmin from '../middleware/authAdmin';

import uploadCv from '../middleware/cvFile';
export default class TownController {
    public path = `/town`;
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(this.path, authUser, getAllTowns, this.createTown);
        this.router.get(this.path, getAllTowns, this.getTowns);
        this.router.get(`${this.path}/:townId`, getSingleTown, this.getTownInfo);
        this.router.put(`${this.path}/:townId/changeName`, authUser, getAllTowns, this.changeTownName);
        this.router.put(`${this.path}/:townId/changeStatus`, authUser, this.changeTownRecruitingStatus);
        this.router.put(`${this.path}/:townId/addCv`, getSingleTown, uploadCv.single('CV'), this.addCv);
        this.router.put(`${this.path}/:townId/removeCv`, authUser, getSingleTown, this.removeCv);
        this.router.delete(`${this.path}/:townId`, authUser, getSingleTown, this.deleteTown);
    }

    createTown(req: Request, res: Response) {
        createNewTown(req, res);
    }

    getTowns(req: Request, res: Response) {
        getTowns(req, res);
    }

    getTownInfo(req: Request, res: Response) {
        getTownInfo(req, res);
    }

    changeTownName(req: Request, res: Response) {
        changeTownName(req, res);
    }

    changeTownRecruitingStatus(req: Request, res: Response) {
        changeTownRecruitingStatus(req, res)
    }

    addCv(req: Request, res: Response) {
        addCv(req, res);
    }

    removeCv(req: Request, res: Response) {
        removeCv(req, res);
    }
    deleteTown(req: Request, res: Response) {
        deleteTown(req, res);
    }
}