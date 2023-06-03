import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    // Obtém o parâmetro 'category_id' da consulta (query parameter)
    // e converte-o para o tipo string
    const category_id = req.query.category_id as string;

    // Instancia o serviço responsável por listar produtos por categoria
    const listByCategory = new ListByCategoryService();

    // Executa o serviço, passando o ID da categoria como parâmetro
    const products = await listByCategory.execute({
      category_id,
    });

    // Retorna os produtos encontrados em formato JSON
    return res.json(products);
  }
}

export { ListByCategoryController };
