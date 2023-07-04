import { PrismaClient, Profile, Reserva } from "@prisma/client";

export const prisma = new PrismaClient();

const detail = (id: string) =>
  prisma.profile.findFirst({
    where: {
      id,
      deleted: false,
    },
    include: {
      reserva: true,
    },
  });

const add = (
  firstName: string,
  lastName: string,
  telefone: number,
  emailAuth: string,
  passwordAuth: string,
  reservaId: string
) =>
  prisma.profile.create({
    data: {
      firstName,
      lastName,
      telefone,
      reserva: {
        connect: {
          id: reservaId,
        },
      },
    },
    include: {
      reserva: true,
    },
  });

const update = (id: string, profile: Profile) =>
  prisma.profile.update({
    where: { id },
    data: profile,
    include: {
      reserva: true,
    },
  });

const remove = (id: string) =>
  prisma.profile.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { detail, add, update, remove };
