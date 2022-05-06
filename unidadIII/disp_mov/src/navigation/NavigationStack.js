import React from 'react'
import LoginForm from '../screens/Login'
import Home from '../screens/Home'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const NavigationStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="LoginForm" component={LoginForm} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default NavigationStack