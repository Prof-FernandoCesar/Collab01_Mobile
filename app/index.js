import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const COR_DESTAQUE = 'rgba(6, 3, 207, 0.87)'

export default function index() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Bem-vindo à FAAMA</Text>
        <Text style={styles.subtitulo}>Faculdade Adventista da Amazônia</Text>
      </View>

      <Image
        source={require('../assets/campus-faama.png')}
        style={styles.imagem}
        resizeMode="cover"
      />

      <View style={styles.informativo}>
        <Text style={styles.textoInformativo}>
          Use o menu deslizante para navegar pelo app: toque no ícone ☰ no canto
          superior esquerdo ou arraste a partir da borda esquerda da tela. Lá você
          encontra os cursos, os serviços e as informações do campus.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  conteudo: {
    paddingBottom: 32
  },
  cabecalho: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 20,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COR_DESTAQUE,
    textAlign: 'center'
  },
  subtitulo: {
    marginTop: 6,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center'
  },
  imagem: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9
  },
  informativo: {
    marginHorizontal: 20,
    marginTop: 24,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: COR_DESTAQUE,
    backgroundColor: '#f1f5f9',
    borderRadius: 8
  },
  textoInformativo: {
    fontSize: 16,
    lineHeight: 24,
    color: '#334155'
  }
})
