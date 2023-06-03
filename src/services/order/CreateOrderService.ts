import prismaClient from "../../prisma";

interface OrderRequest{
    table:number;
    name:string;
    userId: string;
}

class CreateOrderService{
    async execute({table,name,userId}: OrderRequest){
        const order = await prismaClient.order.create({
            data:{
                table:table,
                name:name,
                userId:userId
            }
        })


        return order;

    }
}



export {CreateOrderService}