import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "O titulo do livro é obrigarotio"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, ref: 'autores',
      required: [true, "O(a) autor(a) é obrigatorio"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatoria"],
      enum: {
        values: ["Casa do codigo", "Alura"],
        message: "A editora {VALUE} fornecida nao e um valor permitido"
      }
    },
    numeroPaginas: {
      type: Number,
      //validacao personalizada
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O numero de paginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
      }
      // mim: [10, "O numero de paginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
      // max: [500, "O numero de paginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"]
    }
  }
);
const livros = mongoose.model('livros', livroSchema);

export default livros;