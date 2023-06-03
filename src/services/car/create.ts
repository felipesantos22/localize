import { PrismaClient } from "@prisma/client";
import ICar from "../../interfaces/car";


const prisma = new PrismaClient();

async function createCar({ modelo, placa, ano, userId }: ICar) {
    const createCar = await prisma.car.create({
        data: {
            modelo,
            placa,
            ano,
            userId,
        }
    })
}

export default { createCar };