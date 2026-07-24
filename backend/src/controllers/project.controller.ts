import { Result } from "pg";
import { projectCreateModel } from "../models/project.model.js";
import  type { Request, Response} from "express"

export const projectCreateController = async (
    req: Request,
    res: Response
) =>{
    try {
        const {name, description, color, userId} = req.body
        const result = await projectCreateModel(name, description, color, userId)
        
        if(!result){
            return res.status(400).json({message: "Error no fue posible crear el proyecto"})
        }
        return res.status(200).json({message: "Proyecto creado con excito",
            result: result
        })

    } catch (error) {
        return res.status(500).json({message: "Error interno del servidor"})
    }
    
}