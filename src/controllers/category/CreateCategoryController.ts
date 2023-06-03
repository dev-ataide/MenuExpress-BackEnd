import { Request, Response, NextFunction } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";


class CreateCategoryController{
    async handle(req:Request, res:Response){
        const createCategoryService = new CreateCategoryService();
        // console.log(req.body)
        // console.log(req.body.name)
        const name = req.body.name;
        const userId = req.body.userId;
        // console.log(name)
        // console.log(userId)

        //Recebe do execute do CreateCategoryService e armazena as informações
        const category = await createCategoryService.execute({
            name,
            userId
        });
        
        // Retorna a categoria que recebemos do execute do CreateCategoryService
        console.log("CreateCategoryController foi executado")
        return res.json(category);

    }
} 


export {CreateCategoryController} 