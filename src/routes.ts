// Importa as dependências necessárias para criar as rotas
import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import multer  from "multer";
import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

// Cria uma nova instância do objeto Router
const router = Router();

// Cria um middleware do multer e atribui à constante 'upload', passando como parâmetro o objeto de configuração de upload retornado pela função 'uploadConfig.upload()' e o diretório de destino dos arquivos "./tmp".
const upload = multer(uploadConfig.uploadConfig("./tmp"));

// Cria uma rota para lidar com requisições GET na URL '/teste'
router.get('/teste', (req: Request, res: Response) =>{
    // Retorna um erro 500 com a mensagem 'Erro ao fazer essa requisição'
    throw new Error('Erro ao fazer essa requisição')
})

// Cria uma rota para lidar com requisições POST/GET na URL '/...'
// Quando uma requisição POST é feita para essa rota, a função 'handle' do objeto 'CreateUserController', ou qualquer outro objeto, será executada

//############# Rotas de Usuario #############################################################################################################

//Cadastro
router.post('/users', new CreateUserController().handle)
//Autenticação
router.post('/session', new AuthUserController().handle)
// isAuthenticated é um middleware que está vereificando o Token, criando uma rota privada, na qual apenas users logados possuem acesso
router.get('/me', isAuthenticated, new DetailUserController().handle) 

//############# Rotas das categorias #############################################################################################################
    
// Cadastro de categorias
router.post('/createcategory', isAuthenticated, new CreateCategoryController().handle)
// Read das categorias
router.get('/listcategory', isAuthenticated, new ListCategoryController().handle)

//############# Rotas dos produtos #############################################################################################################

// Cadastrando produto
router.post('/product', isAuthenticated, upload.single('file') ,new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)







// Exporta o objeto 'router' para ser utilizado em outros arquivos que o importarem
export {router}
