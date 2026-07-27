import prisma  from "../config/prisma.js"

import { TaskStatus, Priority } from "../generated/prisma/enums.js"

export const taskCreateModel = async (
    title: string, //No compruebo nada, por que se supone que vendra bien dese el front
    description: string, //Comprobar si viene vacio
    status: TaskStatus, //No los verifico por que se supone que vendran bien escritos desde el front
    priority: Priority, //No los verifico por que se supone que vendran bien escritos desde el front
    duedate: Date, //verificar fecha
    projectId: number //verficar si exciste el proyecto
) =>{
    //primero comprobamos si existe el proyecto
    const result = await prisma.project.findUnique({
        where: {id_project: projectId}
    })

    if (!result){
        return null
    }

    //podemos crear manearas de comprobar los datos antes de agregarlos a la data

    //crear un objeto tipo data 
    const data = {
        title,
        description,
        status,
        priority,
        duedate,
        projectId
    }

    if (description !== undefined) data.description = description
    
    //creamos la tarea
    return prisma.task.create({
        data: {
            title: title,
            description: description,
            status: status,
            priority: priority,
            duedate: duedate,
            projectId: projectId
        }
    })
}

export const taskFindProjectModel = async (
    projectId: number
) =>{
    //Este metodo solo regresa tareas que perteneces a un proyecto en concreto
    return prisma.task.findMany({
        where: {projectId},
        select: {
            id: true,
            title: true,
            description: true,
            status: true,
            priority: true,
            duedate: true
        },
        orderBy: {
            duedate: "asc"
        }
    })
}