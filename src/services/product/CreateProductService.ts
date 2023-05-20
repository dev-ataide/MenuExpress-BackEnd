import prismaClient from "../../prisma";

interface ProductRequest{
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id:string;
}
class CreateProductService { // declaração da classe CreateProductService
    async execute({ name, price, description, banner, category_id }: ProductRequest) { // declaração do método execute que recebe um objeto contendo name, price, description, banner e category_id como parâmetros
      const product = await prismaClient.product.create({ // criação de um novo produto no banco de dados usando o método create do Prisma ORM e armazenando o resultado na constante product
        data: { // objeto data contendo os dados do novo produto a ser criado
          name, // nome do produto
          price, // preço do produto
          description: String(description), // descrição do produto convertida em uma string
          banner, // banner do produto
          category: { // categoria do produto
            connect: { // indicação de que a categoria deve ser conectada a um id específico
              id: category_id, // id da categoria a ser conectada
            },
          },
        },
      });
      return product; // retorna o novo produto criado
    }
  }
  
  

export {CreateProductService}