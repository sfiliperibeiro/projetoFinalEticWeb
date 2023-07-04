import { PrismaClient, Sobremesas as SobremesasType } from "@prisma/client";

export const prisma = new PrismaClient();

const detail = (id: string) =>
  prisma.sobremesas.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const update = (id: string, sobremesas: SobremesasType) =>
  prisma.sobremesas.update({
    where: { id },
    data: sobremesas,
  });

const remove = (id: string) =>
  prisma.sobremesas.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { detail, update, remove };
