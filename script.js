/*
Obtendo o comprimento de uma string
Nesta aula, vamos descobrir como obter o comprimento de uma string em JavaScript usando a propriedade .length para retornar a quantidade de caracteres de uma string, incluindo espaços. A propriedade é útil para validar senhas com um número mínimo de caracteres. Também veremos como verificar o comprimento de um número, convertendo-o em string para utilizar a propriedade .length. Alternativamente, também é possível usar o método toString() para obter o mesmo resultado.

*/

let message = "Estou estudando os fundamentos do Javascript."

console.log(message)

//como obter o comprimento de uma string
console.log(message.length)

// obter a quantidade de dígitos de um número
let number = 123456789
// console.log(number.length)
console.log(number.toString().length) // ou
console.log(String(number).length)