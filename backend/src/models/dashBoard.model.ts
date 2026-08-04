import prisma from "../config/prisma.js";
import { TaskStatus } from "../generated/prisma/enums.js";

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