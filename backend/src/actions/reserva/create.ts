import { Request, Response } from "express";
import { add } from "../../services/reserva";

export default async (request: Request, response: Response) => {
    const { firstName, lastName, telefone, emailAuth, passwordAuth, reservaId } = request.body;

    const newReserva = await add(firstName, lastName, telefone, emailAuth, passwordAuth, reservaId);

    return response.json(newReserva);
}