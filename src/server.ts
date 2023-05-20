// Quando a aplicação Rodar ela chamará este arquivo
import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from 'cors';
import path from 'path'
import { router } from './routes'; // Recebe as rotas

const app = express(); // Instancia a aplicação express
app.use(express.json()); // Middleware que permite que o App use o express para trabalhar com JSON
app.use(cors()); // Middleware que libera o tratamento para qualquer IP

app.use(router); // Middleware que permite que possamos utilizar as rotas dentro do app.

// Middleware para acessar as imagens
app.use(
    '/files',
    express.static(path.resolve(__dirname,'..','tmp'))
)



// Middleware que trata erros assíncronos
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
    return res.status(400).json({
    error: err.message
});
}

return res.status(500).json({
    state: "Error Tipo 500",
    message: "Internal Server Error"
    });
});

app.listen(3333, () => console.log("O servidor está online rodando na porta 3333")); // Inicia o servidor e escuta na porta 3333

