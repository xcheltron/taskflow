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