import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function findById(id: number) {
    const find = await prisma.user.findUnique({
        where: {
            id,
        }
    })
}

export default findById;