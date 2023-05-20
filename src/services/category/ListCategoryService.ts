import prismaClient from "../../prisma";

class ListCategoryService{
    async execute(){
        //Armazena todas as categorias criadas na constante category
        const category = await prismaClient.category.findMany({
          //Recebe apenas os campos id e name 
            select:{
                id: true,
                name:true,
            }
        })
        return category
    }
}

export {ListCategoryService}