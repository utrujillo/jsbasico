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

// 1. Hay algunos pokemon que no tienen nada en el arreglo held items, hay que descartarlos
const pokemon_with_held_items = pokemons.filter( pokemon => pokemon.held_items.length > 0 )
// console.log( pokemon_with_held_items.map( pokemon => pokemon.name ) )

// 2. Obteniendo la informacion de held_items asociados a la version pearl/heartgold segun sea el caso
// Como held_items es un array, entonces hay que iterarlo y extraer unicamente los valores de la version deseada
let pokemonByVersion = []
pokemon_with_held_items.forEach( (pokemon, index) => {
  pokemon.held_items.forEach(element => {
    const pokemonObject = element.version_details
                          .filter( item => item.version.name === 'pearl' )
                          .map( item => ( { pokemon_name: pokemon.name, ...item } ) )[0]
    
    // Puede que tengamos un pokemon que en el campo held_items tenga 2 objetos ej. https://pokeapi.co/api/v2/pokemon/venomoth
    // En la posicion 0 no existe la version pearl dentro del objeto
    // Sin embargo en la posicion 1, si existe la version pearl, como el objeto itera, es posible que devuelva undefined
    // Se descartan los elementos undefined para que nuestro objeto cuente unicamente con la informacion necesaria  
    if( pokemonObject !== undefined )
      pokemonByVersion.push( pokemonObject )
  })
} )

// 3. Una vez que se tiene el listado de los pokemon por version y su rareza, lo siguiente es realizar el ordenamiento
// Aplicamos sort para ordenar y map, para devolver unicamente el nombre del pokemon
const sortedPokemon = pokemonByVersion.sort((a, b) => a.rarity - b.rarity )
                        .map( (pokemon, index) => ( { position: index+1, pokemon: pokemon.pokemon_name } ) )

console.log( sortedPokemon )



