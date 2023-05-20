import prismaClient from "../../prisma";

// Serve para comparar as senhas, a senha que o usuario fornece a senha criptografada no banco de dados
import { compare } from "bcryptjs";

// Serve para autenticar usuarios
import { sign } from "jsonwebtoken";

interface AuthRequest{
    email: string;
    password: string;
}


class AuthUserService{
    async execute({email, password}: AuthRequest){

        //Verifica se o email existe
        
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        
        if(!user){
            throw new Error("User/PassWord is incorrect")
        }
        
        //Verifica se a senha que o usuario informou (password), é compativel com a senha criptografada do BD
        const passwordMatch = await compare(password,user.password)

        if(!passwordMatch){
            throw new Error("Password is incorrect")
        }


        // Se deu tudo certo vamos gerar um token para o usuario
        const token = sign(
            {
                name:user.name,
                email:user.email

            },
            process.env.JWT_SECRET,
            {
                subject:user.id,
                expiresIn:'30d'
            }
        )



        return {
            id: user.id,
            name: user.name,
            email:user.email,
            token:token
        }
    }
}

export {AuthUserService}