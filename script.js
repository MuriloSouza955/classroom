/*
Convertendo uma string para array
Nesta aula, vamos aprender como converter uma string em um array utilizando o método split. Essa técnica pode ser útil para separar letras ou palavras em um array.

*/

let fullName =  "Murilo Souza";
console.log(fullName.split(" ")); // cria um array com os nomes separados por espaço

console.log(Array.from(fullName)); // cria um array com as letras do nome