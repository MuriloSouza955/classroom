const user = {
    name: 'Murilo',
    message: function (){
        // Não funciona com arrow function " => "
        console.log(`Olá ${this.name}`)
    },
}

user.message() 