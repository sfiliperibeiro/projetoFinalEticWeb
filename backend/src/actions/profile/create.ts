import { Request, Response } from "express";
import { add } from "../../services/profile";

export default async (request: Request, response: Response) => {
    const { firstName, lastName, telefone, emailAuth, passwordAuth,reservaId } = request.body;

    const newProfile = await add(firstName, lastName, telefone, emailAuth, passwordAuth,reservaId);

    return response.json(newProfile);
}