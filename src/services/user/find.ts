import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function findById(id: number) {
    const find = await prisma.user.findUnique({
        where: {
            id
        },
        include: {
            cars: true,
        }
    })
    return find;
}

export default findById;