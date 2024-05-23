import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const students = [
  { id: '1', name: 'Brandon Daniel Sanchez Santamaria', carnet: '20220632', image: require('../img/brandon_perfil.jpg') },
  { id: '2', name: 'Dylan Alexander Sanchez Cordova', carnet: '20220537', image: require('../img/dylanperfil.jpg') }, // Reemplaza 'otroestudiante.jpg' con el nombre correcto de la imagen del segundo estudiante
];

export default function StudentsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.carnet}>{item.carnet}</Text>
    </View>
  );

  return (
    <FlatList
      data={students}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  carnet: {
    fontSize: 16,
    color: '#666',
  },
});
