import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
    {
        id: '1',
        origen: 'Santa Cruz',
        destino: 'La Paz',
        fecha: '2023-06-01',
        hora: '10:00',
        precio: 100,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '2',
        origen: 'Cochabamba',
        destino: 'Oruro',
        fecha: '2023-06-01',
        hora: '11:00',
        precio: 250,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '3',
        origen: 'Potosí',
        destino: 'Sucre',
        fecha: '2023-06-01',
        hora: '12:00',
        precio: 180,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '4',
        origen: 'Tarija',
        destino: 'Chuquisaca',
        fecha: '2023-06-01',
        hora: '13:00',
        precio: 350,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '5',
        origen: 'Beni',
        destino: 'Pando',
        fecha: '2023-06-01',
        hora: '14:00',
        precio: 300,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '6',
        origen: 'Oruro',
        destino: 'Cochabamba',
        fecha: '2023-06-01',
        hora: '15:00',
        precio: 200,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '7',
        origen: 'La Paz',
        destino: 'Santa Cruz',
        fecha: '2023-06-01',
        hora: '16:00',
        precio: 280,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '8',
        origen: 'Chuquisaca',
        destino: 'Tarija',
        fecha: '2023-06-01',
        hora: '17:00',
        precio: 400,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '9',
        origen: 'Pando',
        destino: 'Beni',
        fecha: '2023-06-01',
        hora: '18:00',
        precio: 420,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '10',
        origen: 'Sucre',
        destino: 'Potosí',
        fecha: '2023-06-01',
        hora: '19:00',
        precio: 300,
        imagen: require('../assets/Bus.png'),
    }
];

// Ordenar los precios de forma ascendente
data.sort((a, b) => a.precio - b.precio);

const BusquedaPasajes = ({ navigation }) => {
    const handleBusPress = (item) => {
        navigation.navigate('DetalleBus', item);
    };

    const Item = ({ item }) => (
        <TouchableOpacity onPress={() => handleBusPress(item)}>
            <View style={styles.item}>
                <Image source={item.imagen} style={styles.imagen} />
                <View style={styles.contenido}>
                    <Text style={styles.texto}>{item.origen} - {item.destino}</Text>
                    <Text style={styles.texto}>{item.fecha} {item.hora}</Text>
                    <Text style={styles.texto}>Precio: {item.precio}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => <Item item={item} />;

    return (
        <View style={styles.contenedor}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    imagen: {
        width: 80,
        height: 80,
        marginRight: 20,
        borderRadius: 10,
    },
    contenido: {
        flex: 1,
    },
    texto: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});
export default BusquedaPasajes;
