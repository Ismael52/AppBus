import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

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
        origen: 'Santa Cruz',
        destino: 'La Paz',
        fecha: '2023-06-01',
        hora: '10:00',
        precio: 150,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '3',
        origen: 'Santa Cruz',
        destino: 'La Paz',
        fecha: '2023-06-01',
        hora: '10:00',
        precio: 200,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '4',
        origen: 'Santa Cruz',
        destino: 'La Paz',
        fecha: '2023-06-01',
        hora: '10:00',
        precio: 200,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '5',
        origen: 'Santa Cruz',
        destino: 'La Paz',
        fecha: '2023-06-01',
        hora: '10:00',
        precio: 200,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '6',
        origen: 'Santa Cruz',
        destino: 'La Paz',
        fecha: '2023-06-01',
        hora: '10:00',
        precio: 200,
        imagen: require('../assets/Bus.png'),
    }, {
        id: '7',
        origen: 'Santa Cruz',
        destino: 'La Paz',
        fecha: '2023-06-01',
        hora: '10:00',
        precio: 200,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '8',
        origen: 'Santa Cruz',
        destino: 'La Paz',
        fecha: '2023-06-01',
        hora: '10:00',
        precio: 200,
        imagen: require('../assets/Bus.png'),
    }, {
        id: '9',
        origen: 'Santa Cruz',
        destino: 'La Paz',
        fecha: '2023-06-01',
        hora: '10:00',
        precio: 200,
        imagen: require('../assets/Bus.png'),
    },
    {
        id: '10',
        origen: 'Santa Cruz',
        destino: 'La Paz',
        fecha: '2023-06-01',
        hora: '10:00',
        precio: 200,
        imagen: require('../assets/Bus.png'),
    }
    // ...otros objetos del JSON
];
const BusquedaPasajes = ({ navigation }) => {


    const Item = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.imagen} style={styles.imagen} />
            <View style={styles.contenido}>
                <Text style={styles.texto}>{item.origen} - {item.destino}</Text>
                <Text style={styles.texto}>{item.fecha} {item.hora}</Text>
                <Text style={styles.texto}>Precio: {item.precio}</Text>
            </View>
        </View>
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
