import { Request, Response } from "express";
import { detail } from "../../services/cozinha";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    const cozinha = await detail(String(id));

    if (!cozinha) {
        return response.status(404).json({
            code: 404,
            message: "Pedido na Cozinha not found"
        });
    }

    return response.json(cozinha);
}