import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function readUserServiceWithRelation() {
    const read = await prisma.user.findMany({
        include: {
            cars: true
        }
    });
    return read;
};

async function readUserService() {
    const read = await prisma.user.findMany();
    return read;
}

export default { readUserServiceWithRelation, readUserService };

