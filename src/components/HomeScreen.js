// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
      <Image source={require('../assets/senai_logo.png')} style={{ width: 200, height: 100 }} />
      <Text>Nome do Aluno</Text>
      <Text>Data atual - Nome da Cidade</Text>
      <Text>Nome da Escola</Text>
      <Text>Nome do Curso</Text>
      <Text>Nome da Unidade Curricular</Text>
    </View>
  );
};

export default HomeScreen;
