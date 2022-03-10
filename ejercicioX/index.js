import pikachu from './pikachu.js'

let moves = 0

pikachu.moves.forEach( move => {
  let found = 0
  move.version_group_details.forEach( vgroup => {
    if( vgroup.move_learn_method.name == 'level-up' && found == 0 ){
      moves++
      found++
    }
  } )
} )

console.log( moves )