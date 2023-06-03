import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ListRequest {
  userId: string;
}

class ListCategoryService {
  async execute({ userId }: ListRequest) {
    // Armazena as categorias criadas pelo usuário específico na constante category
    const categories = await prisma.category.findMany({
      where: {
        userId: userId,
      },
      select: {
        name: true,
        userId: true,
      },
    });
    return categories;
  }
}

export { ListCategoryService };
