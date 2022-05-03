import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/Login';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundoooooo!!</Text>
      <Text>Esto es un texto nuevo</Text>
      <LoginForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
