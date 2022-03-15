import charizard from './charizard.js'

// Parte 1 examen
const abilities = charizard.abilities.map( item => item.ability.name )
console.log( abilities )

console.log('=================================')

let movesLearned = 0
let movesLearnedArray = []

charizard.moves.forEach( move =>{
  let found = 0
  move.version_group_details.forEach( item => {
    if( 
        item.move_learn_method.name == 'tutor' &&
        found == 0 
      ){
      movesLearned++
      found++ 
      movesLearnedArray.push( move.move.name )
    }
  } )
} )

console.log( movesLearnedArray )