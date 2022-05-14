import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import useAPI from '../../hooks/API'

const Home = () => {

  const { getRequest } = useAPI()
  const [ pokemons, setPokemons ] = useState([])

  const loadPokemon = async () => {
    let response = await getRequest('https://pokeapi.co/api/v2/pokemon')
    setPokemons( response.results )
  }

  useEffect( () => {
    loadPokemon()
  }, [] )

  // console.log( 'Pokemons', pokemons )

  return(
    <View>
      {
       pokemons.map( pokemon => <Text>{ pokemon.name }</Text> )
      }
    </View>
  )
}

export default Home