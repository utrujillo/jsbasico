// Creacion de un objeto en javascript
let array = [
    {
        nombre: 'Juan',
        apellidos: 'Penas',
        edad: 23,
        matricula: '02320678'
    },
    {
        nombre: 'Alberto',
        apellidos: 'Jacinto',
        edad: 27
    }
]

// array.forEach( item => {
//     console.log( item.matricula )
// } )

array.map( item => console.log( item.nombre ) )
