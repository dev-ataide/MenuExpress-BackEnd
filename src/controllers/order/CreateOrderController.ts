import { Request, Response } from "express";

import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController{
    async handle(req:Request,res:Response){
       const {table, name, userId} = req.body;
       const createOrderService = new CreateOrderService();

       const order = await createOrderService.execute({
        table,
        name,
        userId,
       })
       return res.json(order) // Retorna para o usuario
    }
}


export {CreateOrderController}