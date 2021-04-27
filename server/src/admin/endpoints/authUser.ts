import _ from "lodash";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { Response, Request } from "express";
import adminModel from "../../../models/admin.model";
import validateAuthUser from "../validation/validateAuthUser";

const authUser = async (req: Request, res: Response) => {
    // Validate data
    const { error } = validateAuthUser(req.body);
    if (error)
        return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Check if user exists
    let user = await adminModel.findOne({ email: req.body.email });
    if (!user)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .send("Invalid email or password.");

    //   Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .send("Invalid email or password.");

    // Send token
    const id = user._id;
    const token = user.generateAuthToken();
    res.status(StatusCodes.OK).send({ token, id });
}

export default authUser;