import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
    // Middleware de erro, passamos 4 parametros para o express indentificar que este Middleware e de tratamento de erro 
    // O comentario sa seguir desabilita o next para ele nao ficar em vermehlo pois nao vamos utilizalo entretanto temos que passar ele como um parametro

    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res);
        // O if seguinte e para quando o usuario manda um post entretanto sem dados para salvar no banco
    } else if(erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).enviarResposta(res);
    } else if(erro instanceof ErroBase){
        erro.enviarResposta(res);
    } else {
        new ErroBase().enviarResposta(res);
    }
}

export default manipuladorDeErros;

// Os middlewares são funções especiais que interceptam e processam as requisições feitas para a API antes que elas cheguem ao próximo middleware ou à rota responsável por respondê-las.

// Na nossa API, temos um middleware de tratamento de erros, responsável por interceptar os erros que acontecem durante o processamento das requisições e tratá-los de uma forma adequada, retornando uma resposta apropriada para o cliente.