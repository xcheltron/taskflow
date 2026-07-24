import prisma  from "../config/prisma.js";

export const createUserModel = async (
    email: string,
    password: string,
    name: string
) =>{
    return await prisma.user.create({
            data: {
                email: email,
                password: password,
                name: name
            }
        })
    }

export const loginUserModel = async (
    email: string
) =>{
    return await prisma.user.findFirst({
        where: {email: email},
        select: {
            id: true,
            name: true,
            password: true
        }
    })
}