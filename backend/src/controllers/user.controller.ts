//importar model
import { createUserModel } from "../models/user.model.js";
import type { Request, Response } from "express";

import bcrypt from "bcrypt"
import "dotenv/config"

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS)

async function hasshedPassword(password:string):Promise<string> {
    return await bcrypt.hash(password, SALT_ROUNDS)
}

export const registerUser = async (
    req: Request,
    res: Response ) =>{
    const { email, password, name} = req.body;
    try {
        //encriptar contraseña
        const newPassword = await hasshedPassword(password)
        const result = await createUserModel(email, newPassword, name)
        console.log(result)
        res.json(result)
    } catch (error) {
        console.error(error)

        res.status(500).json({
            message: "Internal server error"
        })
    }
}
