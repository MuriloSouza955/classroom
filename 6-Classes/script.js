/*  AULA 08 - Clases em JavaScript
Aprendendo sobre herança e cadeia de protótipos
Nesta aula, vamos aprender o conceito de prototype chain no JavaScript, que se baseia em herança e cadeia de protótipos. Vamos entender como objetos herdam propriedades e métodos de seus protótipos ascendentes, até chegar a um protótipo com valor nulo, finalizando a cadeia.
*/

/*  AULA 09 - Prototypes em JavaScript
Criando um objeto prototype
Nesta aula, exploraremos a herança de objetos em JavaScript, demonstrando na prática o uso do prototype. Vamos aprender como objetos como endereço e arrays possuem protótipos que podem ser explorados para entender a cadeia de herança. Compreender essa estrutura de herança em JavaScript é fundamental para aprofundar seus conhecimentos na linguagem.
*/

const address = {
  city: "São Paulo",
  country: "Brasil",
};

console.log(address);

const users = ["Murilo", "João", "Pedro", "Maria"];

console.log(users);

const user_name = "Murilo Souza";
console.log(user_name.__proto__);
