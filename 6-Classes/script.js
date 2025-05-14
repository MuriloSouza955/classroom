/*  AULA 04 - Clases em JavaScript
Adicionando métodos nas classes
Nesta aula, vamos aprender como adicionar métodos em classes em JavaScript. Veremos que não é necessário usar a palavra-chave function ao definir um método dentro de uma classe.
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  sendEmail() {
    console.log(`Enviando email para ${this.name} no endereço ${this.email}`);
  }
}

const user = new User("Murilo", "murilo@email.com");
user.sendEmail();
