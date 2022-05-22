import React, { useState, useEffect } from 'react'
import { View, 
         Text, 
         TextInput, 
         StyleSheet, 
         SafeAreaView, 
         ScrollView,
         StatusBar } from 'react-native'
import useAPI from '../../hooks/API'
import PokemonCard from '../../components/PokemonCard'

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view_container}>
          <TextInput 
            placeholder="Buscar Pokemon"
            style={styles.input} />
          
          { pokemons.map( pokemon => <PokemonCard pokemon={ pokemon } algo='hola a todos' /> ) }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  view_container: {
    padding: 15
  },
  input: {
    borderColor: '#0DFFDA',
    borderWidth: 1,
    height: 60,
    paddingHorizontal: 15,
    placeholderTextColor: '#12B39A',
    borderRadius: 10,
    marginBottom: 15
  }
})

export default Home