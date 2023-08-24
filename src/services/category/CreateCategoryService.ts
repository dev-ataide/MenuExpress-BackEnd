import prismaClient from "../../prisma";
interface CategoryRequest{
    name: string;
    userId: string;
}


class CreateCategoryService{
    async execute({name, userId}: CategoryRequest) {
        console.log(name)
        console.log(userId)

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
                userId: userId
            
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
