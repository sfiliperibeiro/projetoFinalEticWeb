import { PrismaClient, PratosPrincipais } from "@prisma/client";

export const prisma = new PrismaClient();

const detail = (id: string) =>
  prisma.pratosPrincipais.findFirst({
    where: {
      id,
      deleted: false,
    },

  });


const update = (id: string, pratosPrincipais: PratosPrincipais) =>
  prisma.pratosPrincipais.update({
    where: { id },
    data: pratosPrincipais,
  });

const remove = (id: string) =>
  prisma.pratosPrincipais.update({
    where: { id },
    data: {
      deleted: true,
    },
  });


export { detail, update, remove };
