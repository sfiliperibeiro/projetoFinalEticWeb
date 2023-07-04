import { Request, Response } from "express";
import { detail } from "../../services/entradas";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    const entradas = await detail(String(id));

    if (!entradas) {
        return response.status(404).json({
            code: 404,
            message: "Entrada not found"
        });
    }

    return response.json(entradas);
}