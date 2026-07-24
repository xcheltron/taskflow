//importar model
import { createUserModel } from "../models/user.model.js";
import type { Request, Response } from "express";

export const registerUser = async (
    req: Request,
    res: Response ) =>{
    const { email, password, name} = req.body;
    try {
        const result = await createUserModel(email, password, name)
        console.log(result)
        res.json(result)
    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: "Internal server error"
        })
    }
}
