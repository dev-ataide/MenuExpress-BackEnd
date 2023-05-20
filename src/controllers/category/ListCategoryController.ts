import { Request, Response } from "express";

import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req:Request, res:Response){
        const listCategoryService = new ListCategoryService();

        // Recebe as informações do CategoryService através do execute
        const category = await listCategoryService.execute();
        // Passa essas informações via json
        return res.json(category)
    }
}

export {ListCategoryController}