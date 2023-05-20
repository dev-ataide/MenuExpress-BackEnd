import prismaClient from "../../prisma";

// Define uma interface ProductRequest com um campo obrigatório category_id
interface ProductRequest {
    category_id: string;
  }
  
  // Cria uma classe ListByCategoryService com um método assíncrono execute
  class ListByCategoryService {
    async execute({ category_id }: ProductRequest) {
      // Faz uma consulta assíncrona no banco de dados usando o prismaClient
      // A consulta busca todos os produtos que correspondem ao category_id passado como parâmetro
      const findByCategory = await prismaClient.product.findMany({
        where: {
          category_id: category_id
        }
      })
      return findByCategory; // Retorna todos os produtos que possuirem o id da categoria
    }
  }
  

  export {ListByCategoryService}