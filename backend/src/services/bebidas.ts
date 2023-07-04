import { PrismaClient, Bebidas } from "@prisma/client";

export const prisma = new PrismaClient();

const detail = (id: string) =>
  prisma.bebidas.findFirst({
    where: {
      id,
      deleted: false,
    },
  });


const update = (id: string, bebidas: Bebidas) =>
  prisma.bebidas.update({
    where: { id },
    data: bebidas,
  });

const remove = (id: string) =>
  prisma.bebidas.update({
    where: { id },
    data: {
      deleted: true,
    },
  });


export { detail, update, remove };
