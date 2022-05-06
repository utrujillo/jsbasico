import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import NavigationStack from './src/navigation/NavigationStack'

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});