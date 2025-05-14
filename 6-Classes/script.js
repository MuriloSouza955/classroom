/*  AULA 06 - Clases em JavaScript
Como aplicar herança com classes?
Nesta aula, vamos aprender como aplicar herança com classes em programação. A herança permite reutilizar propriedades e métodos de classes superiores.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeNoise() {
    console.log("Som genérico do animal");
  }
}

class Dog extends Animal {}
class Cat extends Animal {}

const dog = new Dog("Fido");
console.log(dog.name);
dog.makeNoise();

const cat = new Cat("Felix");
console.log(cat.name);
cat.makeNoise();
