import { projectCreateModel } from "../models/project.model.js";
import { projectSearchModel } from "../models/project.model.js";
import { projectUpdateModel } from "../models/project.model.js";
import { projectDeleteModel } from "../models/project.model.js";
import { projectCountModel } from "../models/project.model.js";

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

export const projectSearchController = async (
    req: Request,
    res: Response
) =>{
    try {
        const userId  = Number(req.params.id)

        if(isNaN(userId)) {
            return res.status(400).json({
                message: "id no valido"
            })
        }

        const result = await projectSearchModel(userId)
        
        return res.status(200).json({
            result: result
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }
}

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

export const projectUpdateController = async (
    req: Request,
    res: Response
) => {
    try {
        const id_project = Number(req.params.id)
        const {name, description, color} = req.body

        if (name == undefined && description == undefined && color == undefined){
            return res.status(400).json({
                message: "No se mandaron cambios"
            })
        }

        if (isNaN(id_project)){
            return res.status(400).json({
                message: "id no valido"
            })
        }
        const result = await projectUpdateModel(id_project, name, description, color)

        if (!result){
            return res.status(400).json({
                message: "No se encontro el proyecto"
            })
        }

        return res.status(200).json({
            message: "Actualización pletada exitosamente",
            result: result
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }
}

export const projectDeleteController = async(
    req: Request,
    res: Response
) => {
    try {
        const id_project = Number(req.params.id)

        if (isNaN(id_project)){
            return res.status(400).json({message: "id no valido"})
        }

        const result = await projectDeleteModel(id_project)

        if(!result){
            return res.status(400).json({message: "id no existe"})
        }

        res.status(200).json({message: "proyecto eliminado correctamente"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error interno del servidor"})
    }
}