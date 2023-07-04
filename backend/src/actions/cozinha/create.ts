import { Request, Response } from "express";
import { add } from "../../services/cozinha";

export default async (request: Request, response: Response) => {
    const { numeroMesa, entradas, pratosPrincipais, sobremesas, bebidas } = request.body;

    const newCozinha = await add(numeroMesa, entradas, pratosPrincipais,sobremesas, bebidas );

    return response.json(newCozinha);
}