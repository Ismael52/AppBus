import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen2 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [errors, setErrors] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  const translateY = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // Configuración de animaciones
  const spinValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  

  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const slideIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email o Correo es Requerido!';
    }

    if (!password) {
      formErrors.password = 'Contraseña es Requerida!';
    }
    if (!selectedRole) {
      formErrors.selectedRole = 'Selecciona tu Rol!';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log('Campos validados correctamente');
      navigation.navigate('BuscarPasaje');
    }
  };
  const handleRegistrarse = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, { opacity: fadeAnim }]}
        source={require('../assets/Waju.png')}
      />
      <Animated.Text
        style={[styles.text2, { opacity: fadeAnim, transform: [{ translateY }] }]}
      >
        INICIA SECCION o REGISTRATE
      </Animated.Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <View style={styles.rolesContainer}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              selectedRole === 'user' && styles.selectedRoleButton,
            ]}
            onPress={() => {
              setSelectedRole('user');
              slideIn();
            }}
          >
            <Text style={styles.roleButtonText}>Usuario</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.roleButton,
              selectedRole === 'provider' && styles.selectedRoleButton,
            ]}
            onPress={() => {
              setSelectedRole('provider');
              slideIn();
            }}
          >
            <Text style={styles.roleButtonText}>Proveedor</Text>
          </TouchableOpacity>
        </View>
        {errors.selectedRole && (
          <Text style={styles.error}>{errors.selectedRole}</Text>
        )}

        <Animated.View
          style={[
            styles.roleExplanationContainer,
            {
              opacity: animatedValue,
              transform: [
                {
                  translateY: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 20],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.roleExplanationText}>
            {selectedRole === 'user' ? (
              <View style={{ alignItems: 'center' }}>
                <MaterialIcons
                  name="supervised-user-circle"
                  size={54}
                  color="black"
                  style={{ alignItems: 'center' }}
                />
                <Text style={styles.text}>'Podras buscar y Reservar pasajes'</Text>
              </View>
            ) : (
              <View style={{ alignItems: 'center' }}>
                <MaterialIcons
                  name="directions-bus"
                  size={54}
                  color="black"
                  style={{ alignItems: 'center' }}
                />
                <Text style={styles.text}>'Publica y Vende pasajes'</Text>
              </View>
            )}
          </View>
        </Animated.View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleRegistrarse}>
          <Text style={styles.loginButtonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  text2: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    marginTop: 30,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  rolesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  roleButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 5,
    alignItems: 'center',
  },
  selectedRoleButton: {
    backgroundColor: 'blue',
  },
  roleButtonText: {
    color: 'black',
  },
  roleExplanationContainer: {
    height: 50,
    marginBottom: 10,
  },
  roleExplanationText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 50,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen2;
