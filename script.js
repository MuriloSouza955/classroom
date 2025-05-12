/*
Verificando se existe um conteúdo no array
Nesta aula, vamos aprender como verificar se um item existe em um array utilizando o método includes retornando verdadeiro ou falso. O método includes é uma ferramenta muito útil para essa finalidade.

*/

let fruits = ['banana', 'limão', 'maçã'];

//Verificar se um item existe no array
let hasBanana = fruits.includes('banana');
console.log(hasBanana); // true
let hasStrawberry = fruits.includes('morango');
console.log(hasStrawberry); // false