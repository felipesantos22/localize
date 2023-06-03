import { PrismaClient } from "@prisma/client";
import IUser from "../../interfaces/user";


const prisma = new PrismaClient();

async function createUser({email, name}:IUser) {
    const createCar = await prisma.user.create({
        data:{
            email,
            name,
        }
    });
    return createCar;
}

export default { createUser };