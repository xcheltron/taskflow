import { taskCreateModel, taskDeleteModel, taskFindProjectModel, taskUpdateModel } from "../models/task.model.js";

import type { Request, Response } from "express";

export const taskCreateController = async (
    req: Request,
    res: Response
) => {
    try {
        //Obtenemos los datos del req.body
        const { title, description, status, priority, duedate, projectId} = req.body
        //Llamamos al Modelo que crea la tarea y recibimos el objeto 
        const task = await taskCreateModel(title, description, status, priority, duedate, projectId)
        //Si el objeto viene vacio entonces no encontro el proyecto y retornamos mensaje de error
        if(!task) return res.status(400).json({message: "No se encontro el proyecto"})
        //Por otro lado si otod salio correctamente contestamos con la tarea y decimos que no hubo error
        return res.status(200).json({message: "Tarea creada correctamente", task})
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }
} 

export const taskFindProjectController = async (
    req: Request,
    res: Response
) => {
    try {
        const projectId = Number(req.params.id)

        if (isNaN(projectId)){
            return res.status(400).json({message: "Id de proyectono valido"})
        }

        const tasks = await taskFindProjectModel(projectId)

        return res.status(200).json(tasks)

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }    
}

export const taskUpdateController = async (
    req: Request,
    res: Response
) =>{
    try {
        const id = Number(req.params.id)
        const { title, description, status, priority, duedate, completedAt} = req.body

        if (isNaN(id)){
            return res.status(400).json({message: "Id no valido"})
        }

        const result = await taskUpdateModel(id, title, description, status, priority, duedate, completedAt)

        if(!result){
            return res.status(400).json({message: "NO se realizo ninguna actualización, por favor compruebe la informacion"})
        }

        return res.status(200).json(result)

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }
} 

export const taskDeleteController = async (
    req: Request,
    res: Response
) =>{
    try {
        const id = Number(req.params.id)

        if (isNaN(id)){
            return res.status(400).json({message: "Id no valido"})
        }

        const result = await taskDeleteModel(id)

        return res.status(200).json(result)    
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Error interno del servidor"})
    }
}