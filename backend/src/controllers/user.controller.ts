//importar model
import { createUserModel } from "../models/user.model.js";
import { loginUserModel } from "../models/user.model.js";
import type { Request, Response } from "express";

import bcrypt from "bcrypt"
import "dotenv/config"

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS)

async function hasshedPassword(password:string):Promise<string> {
    return await bcrypt.hash(password, SALT_ROUNDS)
}

async function comparePassword(password:string, passwordhash:string):Promise<boolean> {
    return bcrypt.compare(password, passwordhash)
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

export const loginUser = async (
    req: Request,
    res: Response
) => {
    const {email, password} = req.body
    try {
        //llamaos al modelo de usario para hacer una consulta del email y la contraseña
        const user = await loginUserModel(email)

        if (user == null) {
            return res.status(404).json(
                {message: "Usuario no encontrado"}
            )
        }
        //llamamos a un metodo que verifique la contraseña
        const isvalid = await comparePassword(password, user.password)

        if (!isvalid) {
            return res.status(401).json({
                message: "contraseña incorrecta"
            })}

        return res.status(200).json({
            message: "Usuario encontrado",
            usuario: {id: user.id, email: user.email, name: user.name}
        })
    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor"})
    }
}
