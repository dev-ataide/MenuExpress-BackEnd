// Importa o PrismaClient que é a ferramenta para gerenciar o banco de dados
import { PrismaClient } from "@prisma/client";

// Cria uma instância do PrismaClient para que possamos interagir com o banco de dados
const prismaClient = new PrismaClient();

// Exporta a instância do PrismaClient criada para que ela possa ser utilizada em outros lugares
export default prismaClient;