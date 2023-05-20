import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string; //o sub armazena o Token do usuario que esta fazendo o login
}

export function isAuthenticated( req:Request, res:Response, next: NextFunction){

    // Recebe o token
        const authToken = req.headers.authorization;

        if(!authToken){
            return res.status(401).end() // Verifica se o token foi recebido, se ele foi o codigo prossegue, se não, o .end encerra o middleware            
        }

        const [,token] = authToken.split(" ")   // Se utiliza do javascript para pegar apenas o que vier depois do vazio, e chama de token

        try {
            //validar o token
            const{ sub } = verify(
                token,
                process.env.JWT_SECRET
            ) as Payload;

            //Recupera o ID do token e armazena dentro da variavel user_id dentro da REQ - Requisição
            req.user_id= sub;

            return next()

            
        } catch (error) {
            return res.status(401).end()  // Verifica novamente se o token foi recebido, se ele foi o codigo prossegue, se não, o .end encerra o middleware            
        }
    console.log("MiddleWare funcionou")

}