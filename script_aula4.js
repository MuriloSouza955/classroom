/*
For in
Nesta aula, vamos aprender sobre a estrutura de repetição for in, que permite iterar sobre as propriedades de um objeto. Também foi mostrado como utilizar o for in com arrays, percorrendo seus índices ou elementos. O for in é uma ferramenta útil para percorrer objetos e arrays de forma eficiente.
*/

let person = {
    name: "Murilo",
    age: 30,
    city: "Santa Catarina",
    state: "SC",
    country: "Brasil"
}

for (let property in person) {
    console.log(property + ": " + person[property]); // Exibe o nome da propriedade e seu valor
}
console.log("======================");

let students = ["Murilo", "Lucas", "João", "Maria", "Ana"];
for (let index in students) {
    console.log(students[index]);
}