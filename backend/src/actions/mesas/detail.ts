import { Request, Response } from "express";
import { detail } from "../../services/mesas";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    const mesas = await detail(String(id));

    if (!mesas) {
        return response.status(404).json({
            code: 404,
            message: "Mesas not found"
        });
    }

    return response.json(mesas);
}