import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import LoginForm from '../screens/Login'
import Home from '../screens/Home'

const Drawer = createDrawerNavigator()

const NavigationDrawer = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={LoginForm} />
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  )
}

export default NavigationDrawer