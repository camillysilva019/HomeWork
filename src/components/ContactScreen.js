// src/screens/ContactScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ContactScreen = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSend = () => {
    // Aqui você pode implementar a lógica para enviar a mensagem
    alert('Mensagem enviada!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey' }}>
      <Text>Título</Text>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Mensagem"
        style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginBottom: 10, width: 200 }}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginBottom: 10, width: 200 }}
      />
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Telefone"
        style={{ borderWidth: 1, borderColor: 'grey', padding: 10, marginBottom: 10, width: 200 }}
      />
      <Button title="Enviar" onPress={handleSend} />
    </View>
  );
};

export default ContactScreen;
