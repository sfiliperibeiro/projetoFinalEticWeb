import { Request, Response } from "express";
import { detail } from "../../services/sobremesas";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    const sobremesas = await detail(String(id));

    if (!sobremesas) {
        return response.status(404).json({
            code: 404,
            message: "Sobremesas not found"
        });
    }

    return response.json(sobremesas);
}