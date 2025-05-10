/* 
Operador de coalescência nula
Nesta aula, vamos entender mais sobre o operador de coalescência nula em JavaScript. Vamos entender como ele retorna o operando do lado direito quando o do lado esquerdo é nulo ou undefined. Veremos na prática como usar para verificar se uma variável tem conteúdo ou não. Esse operador é útil para fazer verificações em diferentes cenários de programação.
*/

let content = "Olá, Murilo Souza"
console.log(content ?? "Conteúdo padrão") // Mostra se tiver conteúdo, e se nao tiver, vai exibir o segundo parametro.

const user = {
    name: 'Murilo',
    avatar: undefined
}

console.log(user.avatar ?? "default.png")