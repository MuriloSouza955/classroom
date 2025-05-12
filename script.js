/*
Encontrando um conteúdo no texto
Nesta aula, vamos aprender a verificar a existência e a posição de um conteúdo em uma string no JavaScript. Utilizaremos o método indexOf() para encontrar a posição de uma palavra e o método includes para verificar se uma palavra ou conteúdo existe na string. É importante lembrar que o JavaScript é "case sensitive", ou seja, faz diferença entre maiúsculas e minúsculas. Podemos combinar esses métodos com toLowerCase e toUpperCase para facilitar as comparações. Esses métodos são úteis para diversas aplicações.

*/

let message = "Estou estudando os fundamentos do JavaScript"

// Obtém a posição da palavra.
console.log(message.indexOf("estudando"))

//Quando nao encontra a palavra, retorna -1.
console.log(message.indexOf("javascript"))

//uma saida, para "driblar" o case sentivive, é usar o método toLowerCase ou toUpperCase.
console.log(message.toLowerCase().indexOf("javascript"))
console.log(message.toUpperCase().indexOf("JAVASCRIPT"))

// Verifica se a palavra existe na string.
console.log(message.includes("JavaScript"))
console.log(message.includes("HTML"))