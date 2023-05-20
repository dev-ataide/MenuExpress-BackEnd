import { Request, Response, NextFunction } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";


class CreateCategoryController{
    async handle(req:Request, res:Response){
        const createCategoryService = new CreateCategoryService();
        const {name} = req.body;


        //Recebe do execute do CreateCategoryService e armazena as informações
        const category = await createCategoryService.execute({name});



        // Retorna a categoria que recebemos do execute do CreateCategoryService

        console.log("CreateCategoryController foi executado")
        return res.json(category);

    }
}


export {CreateCategoryController}