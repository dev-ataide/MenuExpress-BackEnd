import prismaClient from "../../prisma";
interface CategoryRequest{
    name: string;
}


class CreateCategoryService{
    async execute({name}: CategoryRequest) {

        if (name === '' || name === " "){
            throw new Error('Nome invalido')
        }

        const CategoryAlreadyExists = await prismaClient.category.findFirst({
            where:{
                name:name
            }
        })
        if(CategoryAlreadyExists){
            throw new Error ("Category already exist")
        }

        const category = await prismaClient.category.create({
            data:{
                name:name,
            
            },
            select:{
                id: true,
                name: true,
            }
        })
        return category;
    }
}

export {CreateCategoryService}