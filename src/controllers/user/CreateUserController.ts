// Importa as interfaces Request e Response e a variável response do pacote express.
import { Request, Response, response } from "express";
// Importa a classe CreateUserService do arquivo CreateUserService que está localizado na pasta services/user.
import { CreateUserService } from '../../services/user/CreateUserService'

// Define uma nova classe CreateUserController.
class CreateUserController{
    // Define o método handle como assíncrono e recebe os parâmetros req e res que representam a requisição e a resposta, respectivamente.
    async handle(req:Request, res: Response){
        // Destrutura os valores de name, email e password do corpo da requisição req.body.
        const{name, email, password} = req.body; 
        // Cria uma nova instância da classe CreateUserService.
        const createUserService = new CreateUserService();
        // Chama o método execute da instância de CreateUserService passando como argumento um objeto com as propriedades name, email e password.
        const user = await createUserService.execute({
            name,
            email,
            password
        });
        // Atribui o resultado retornado por execute à variável user.
        // Retorna uma resposta com o status 200 e o objeto user serializado em formato JSON.
        return res.json(user)
    }
}


export {CreateUserController} ;


