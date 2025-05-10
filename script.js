/* Optional chaining
    encadeamento opcional.
    Se a propriedade não existir, ele retorna undefined.
    Se a propriedade existir, ele retorna o valor da propriedade.
    Útil ao explora ro conteúdo de um objeto
    quando não existe garantia de que a propriedade exista.
*/

const user = {
    id: 1,
    name: 'Murilo',
    // address: {
    //     street: 'Rua da República',
    //     city: "São Paulo",
    //     geo: {
    //         lat: -23.55,
    //         lng: -46.65
    //     },
    // },

    message: function () {
        console.log(`Olá, ${this.name}`)
    }
}

console.log(user?.address?.street)

user.message?.()