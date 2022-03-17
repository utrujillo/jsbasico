import blastoise from './blastoise.js'

let type_move = blastoise.moves.map( i => ({ 
  move: i.move.name, 
  version_group_details: i.version_group_details
                            .map( item => ({ name: item.move_learn_method.name }) )
                            .filter( item => item.name == 'level-up' ) 
  }) )
  .filter( move => move.version_group_details.length > 0 )
  .map( item => item.move )

console.log( type_move )

