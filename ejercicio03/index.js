// Version 1 de for
console.log('====== Version 1 FOR =======')
for( i = 0; i < 10; i++ ){
    console.log( 'El valor es:'+ i )
}

// Version 2 de for
console.log('====== Version 2 FOR =======')
let array = [1,2,3,4,5,6,7,8,9,10]
array.forEach( item => {
    console.log(`El valor es ${item}`)
} )

// Creacion de un objeto en javascript
let alumno = {
    nombre: 'Juan',
    apellidos: 'Penas',
    edad: 23
}

// Accediendo a todo el objeto
console.log( alumno )
// Accediendo a una propiedad especifica
console.log( 'Nombre completo: '
            + alumno.nombre +' '
            + alumno.apellidos )