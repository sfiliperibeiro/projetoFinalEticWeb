import { Request, Response } from "express";
import { add } from "../../services/conta";

export default async (request: Request, response: Response) => {
    const { pedidos} = request.body;

    const newConta = await add(pedidos);

    return response.json(newConta);
}