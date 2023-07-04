import { PrismaClient, Entradas } from "@prisma/client";

export const prisma = new PrismaClient();

const detail = (id: string) =>
  prisma.entradas.findFirst({
    where: {
      id,
      deleted: false,
    },
 
  });


const update = (id: string, entradas: Entradas) =>
  prisma.entradas.update({
    where: { id },
    data: entradas,
  });

const remove = (id: string) =>
  prisma.entradas.update({
    where: { id },
    data: {
      deleted: true,
    },
  });


export { detail, update, remove };
