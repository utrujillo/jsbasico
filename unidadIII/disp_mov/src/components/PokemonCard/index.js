import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const PokemonCard = (props) => {

  const { pokemon } = props
  
  return(
    <View style={styles.horizontalCard}>
      <Text>{ pokemon.name }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  horizontalCard: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 10
  }
})

export default PokemonCard