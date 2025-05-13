/*
Break
Nesta aula, vamos aprender um pouco mais sobre o uso da palavra reservada break para encerrar a execução de repetições, como no caso do switch case e em estruturas de repetição como o for. No exemplo do switch case, o break é utilizado para encerrar a execução de um caso e evitar a continuação para os próximos casos. Já no for, o break é usado para interromper a repetição em um determinado momento. O break é útil para controlar o fluxo de execução do código.
*/

let option = 3

switch (option) {
    case 1:
        console.log('Opção 1')
        break
    case 2:
        console.log('Opção 2')
        break
    case 3:
        console.log('Opção 3')
        break
    default:
        console.log('Opção inválida')
}

// utilizando o break em um loop for
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break
    }
    console.log(i)
}