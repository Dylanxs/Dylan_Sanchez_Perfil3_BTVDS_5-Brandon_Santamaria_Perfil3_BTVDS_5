import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* Importación de las dependencias para crear la navegación */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Importación de las pantallas */
import Pantalla1 from './src/screens/Pantalla1';
import Pantalla2 from './src/screens/Pantalla2';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Estudiantes" component={Pantalla1} />
        <Tab.Screen name="Comida favorita" component={Pantalla2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
