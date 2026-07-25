import prisma from "../config/prisma.js";

export const projectCreateModel = async (
    name: string,
    description: string | "",
    color: string,
    userId: number
) => {
        return await prisma.project.create({
            data: {
                name: name,
                description: description,
                color: color,
                userId: userId
            }
        })        
    } 

//traer todos los proyectos de una persona
export const projectSearchModel = async (userId:number) => {
    return await prisma.project.findMany({
        where: {userId: userId},
        select:{
            id_project: true,
            name: true,
            description: true,
            color: true
        }
    })
}

export const projectUpdateModel = async (
    id_project: number,
    name?: string,
    description?: string,
    color?: string
) => {
    const project = await prisma.project.findUnique({
        where: {
            id_project
        }
    });

    if (!project) {
        return null;
    }

    //creo un objeto data
    const data : any = {}

    //verifico que tengan informacion, si no, no los guardo en data y así solo actualizo la info nueva
    if (name !== undefined) data.name = name
    if (description !== undefined) data.description = description
    if (color !== undefined) data.color = color

    return await prisma.project.update({
        where: {
            id_project
        },
        data
    })
}

export const projectDeleteModel = async (
    id_project: number
) =>{
    return prisma.project.delete({
        where: {id_project}
    })
}