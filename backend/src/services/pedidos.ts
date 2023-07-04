import { PrismaClient, Pedidos } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.pedidos.findMany({
    where: {
      deleted: false,
    },
  });

const detail = (id: string) =>
  prisma.pedidos.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = async (data: Omit<Pedidos, "id" | "createdAt" | "updateAt" | "deleted">) => {
  const { mesaId, entradasId, pratosPrincipaisId, sobremesasId, bebidasId, ...rest } = data;

  const newPedido = await prisma.pedidos.create({
    data: {
      ...rest,
      mesa: {
        connect: { id: mesaId },
      },
      entradas: {
        connect: { id: entradasId },
      },
      pratosPrincipais: {
        connect: { id: pratosPrincipaisId },
      },
      sobremesas: {
        connect: { id: sobremesasId },
      },
      bebidas: {
        connect: { id: bebidasId },
      },
    },
  });

  return newPedido;
};

const update = (id: string, data: Partial<Pedidos>) =>
  prisma.pedidos.update({
    where: { id },
    data,
  });

const remove = (id: string) =>
  prisma.pedidos.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { all, detail, add, update, remove };
