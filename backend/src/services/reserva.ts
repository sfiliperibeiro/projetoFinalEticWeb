import { PrismaClient, Reserva } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () => prisma.reserva.findMany({
  where: {
    deleted: false,
  },
});

const detail = (id: string) =>
  prisma.reserva.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const add = (
  data: Date,
  hora: Date,
  numeroPessoas: number,
  nome: string,
  telefone: number,
  email: string
) =>
  prisma.reserva.create({
    data: {
      data,
      hora,
      numeroPessoas,
      nome,
      telefone,
      email,
    },
  });

const update = (id: string, reserva: Reserva) =>
  prisma.reserva.update({
    where: { id },
    data: reserva,
  });

const remove = (id: string) =>
  prisma.reserva.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { all, detail, add, update, remove };
