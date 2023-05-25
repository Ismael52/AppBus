import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const AplicacionBuses = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ImageBackground
      source={require('../assets/IncioFondo.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Animated.Image
          style={[styles.logo, { opacity: fadeAnim }]}
          source={require('../assets/Bus.png')}
        />
        <Text style={styles.title}>¡Bienvenido a la app de compra y reserva de buses!</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('LoginScreen2') }}>
            <Text style={styles.buttonText}>Comenzar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Agregado un fondo semitransparente
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Cambiado el color del texto a blanco
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3f51b5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AplicacionBuses;
