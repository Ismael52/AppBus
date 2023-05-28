import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const  BuscarPasaje=({navigation})=> {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [fecha, setFecha] = useState('');

  const handleBuscar = () => {
    // Aquí iría la lógica para buscar pasajes
    navigation.navigate("ListaPasaje")
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="bus-outline" size={40} color="#fff" />
        <Text style={styles.title}>Busca tu pasaje</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={24} color="#9CA3AF" />
          <TextInput
            style={styles.input}
            placeholder="Origen"
            placeholderTextColor="#9CA3AF"
            value={origen}
            onChangeText={setOrigen}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={24} color="#9CA3AF" />
          <TextInput
            style={styles.input}
            placeholder="Destino"
            placeholderTextColor="#9CA3AF"
            value={destino}
            onChangeText={setDestino}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="calendar-outline" size={24} color="#9CA3AF" />
          <TextInput
            style={styles.input}
            placeholder="Fecha"
            placeholderTextColor="#9CA3AF"
            value={fecha}
            onChangeText={setFecha}
          />
        </View>
        <TouchableOpacity style={styles.buscarButton} onPress={handleBuscar}>
          <Text style={styles.buscarButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF6B6B',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  form: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#9CA3AF',
    paddingVertical: 5,
    flex: 1,
  },
  buscarButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buscarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default BuscarPasaje;