// /*  AULA 01 - JavaScript
// Obtendo a data e a hora
// Nesta aula, vamos aprender como obter datas e horas no JavaScript.
// */
// //Exibindo a data e hora atual
// console.log(new Date());
// //Exibindo a data e hora de marco 0 (1970)
// console.log(new Date(0));

// //Exibindo a data e hora de marco 1970, até o momento em segundos
// console.log(new Date().getTime());

// /*  AULA 02 - JavaScript
/* Definindo uma data e uma hora específica
Nesta aula, aprenderemos a definir uma data e hora específica em JavaScript. Utilizaremos o new Date para definir a data desejada, lembrando que os meses são contados de 0 a 11. Também exploraremos como definir a hora juntamente com a data. Além disso, veremos que é possível definir a data e hora utilizando uma string no formato específico. Essas diferentes abordagens nos dão várias possibilidades para trabalhar com datas e horas em JavaScript.
// */

// console.log(new Date(2025, 4, 13)) // JAN = 0, FEV = 1, MAR = 2, etc

// console.log(new Date(2025, 4, 13, 10, 30, 0)) // 10 horas, 30 minutos, 0 segundos

// console.log(new Date("2025-05-13T10:30:00")) // string no formato especificado

// console.log(new Date("May 13, 2025 10:30:00")) // string no formato especificado

/*  AULA 03 - JavaScript
Métodos pra trabalhar com data e hora
Nessa aula vamos aprender que existem vários métodos para manipular datas e horas. É possível criar uma data, obter o dia da semana, o dia do mês, o mês, o ano, a hora, os minutos e os segundos e muito mais.
*/

// let date = new Date("2025-04-02T14:30:00");
// console.log(date)

// //Domingo é 0, segunda-feira é 1, terça-feira é 2, etc
// console.log(date.getDay())

// // Dia do mes(0-30)

// console.log(date.getDate())

// //Mês(0-11)
// console.log(date.getMonth())

// //Ano
// console.log(date.getFullYear())

// //Hora
// console.log(date.getHours())

// //Minutos
// console.log(date.getMinutes())

// //Segundos
// console.log(date.getSeconds())

// /*  AULA 04 - JavaScript
//     Modificando a data e hora
//     Nessa aula, vamos aprender como modificar a data e hora em JavaScript. Utilizaremos métodos como setFullYear, setMonth, setDate para alterar o ano, mês e dia. Para modificar a hora, usaremos setHours, setMinutes e setSeconds.
// */

// let date = new Date("July 3, 2025 10:30:00");

// //Modificando o ano
// date.setFullYear(2018);

// //Modificando o mês
// date.setMonth(5);

// //Modificando o dia
// date.setDate(15);

// //Modificando a hora
// date.setHours(8);

// //Modificando os minutos
// date.setMinutes(45);

// //Modificando os segundos
// date.setSeconds(30);

// console.log(date);

/*  AULA 05 - JavaScript
    Formatando a data e hora

    Nesta aula, aprenderemos a formatar data e hora em JavaScript. Utilizamos métodos como getDate, getMonth e padStart para garantir que os valores tenham sempre dois dígitos. Também veremos como montar uma string de data e hora personalizada, separando e formatando cada parte conforme desejado. É importante manter o padrão correto para evitar erros ao criar datas. Essas técnicas são úteis para exibir informações de data de forma clara e organizada em aplicações.
    */

// let date = new Date("July 3, 2025 10:30:00");

// let day = (date.getDate().toString().padStart(2, "0")); // Formata para ter 2 dígitos

// let month = (date.getMonth().toString().padStart(2, "0")); // Formata para ter 2 dígitos

// let year = (date.getFullYear().toString().padStart(4, "0")); // Formata para ter 4 dígitos na variavel date

// console.log(date.getHours().toString().padStart(2, "0")); // Formata para
// // console.log(date.getMinutes().toString().padStart(2, "0"));

// let horas = date.getHours();
// let minutos = date.getMinutes();

// console.log(`${day}/${month}/${year}`);

/*  AULA 06 - JavaScript
Convertendo uma data para string
Nesta aula, iremos conhecer métodos para converter data e hora em strings específicas. Essas conversões são úteis para formatar datas e horas de maneira específica em JavaScript.
*/

// let date = new Date("2024-07-02T14:30:00");
// console.log(date.toString()); // Converte a data para string padrão
// console.log(date.toDateString()); // Converte a data para string de data
// console.log(date.toTimeString()); // Converte a data para string de hora

/* AULA 07 - JavaScript
Exibindo data e hora formatadas de acordo com a localidade
Nesta aula, iremos aprender a exibir datas e horas de acordo com a localidade do usuário. Utilizaremos o toLocaleString para formatar a data e hora de acordo com a localidade do usuário.
*/
// Exibe a data e hora formatada de acordo com a localidade do usuário
// let date = new Date("2024-07-02T14:30:00");
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString()); //  Exibe apenas a data
// console.log(date.toLocaleTimeString()); // Exibe apenas a hora

// // Exibe a data e hora no formato escolhido pelo usuário
// console.log(date.toLocaleString("en"));
// console.log(date.toLocaleDateString("en"));
// console.log(date.toLocaleTimeString("en"));

/*  AULA 08 - JavaScript
Usando o toLocaleString()
Nesta aula, vamos aprender o método toLocaleString(), um recurso poderoso para formatação de data e hora.
*/

// let date = new Date("2024-07-02T14:30:10");
// console.log(date.toLocaleString());

// console.log(date.toLocaleString("pt-BR")); // Formato brasileiro
// console.log(date.toLocaleString("en-US")); // Formato americano
// console.log(date.toLocaleString("en-GB")); // Formato britânico
// console.log(date.toLocaleString("fr-FR")); // Formato francês
// console.log(date.toLocaleString("de-DE")); // Formato alemão
// console.log(date.toLocaleString("es-ES")); // Formato espanhol
// console.log(date.toLocaleString("it-IT")); // Formato italiano
// console.log(date.toLocaleString("ja-JP")); // Formato japonês
// console.log(date.toLocaleString("zh-CN")); // Formato chinês
// console.log(date.toLocaleString("ar-SA")); // Formato árabe
// console.log(date.toLocaleString("ru-RU")); // Formato russo
// console.log(date.toLocaleString("pt-PT")); // Formato português de Portugal

// console.log(
//     date.toLocaleString("pt-BR", {
//         dateStyle: "short"
//     })
// )
// console.log(
//     date.toLocaleString("pt-BR", {
//         dateStyle: "long"
//     })
// )
// console.log(
//     date.toLocaleString("pt-BR", {
//         dateStyle: "medium"
//     })
// )

// console.log(
//     date.toLocaleString("pt-BR", {
//         dateStyle: "full"
//     })
// )

// console.log(
//     date.toLocaleDateString("pt-BR", {
//         day: "2-digit",
//         month: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//     })
// )

// let amount = 12.5;
// console.log(amount.toLocaleString("pt-BR", {
//     style: "currency",
//     currency: "BRL"
// }));

/*  AULA 09 - JavaScript
Aprendendo sobre fuso horário
Nesta aula, abordaremos o conceito de fuso horário, destacando o timestamp como um valor crucial para lidar com data e hora. O timestamp representa um ponto específico no tempo, sendo uma contagem de segundos ou milissegundos desde a referência, que é a meia-noite de 1 de janeiro de 1970 no padrão UTC. O JavaScript utiliza esse padrão como base. Existem duas maneiras de interpretar data e hora: local e UTC. O fuso horário local é determinado pelo ambiente de execução, como o navegador do usuário.
*/

/* AULA 10 - JavaScript
Conhecendo a Intl
Nesta aula, veremos mais sobre a utilização da API INTL do JavaScript para manipular data e hora. Vamos aprender como criar uma nova data, exibir informações como timezone e locale, e formatar a data de acordo com a localidade.
*/
//Obtém informações da localidae atual
// const curentLocale = Intl.DateTimeFormat().resolvedOptions();
// console.log(curentLocale);

// //Exibe no formato padrão da localidade
// console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));
// console.log(new Intl.DateTimeFormat("en-US").format(new Date()));

// const date = new Date();

// console.log(date.getTimezoneOffset());// Obtém a diferença em minutos entre o horário local e o UTC
// console.log(date.getTimezoneOffset() / 60); // Obtém a diferença em horas entre o horário local e o UTC