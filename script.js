/*
Usando o índice
Nesta aula, vamos aprender como obter a posição de um item em um array, utilizando o método indexOf. Também iremos aprender a deletar um item específico pelo índice, utilizando o método splice. O método splice permite remover elementos a partir de uma posição específica no array.
*/

let fruits = ['banana', 'apple', 'orange', 'grape'];
console.log(fruits);

// Obtendo a posição de um item em um array
let position = fruits.indexOf('orange');
console.log(position);

// fruits.splice(1, 2); // Removendo itens a partir do índice 1, removendo 2 itens
// O array fruits agora é ['banana', 'grape']

fruits.splice(position, 1); // Removendo o item 'orange' do array

console.log(fruits);