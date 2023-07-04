import { Request, Response } from "express";
import { detail } from "../../services/pratosPrincipais";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    const pratosPrincipais = await detail(String(id));

    if (!pratosPrincipais) {
        return response.status(404).json({
            code: 404,
            message: "Pratos Principais not found"
        });
    }

    return response.json(pratosPrincipais);
}