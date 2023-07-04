import { PrismaClient, Conta } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.conta.findMany({
    where: {
      deleted: false,
    },
  });

const detail = (id: string) =>
  prisma.conta.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (conta: Conta) =>
  prisma.conta.create({
    data: conta,
  });

const update = (id: string, conta: Conta) =>
  prisma.conta.update({
    where: { id },
    data: conta,
  });

const remove = (id: string) =>
  prisma.conta.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { all, detail, add, update, remove };
