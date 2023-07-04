import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();

export async function register(
  email: string,
  password: string,
  firstName: string,
  lastName?: string,
  telefone: number,
) {
  try {
    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        profile: {
          create: {
            firstName,
            lastName,
            telefone,
          },
        },
      },
      include: {
        profile: true,
      },
    });

    return createToken(user);
  } catch (e) {
    throw new Error("Failed to register user");
  }
}

// Rest of the code...

function createToken(user: any): string {
  const token = sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 180,
      email: user.email,
      user_id: user.id,
    },
    "VerySecretKeyToSignMyLogin"
  );

  return token;
}
