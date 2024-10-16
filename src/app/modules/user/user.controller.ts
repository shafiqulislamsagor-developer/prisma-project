import { Request, Response } from "express";
import { userService } from "./user.service";

const createCustomer = async (req: Request, res: Response) => {
    const data = req.body
    const result = await userService.createCustomer(data)
    res.status(200).send(result)
}

export const userController = { createCustomer }