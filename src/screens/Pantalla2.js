import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const foods = [
  { id: '1', name: 'Pollo asado', description: 'Pollo asado con tortilla frita', image: require('../img/pollo-asado.jpeg') },
  { id: '2', name: 'Sopa de tortilla', description: 'Sopa de tortilla del chef con crema', image: require('../img/Sopa-de-Tortillas.jpg') },
  { id: '3', name: 'Costilla de cerdo', description: 'Costilla de cerdo con arroz y tortilla a la leña', image: require('../img/costilla-cerdo.jpeg') },
  { id: '4', name: 'Pasta', description: 'Pasta con salsa alfredo', image: require('../img/pasta.jpg') },
  { id: '5', name: 'Lasaña', description: 'Lasaña de carne mejor que la de pollo', image: require('../img/lasaña-carne.jpg') },
  { id: '6', name: 'Hamburguesa', description: 'Hamburguesa del wendys melt', image: require('../img/melt-wendys.jpg') },
];

export default function FoodsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={foods}
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
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});
