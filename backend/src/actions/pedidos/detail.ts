import { Request, Response } from "express";
import { detail } from "../../services/pedidos";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    const pedidos = await detail(String(id));

    if (!pedidos) {
        return response.status(404).json({
            code: 404,
            message: "Pedido not found"
        });
    }

    return response.json(pedidos);
}