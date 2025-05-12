/*
Separando e unindo strings
Nesta aula, vamos aprender a dividir e unir textos utilizando os métodos disponíveis. Vamos usar o método split() para quebrar um texto com base em um caractere específico, gerando um array com as partes separadas. Também exploraremos o método join para unir as partes do texto separadas anteriormente, podendo definir um novo caractere como separador. Essas técnicas são úteis para manipular textos de forma eficiente, seja para separar palavras-chave ou para unir informações.

*/

let text = "Estudar, Aprender, Praticar";

let separate = text.split(",");

console.log(separate);

let message = "Estou aprendendo Javascript";
console.log(message.split(" "));

//Adicionando um caractere, por exemplo "_" para unir o texto
console.log(message.split(" ").join("_"));

//Usando o método join para unir o texto
console.log(separate.join("_"));