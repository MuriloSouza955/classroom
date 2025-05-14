/*  AULA 07 - Clases em JavaScript
Sobrescrevendo métodos
Nessa aula vamos aprender como sobrescrever métodos.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeNoise() {
    console.log("Som genérico do animal");
  }
  run() {
    console.log(`${this.name} está correndo`);
  }
}

class Dog extends Animal {
  makeNoise() {
    console.log("Au au!");
  }
    run() {
        console.log(`${this.name} está correndo e latindo`);
    }
}
class Cat extends Animal {
  makeNoise() {
    console.log("Meow ... Meow");
  }
  cacandoRatos() {
    console.log("Cacando ratos");
  }

}

const dog = new Dog("Fido");
console.log(dog.name);
dog.makeNoise();
dog.run();

const cat = new Cat("Felix");
console.log(cat.name);
cat.makeNoise();
cat.run();
cat.cacandoRatos();
