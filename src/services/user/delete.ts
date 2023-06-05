import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function deleteUserService(id:number) {
    const deleteUser = await prisma.user.delete({
        where:{
            id
        }
    });
    return deleteUser;
}

export default deleteUserService;