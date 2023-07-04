import { Request, Response } from "express";
import { detail } from "../../services/bebidas";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    const bebidas = await detail(String(id));

    if (!bebidas) {
        return response.status(404).json({
            code: 404,
            message: "Bebidas not found"
        });
    }

    return response.json(bebidas);
}