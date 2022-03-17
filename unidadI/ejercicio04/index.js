// Creacion de un objeto en javascript
let array = [
	{ nombre: 'Maria', apellidos: 'Antonieta', edad: 17 },
	{ nombre: 'Juan', apellidos: 'Penas', edad: 23, matricula: '02320678' },
	{ nombre: 'Alberto', apellidos: 'Jacinto', edad: 27 },
	{ nombre: 'Margarita', apellidos: 'De la cumbia', edad: 15, matricula: '02320678' },
]

// Iterando elementos con foreach
// array.forEach( item => {
//     console.log( item.matricula )
// } )

// Creando una copia del array original que contiene
// unicamente el nombre completo
let nombres = array.map(
	item => ( {
		nombreCompleto: `${item.nombre} ${item.apellidos}`
	} )
)

// Mostrando el resultado del nuevo objeto nombres
// nombres.forEach( i => console.log( i.nombreCompleto ) )


let menoresDeEdad = array.filter( 
									item => item.edad < 18 
								)

console.log( menoresDeEdad )


let nombresConEdad = array.map(
	item => ( {
		nombreCompleto: `${item.nombre} ${item.apellidos}`,
		mayorEdad: item.edad >= 18 ? true : false
	} )
)

console.log( nombresConEdad )