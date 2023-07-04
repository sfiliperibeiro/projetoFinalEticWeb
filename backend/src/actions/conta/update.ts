import { Request, Response } from "express";
import { update, detail } from "../../services/conta";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    
    if (!await detail((id))){
        return response.status(404).json({
            code:404,
            message: "Conta not found",
        });
    }

    const conta = await update((id), request.body);

    return response.json(conta);
}
