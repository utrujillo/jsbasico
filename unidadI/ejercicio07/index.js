let users = [
  { id: 1, nombre: 'Uziel', apellidos: 'Trujillo' },
  { id: 2, nombre: 'Juan', apellidos: 'Penas' },
  { id: 3, nombre: 'Alberto', apellidos: 'Cuevas' },
]

let newUsers = users.map( i => ( {  ...i, sexo: 'M' } ) )

console.log( newUsers )