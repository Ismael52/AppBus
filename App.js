import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AplicacionBuses from './screen/AplicacionBuses';
import LoginScreen from './screen/Login';
import BuscarPasaje from './screen/BuscarPasaje';
import ListaPasaje from "./screen/ListaDePasaje"
import LoginScreen2 from './screen/Login2';
import RegisterScreen from './screen/RegisterScreen';
const Stack = createNativeStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Aplicacion De Buses" component={AplicacionBuses} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BuscarPasaje" component={BuscarPasaje} />
        <Stack.Screen name="ListaPasaje" component={ListaPasaje} />
        <Stack.Screen name="LoginScreen2" component={LoginScreen2} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
