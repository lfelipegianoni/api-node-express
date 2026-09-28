import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase {
    constructor(mensagem = "Id do Autor não localizado."){
        super(mensagem, 404);
    }
}

export default NaoEncontrado;