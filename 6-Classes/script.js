/*  AULA 10 - Clases em JavaScript
Como utilizar classes pra lidar com exceções
Nesta aula, aprenderemos a utilizar classes para lidar com exceções específicas em JavaScript. Vamos ver como identificar e tratar diferentes tipos de erros, como TypeError e RangeError. Também foi abordado o uso do método throwNew para gerar exceções personalizadas. Vamos mostrar a importância de tratar exceções de forma específica e amigável para o usuário, assim como a possibilidade de encadear diferentes tipos de exceções.
*/

let obj = [17, 42, 13, 99, 100, 110, 120];
let index = 300

try {
  if (!obj.includes(17)) {
    throw new Error("Não foi possível encontrar o valor 17 no objeto");
  }
  if (index > 99) {
    throw new RangeError("O valor do índice é maior que 99");
  }
} catch (e) {
  if (e instanceof TypeError) {
    console.log(e);
  }
  if (e instanceof RangeError) {
    console.log(e.message);
  } else {
    console.log("Erro desconhecido");
  }
//   console.log(e);
}
