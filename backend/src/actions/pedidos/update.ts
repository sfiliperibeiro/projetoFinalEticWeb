import { Request, Response } from "express";
import { update, detail } from "../../services/pedidos";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    
    if (!await detail((id))){
        return response.status(404).json({
            code:404,
            message: "Pedido not found",
        });
    }

    const pedidos = await update((id), request.body);

    return response.json(pedidos);
}
