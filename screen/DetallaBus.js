import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DetalleBus = ({ route }) => {
  const bus = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={bus.imagen} style={styles.image} />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>Origen:</Text>
            <Text style={styles.text}>{bus.origen}</Text>
          </View>

          <View style={styles.columnContainer}>
            <Text style={styles.label}>Destino:</Text>
            <Text style={styles.text}>{bus.destino}</Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <Text style={styles.label}>Fecha:</Text>
            <Text style={styles.text}>{bus.fecha}</Text>
          </View>

          <View style={styles.columnContainer}>
            <Text style={styles.label}>Hora:</Text>
            <Text style={styles.text}>{bus.hora}</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${bus.precio}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Seleccionar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.redCircle}></View>
      <View style={styles.yellowCircle}></View>
      <View style={styles.greenCircle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  imageContainer: {
    
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginLeft: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  columnContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
  priceContainer: {
    alignItems: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetalleBus;


