class ErroBase extends Error {
    constructor(messagem = "Erro interno do servidor", status = 500){
        super();
        this.message = messagem;
        this.status = status;
    }

    enviarResposta(res){
        res.status(this.status).send({
            messagem: this.message,
            status: this.status
        });
    }
}

export default ErroBase;