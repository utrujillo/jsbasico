let faker = require('faker')

let users = []
let ciudades = [ 'Acapulco', 'Tecpan', 'Coyuca' ]


for( let i = 0; i < 5; i++ ){
    let user = {
        nombre: faker.name.firstName(),
        apellidos: faker.name.lastName()
    }

    users.push( user )
}

console.log( users )