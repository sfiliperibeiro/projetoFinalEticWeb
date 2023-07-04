import { Request, Response } from "express";
import { add } from "../../services/pedidos";

export default async (request: Request, response: Response) => {
  const { numeroMesa, entradas, pratosPrincipais, sobremesas, bebidas, preco } = request.body;

  const newPedidos = await add(numeroMesa, entradas, pratosPrincipais, sobremesas, bebidas, preco);

  return response.json(newPedidos);
}
