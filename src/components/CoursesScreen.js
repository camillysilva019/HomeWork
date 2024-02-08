// src/screens/CoursesScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const CoursesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
      <Text>Título do Curso 1</Text>
      <Text>Descrição detalhada do Curso 1</Text>
      <Text>Título do Curso 2</Text>
      <Text>Descrição detalhada do Curso 2</Text>
      <Text>Título do Curso 3</Text>
      <Text>Descrição detalhada do Curso 3</Text>
    </View>
  );
};

export default CoursesScreen;
