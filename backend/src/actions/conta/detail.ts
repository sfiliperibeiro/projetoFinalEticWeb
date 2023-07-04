import { Request, Response } from "express";
import { detail } from "../../services/conta";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    const conta = await detail(String(id));

    if (!conta) {
        return response.status(404).json({
            code: 404,
            message: "Conta not found"
        });
    }

    return response.json(conta);
}