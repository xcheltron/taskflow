import prisma from "../config/prisma.js";
import { TaskStatus } from "../generated/prisma/enums.js";

//traer la cantidad de pryectos que tiene un usuario
export const projectCountModel = async (userId:number) => {
    return await prisma.user.findMany({
        where: {id: userId},
        select: {_count: true}
    })
}

export const getTotalTask = async (
    userId: number
) => {
    return await prisma.task.count({
        where: {
            project: {userId},
            status: TaskStatus.PENDING
        }
    })
} 