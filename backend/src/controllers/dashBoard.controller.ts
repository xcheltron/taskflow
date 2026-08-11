import type { Request, Response } from "express";

import { getTotalTask, projectCountModel } from "../models/dashBoard.model.js";


export const projectCountController = async (
    req: Request,
    res: Response
) => {
    try {
        const userId = Number(req.params.id)

        if (isNaN(userId)){
            return res.status(400).json({
                message: "id no valido"
            })
        }

        const result = await projectCountModel(userId)

        return res.status(200).json({
            message: "Conteo realizado con exito",
            result: result
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }
}

export const getTotalTaskController = async(
    req: Request,
    res: Response
) => {
    try {
        const userId = Number(req.params.id)
        console.log(userId)
        if (isNaN(userId)) return res.status(400).json({message: "id no valido"})

        const result = await getTotalTask(userId)

        return res.status(200).json({
            message: "Conteo realizado con exito",
            result: result
        })    
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }
}