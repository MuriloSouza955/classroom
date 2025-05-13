/*
For of
Nesta aula, iremos aprender sobre a estrutura de repetição for of, que itera sobre os valores de um objeto iterável. Diferente do for in, o for off itera sobre os valores, não sobre as propriedades. É importante que o objeto seja iterável, como um array.
*/

let students = ["Murilo", "Maria", "Pedro", "José"];

for (let student of students) {
    console.log(student);
}

for (let student in students) {
    console.log(student);
}

let users = [
    { name: "Murilo", age: 20 },
    { name: "Maria", age: 19 },
    { name: "Pedro", age: 21 },
    { name: "José", age: 22 }
]

for (let user of users) {
    console.log(user.name);
}