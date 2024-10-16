import { PrismaClient } from "@prisma/client"
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const createCustomer = async (data: any) => {
    console.log(data)
    const hashpassword: string = await bcrypt.hash(data.password, 10)
    await prisma.$transaction(async (transactionClient) => {
        const createUser = await transactionClient.user.create({
            data: {
                email: data.email,
                password: hashpassword
            }
        })
        console.log(createUser)
        const createProfile = await transactionClient.profile.create({
            data: {
                name: data.name,
                email: createUser.email,
            }
        })
        return createProfile;
    })
    return {
        message: 'user created'
    }
}

export const userService = { createCustomer }