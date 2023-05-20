// Importando o módulo crypto para gerar um hash aleatório
import crypto from 'crypto';
// Importando o módulo multer para gerenciamento de upload de arquivos
import multer from 'multer';


// Importando os módulos extname e resolve do path para obter a extensão do arquivo e resolver caminhos de diretório
import { extname, resolve } from 'path';
// Exportando um objeto que contém uma função chamada upload, que recebe uma string folder como parâmetro
export default {
  uploadConfig(folder: string) {
    // Retornando um objeto que contém o middleware de armazenamento do multer
    return {
      storage: multer.diskStorage({
        // Definindo o diretório de destino dos arquivos enviados
        destination: resolve(__dirname, '..', '..', folder),
        // Definindo o nome do arquivo
        filename: (request, file, callback) => {
          // Gerando um hash aleatório de 16 bytes usando o módulo crypto
          const fileHash = crypto.randomBytes(16).toString('hex');
          // Obtendo o nome original do arquivo e concatenando com o hash gerado
          const fileName = `${fileHash} - ${file.originalname}`;
          // Retornando o nome do arquivo para o multer
          return callback(null, fileName);
        },
      }),
    };
  },
};
