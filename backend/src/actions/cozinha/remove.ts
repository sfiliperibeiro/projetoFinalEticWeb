import { Request, Response } from "express";
import { remove, detail } from "../../services/cozinha";

export default async (request: Request, response: Response) => {
    
    const { id } = request.params;

    if (!await detail((id))){
        return response.status(404).json({
            code:404,
            message: "Pedido na Cozinha not found",
        });
    }

    await remove((id));

    return response.json();
}