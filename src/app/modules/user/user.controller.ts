import { Request, Response } from "express";
import { userService } from "./user.service";

const createCustomer = async (req: Request, res: Response) => {
    try {
        const data = req.body
        const result = await userService.createCustomer(data)
        res.status(200).send(result)
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null,
            error: err
        })
    }
}

export const userController = { createCustomer }