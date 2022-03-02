import pikachu from './pikachu.js'

let firstFive = pikachu.moves.filter( 
  (pokemon, index) => index < 5
).map( p => ({ move: p.move.name }) )


console.log( firstFive )