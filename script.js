/*
Completando uma string
Nesta aula, vamos aprender a manipular strings em JavaScript. Veremos um exemplo prático de ocultar os primeiros dígitos de um número de cartão de crédito e exibir apenas os últimos quatro dígitos. Utilizaremos métodos como slice para pegar os últimos dígitos e padStart() para preencher a string com caracteres específicos. Também veremos o método padEnd() para preencher strings no final. Esses métodos são úteis para manipular e formatar strings de forma dinâmica.

*/

const creditCard = "1234567812344928";
// console.log(creditCard.length);

//Pegar os 4 últimos dígitos
const lastDigits = creditCard.slice(-4);
// console.log(lastDigits);

// Deixa apenas os 4 ultimos digitos visiveis
const maskesNunber = lastDigits.padStart(creditCard.length, "X");
console.log(maskesNunber);

//Utilizando o método padEnd() para preencher a string com caracteres específicos
const number = "123"
console.log(number.padEnd(10, "#"));