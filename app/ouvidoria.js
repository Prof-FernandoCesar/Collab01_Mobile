
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviar() {
    if (!nome || !email || !tipo || !mensagem) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    Alert.alert('Feedback enviado');
    setNome('');
    setEmail('');
    setTipo('');
    setMensagem('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Fale Conosco</Text>

      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      
      <View style={styles.tipos}>
        {['Elogio', 'Sugestão', 'Reclamação'].map((item) => (
          <Text
            key={item}
            style={[
              styles.tipo,
              tipo === item && styles.selecionado,
            ]}
            onPress={() => setTipo(item)}
          >
            {item}
          </Text>
        ))}
      </View>

      <Text>Mensagem:</Text>
      <TextInput
        style={[styles.input, styles.mensagem]}
        placeholder="Digite sua mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
      />

      <Button title="Enviar  feedback" onPress={enviar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  tipos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  tipo: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: '#2563eb',
    fontWeight: 'bold',
  },
  selecionado: {
    backgroundColor: '#bfdbfe',
    borderColor: '#2563eb',
  },
  mensagem: {
    height: 90,
    textAlignVertical: 'top',
  },
});
