import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

export default function GuiaCalouro() {
  const [tarefa1, setTarefa1] = useState(false)
  const [tarefa2, setTarefa2] = useState(false)
  const [tarefa3, setTarefa3] = useState(false)
  const [tarefa4, setTarefa4] = useState(false)
  const [tarefa5, setTarefa5] = useState(false)

  let feitas = 0

  if (tarefa1) {
    feitas = feitas + 1
  }
  if (tarefa2) {
    feitas = feitas + 1
  }
  if (tarefa3) {
    feitas = feitas + 1
  }
  if (tarefa4) {
    feitas = feitas + 1
  }
  if (tarefa5) {
    feitas = feitas + 1
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Guia do Calouro</Text>
      <Text style={styles.contador}>Tarefas concluídas: {feitas} de 5</Text>

      <TouchableOpacity
        style={styles.item}
        onPress={() => setTarefa1(!tarefa1)}
      >
        <Text style={styles.marca}>{tarefa1 ? '✓' : '✗'}</Text>
        <Text style={tarefa1 ? styles.textoFeito : styles.texto}>
          Entregar os documentos na secretaria
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => setTarefa2(!tarefa2)}
      >
        <Text style={styles.marca}>{tarefa2 ? '✓' : '✗'}</Text>
        <Text style={tarefa2 ? styles.textoFeito : styles.texto}>
          Fazer a carteirinha estudantil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => setTarefa3(!tarefa3)}
      >
        <Text style={styles.marca}>{tarefa3 ? '✓' : '✗'}</Text>
        <Text style={tarefa3 ? styles.textoFeito : styles.texto}>
          Conhecer a biblioteca
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => setTarefa4(!tarefa4)}
      >
        <Text style={styles.marca}>{tarefa4 ? '✓' : '✗'}</Text>
        <Text style={tarefa4 ? styles.textoFeito : styles.texto}>
          Acessar o sistema acadêmico
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => setTarefa5(!tarefa5)}
      >
        <Text style={styles.marca}>{tarefa5 ? '✓' : '✗'}</Text>
        <Text style={tarefa5 ? styles.textoFeito : styles.texto}>
          Falar com o orientador do curso
        </Text>
      </TouchableOpacity>

      {feitas === 5 && (
        <Text style={styles.mensagemFinal}>
          Parabéns! Você está pronto para começar as aulas!
        </Text>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2563eb',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  contador: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#64748b',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
  },
  marca: {
    fontSize: 20,
    marginRight: 12,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  textoFeito: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  mensagemFinal: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
})
