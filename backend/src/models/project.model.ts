import prisma from "../config/prisma.js";

export const projectCreateModel = async (
    name: string,
    description: string | "",
    color: string,
    userId: number
) => {
    try {
        return await prisma.project.create({
            data: {
                name: name,
                description: description,
                color: color,
                userId: userId
            }
        })        
    } catch (error) {
        return error
    }
}