/*  AULA 02 - Clases em JavaScript
Criando uma classe com um método construtor
Nesta aula, aprenderemos a criar uma classe em JavaScript, utilizando a palavra reservada class seguida do nome da classe no padrão Paschal Case. Vamos entender um pouco a diferença entre Camel Case, Snake Case e Paschal Case. Iremos definir o corpo da classe e criar um construtor, que é uma função especial executada automaticamente ao instanciar a classe.
*/

class Person {
    constructor(name){
        console.log("Olá, ", name);
    }
}

const person1 = new Person("Murilo");