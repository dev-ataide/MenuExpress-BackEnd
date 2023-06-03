import { Request,Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController{
    async handle(req:Request,res:Response){
        const listOrderService = new ListOrderService();
        const userId = req.body.userId

        const order = await listOrderService.execute(userId);

        return res.json(order)


    }
}

export {ListOrderController}