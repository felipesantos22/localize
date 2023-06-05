import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function updateUserService(id: number, email: string, name: string) {
    const updateUser = await prisma.user.update({
        where: {
            id,
        },
        data: {
            email,
            name
        }
    });
    return updateUser;
}

export default updateUserService;