import ErroBrase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBrase {
    constructor(mensagem = "Um ou mais dados fornecidos estao incorretos" ){
        super(mensagem, 400);
    }
}

export default RequisicaoIncorreta;