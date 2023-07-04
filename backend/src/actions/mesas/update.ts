import { Request, Response } from "express";
import { update, detail } from "../../services/mesas";

export default async (request: Request, response: Response) => {
    const { id } = request.params;

    
    if (!await detail((id))){
        return response.status(404).json({
            code:404,
            message: "Mesas not found",
        });
    }

    const mesas = await update((id), request.body);

    return response.json(mesas);
}
