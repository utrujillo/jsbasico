import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'

const LoginForm = ( props ) => {

  const { navigation } = props
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  return(
    <View>
      <TextInput 
        placeholder="Usuario"
        onChangeText={setUser} />
      <TextInput 
        secureTextEntry={true}
        placeholder="Contresnha"
        onChangeText={setPassword} />
      <Button 
        title="Enviar"
        onPress={ () => { 
          console.log(`Usuario: ${user} Pass: ${password}`)
          navigation.navigate('Home')
        } }
      />
    </View>
  )
}

export default LoginForm