import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function readUserService() {
    const read = await prisma.user.findMany({
        include: {
            cars: true
        }
    });
    return read;
};

export default readUserService;

