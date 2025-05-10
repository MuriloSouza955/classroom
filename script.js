/*
Obtendo o comprimento de uma string
Nesta aula, vamos descobrir como obter o comprimento de uma string em JavaScript usando a propriedade .length para retornar a quantidade de caracteres de uma string, incluindo espaços. A propriedade é útil para validar senhas com um número mínimo de caracteres. Também veremos como verificar o comprimento de um número, convertendo-o em string para utilizar a propriedade .length. Alternativamente, também é possível usar o método toString() para obter o mesmo resultado.

*/

let message = "Estou estudando os fundamentos do Javascript."

// console.log(message)

//como obter o comprimento de uma string
// console.log(message.length)

// obter a quantidade de dígitos de um número
// let number = 123456789
// console.log(number.length)
// console.log(number.toString().length) // ou
// console.log(String(number).length)

// console.log(message.replace("os fundamentos do Javascript", "HTM    L")) // substitui a palavra Javascript por HTML

//Extraindo uma parte da string
console.log(message)

console.log(message.slice(0, 5)) // extrai a parte de 5 caracteres
console.log(message.slice(6, 30)) // extrai a parte de 6 até 30 caracteres
console.log(message.slice(-11)) // extrai a última parte de 11 caracteres

//removendo espaços em branco no inicio e fim da string
let message2 = "    Estou estudando os fundamentos do Javascript.    "
console.log(message2)
console.log(message2.length)
console.log(message2.trim()) // remove espaços em branco no inicio e fim da string
console.log(message2.trim().length)
