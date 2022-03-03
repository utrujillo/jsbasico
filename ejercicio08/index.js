import pikachu from './pikachu.js'

// Primeros 5 movimientos v1
let firstFive = pikachu.moves.filter( 
  (pokemon, index) => index < 5
).map( p => ({ move: p.move.name }) )

console.log( firstFive )

// Primeros 5 movientos v2
let firstMoves = []

for( let i = 0; i < pikachu.moves.length; i++ ){

  if( i < 5 )
    firstMoves.push( pikachu.moves[i].move.name )
}

console.log( firstMoves )

// Ultimo 5 movimientos v1
let longitudArray = pikachu.moves.length
let valorInicial = longitudArray - 5
let lastFive = []

for( let i = valorInicial; i < longitudArray; i++ ){
  lastFive.push( 
    { movimiento: pikachu.moves[i].move.name } 
  )
}

console.log( lastFive )