import prismaClient from "../../prisma";

interface ListOrderRequest {
    userId: string;
  }


class ListOrderService{

    async execute({userId}:ListOrderRequest ){
        const orders = await prismaClient.order.findMany({
            where:{
                userId:userId,
                draft: false,
                status:false,
            },
            orderBy:{
                created_at:'desc'
            }
        })

        return orders;

    }
}

export {ListOrderService}