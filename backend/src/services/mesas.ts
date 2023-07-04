import { PrismaClient, Mesa } from "@prisma/client";

export const prisma = new PrismaClient();

const detail = (id: string) =>
  prisma.mesa.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const update = (id: string, mesa: Mesa) =>
  prisma.mesa.update({
    where: { id },
    data: mesa,
  });

const remove = (id: string) =>
  prisma.mesa.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { detail, update, remove };
