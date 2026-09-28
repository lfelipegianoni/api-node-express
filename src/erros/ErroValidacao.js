import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
    constructor(erro){
        // O codigo a seguir e para pegar a resposta de erro da propriedade do objeto e a rescreve com um novo valor vindo dos models
        // Por meio disto tambem e possivel esconder os logs de erros de pessoas mal instencionadas que tentarem invadir o banco
        const mensagensErro = Object.values(erro.errors)
        .map(erro => erro.message)
        .join("; ");

        super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
    }
}

export default ErroValidacao;