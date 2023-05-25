import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = () => {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [nroCarnet, setNroCarnet] = useState('');

  const handleFinalizar = () => {
    const datosPersonales = {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      fechaNacimiento,
      genero,
      correoElectronico,
      nroCarnet
    };
    console.log(datosPersonales);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos no Personales</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido Paterno"
        value={apellidoPaterno}
        onChangeText={setApellidoPaterno}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido Materno"
        value={apellidoMaterno}
        onChangeText={setApellidoMaterno}
      />

      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
      />

      <TextInput
        style={styles.input}
        placeholder="Género"
        value={genero}
        onChangeText={setGenero}
      />

      <TextInput
        style={styles.input}
        placeholder="Dirección de Correo Electrónico"
        value={correoElectronico}
        onChangeText={setCorreoElectronico}
      />

      <TextInput
        style={styles.input}
        placeholder="Nro. de Carnet"
        value={nroCarnet}
        onChangeText={setNroCarnet}
      />

      <TouchableOpacity style={styles.button} onPress={handleFinalizar}>
        <Text style={styles.buttonText}>Finalizado</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3f51b5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RegisterScreen;
