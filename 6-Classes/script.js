/*  AULA 11 - Clases em JavaScript
Como utilizar classes para criar erros customizados
Nesta aula, aprenderemos a criar erros personalizados usando classes em JavaScript. A personalização de erros oferece flexibilidade na aplicação.
*/

class MyCustomError {
  constructor(message) {
    this.message = "Classe de erro customizada: " + message;
  }
}

try {
  throw new Error("Erro padrão lançado");
  throw new MyCustomError("Erro personalizado lançado");
} catch (error) {
  if (error instanceof MyCustomError) {
    console.log(error.message);
  } else {
    console.log("Não foi possivel executar");
  }
}
