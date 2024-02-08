// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import ContactScreen from './src/screens/ContactScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="auto" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'darkgrey',
          style: { backgroundColor: 'white' },
          labelStyle: { fontSize: 16 },
        }}
      >
        <Tab.Screen
          name="Início"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />,
          }}
        />
        <Tab.Screen
          name="Cursos"
          component={CoursesScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="book" size={24} color={color} />,
          }}
        />
        <Tab.Screen
          name="Contato"
          component={ContactScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="envelope" size={24} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
