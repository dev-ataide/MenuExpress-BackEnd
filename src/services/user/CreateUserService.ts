import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

// A interface UserRequest é usada para definir o formato esperado do objeto que será recebido como parâmetro para o método execute. Essa interface especifica que o objeto deve ter as propriedades name, email e password, todas do tipo string.
interface UserRequest{
    name: string;
    email:string;
    password: string;
}
// O código define uma classe CreateUserService com um método execute que recebe um objeto contendo as propriedades name, email e password. Essa classe será usada para criar um novo usuário em nosso sistema.

class CreateUserService{
    // Um novo objeto é retornado com as mesmas propriedades, utilizando o formato de nome de propriedade simplificado que é suportado no ECMAScript 6.
    async execute({name,email,password}: UserRequest){
        
          //Verifica se o usuario enviou um email no cadastro
          if(email == '' || email == " "){
            throw new Error("Email Incorrect")
        }
       
         //Verifica se esse email já está cadastrado na plataforma
         const UserAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        if(UserAlreadyExists){
            throw new Error("User already exist")
        }

        const passwordHash = await hash(password, 8) // Criptografa a senha do usuario e a armazena dentro da constante passwordHash


        const user = await prismaClient.user.create({
            data: {
              name: name,
              email: email,
              password: passwordHash,
            },
          })
      
        return user;
    }
}

// Por fim, a classe é exportada para que possa ser usada em outros arquivos do projeto.
export {CreateUserService}






