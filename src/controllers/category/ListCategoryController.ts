import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const userId = req.body.userId;
    const listCategoryService = new ListCategoryService();

    // Recebe as informações do CategoryService através do execute, passando o userId
    const categories = await listCategoryService.execute({userId});
    // Passa essas informações via json
    return res.json(categories);
  }
}

export { ListCategoryController };
