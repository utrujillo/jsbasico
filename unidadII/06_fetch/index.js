import fetch from 'node-fetch'

let data

try{
  let result = await fetch('https://pokeapi.co/api/v2/pokemon')
  data = await result.json()
}catch(err){
  console.error(err)
}
console.log( data )