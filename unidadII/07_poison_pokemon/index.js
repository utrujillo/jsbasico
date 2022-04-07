import fetch from 'node-fetch'

const getDataAPI = async ( url ) => {
  let result = await fetch( url )
  return await result.json()
}

/**
 * ?offset => indica la posicion en la que se iniciara (ej. pokemon en la posicion 0)
 * ?limit => indica la cantidad de elementos que retornara la consulta (ej. 50 pokemons)
 */
const responseAPI = await getDataAPI( 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50' )
const urlPokemon = responseAPI.results.map( i => i.url )

/**
 * 1.- Se construye un listado de promesas (las peticiones de los N pokemons que seran solicitados hacia la API)
 * ej. [ getDataAPI( http://.../pikachu ), getDataAPI(http://.../bulbasor) ]
 * en realidad no es el nombre del pokemon, es el ID, pero para que me entiendan XD
 */
let promises = []
urlPokemon.forEach(url => promises.push( getDataAPI( url ) ) )

/**
 * Se ejecuta todo el arreglo de promesas y el resultado se concatena en un nuevo array
 * ej. de resultado [ {...datosPokemon1}, {...datosPokemon2, {...datosPokemonN}} ]
 */
const pokemons = []
  .concat
  .apply([], await Promise.all( promises ));


/**
 * Obteniendo pokemons que son de tipo veneno (poison) utilizando map y filter
 */
// console.log( pokemons[1].types.filter( t => t.type.name === 'poison').length > 0 )
const pokemonResultFilter = pokemons
              .filter( pokemon => pokemon.types.filter( t => t.type.name === 'poison').length > 0 )
              .map( p => p.name )


console.log( 'Resultado map y filter', pokemonResultFilter )


/**
 * Obteniendo pokemons que son de tipo veneno (poison) utilizando foreach
 */
let pokemonResultForeach = []
pokemons.forEach( pokemon => {
  pokemon.types.forEach( t => {
    if( t.type.name === 'poison' )
      pokemonResultForeach.push( pokemon.name )
  } )
} )

console.log( 'Resultado utilizando foreach', pokemonResultForeach )