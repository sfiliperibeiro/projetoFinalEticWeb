import { PrismaClient, Cozinha } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.cozinha.findMany({
    where: {
      deleted: false,
    },
  });

const detail = (id: string) =>
  prisma.cozinha.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (cozinha: Cozinha) =>
  prisma.cozinha.create({
    data: cozinha,
  });

const update = (id: string, cozinha: Cozinha) =>
  prisma.cozinha.update({
    where: { id },
    data: cozinha,
  });

const remove = (id: string) =>
  prisma.cozinha.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { all, detail, add, update, remove };
