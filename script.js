/*
Criando e acessando um array
Nesta aula, vamos entender como criar e acessar itens de um array em JavaScript. Também abordaremos como acessar dinamicamente o último item do array, evitando erros ao tentar acessar índices que não existem.

*/

let fruits = ["Banana", "Mango", "Kiwi", "Goiaba", "Maçã"];

console.log(fruits);
console.log(fruits.length);

// Acessando os itens do array pelo seu índice
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits[fruits.length - 1]); // Último item do array