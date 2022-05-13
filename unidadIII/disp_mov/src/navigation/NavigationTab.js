import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginForm from '../screens/Login'
import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

const NavigationTab = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginForm} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

export default NavigationTab