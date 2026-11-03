import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  Linking,
  Alert,
  StyleSheet,
  Platform,
  useWindowDimensions
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const COR_PRIMARIA = '#1A237E'
const COR_DESTAQUE = '#FC6B4F'
const COR_FUNDO = '#F8FAFC'
const COR_CARTAO = '#FFFFFF'
const COR_TEXTO = '#1E293B'
const COR_TEXTO_SECUNDARIO = '#475569'

// Faixas empilhadas que simulam um gradiente escuro na base da foto
const QUANTIDADE_FAIXAS = 20
const OPACIDADE_MAXIMA = 0.8
const OPACIDADES_GRADIENTE = []
for (let i = 0; i < QUANTIDADE_FAIXAS; i++) {
  OPACIDADES_GRADIENTE.push(((i / (QUANTIDADE_FAIXAS - 1)) * OPACIDADE_MAXIMA).toFixed(3))
}

const ACESSOS_RAPIDOS = [
  { emoji: '🎓', rotulo: 'Vestibular', url: 'https://portal.apprbs.com.br/faama-graduacao' },
  { emoji: '📚', rotulo: 'Pós-Graduação', url: 'https://www.faama.edu.br/pos-graduacao/' },
  { emoji: '🏠', rotulo: 'Residencial', url: 'https://internato.faama.edu.br/' },
  { emoji: '📰', rotulo: 'Notícias', url: 'https://noticias.adventistas.org/pt/busca/?q=faama' },
  { emoji: '💬', rotulo: 'Ouvidoria', rota: '/ouvidoria' },
  { emoji: '✉️', rotulo: 'Contato', url: 'mailto:contato@faama.edu.br' }
]

// Agrupa os acessos em linhas de 2 para montar a grade 2×3
const LINHAS_ACESSOS = []
for (let i = 0; i < ACESSOS_RAPIDOS.length; i += 2) {
  LINHAS_ACESSOS.push(ACESSOS_RAPIDOS.slice(i, i + 2))
}

async function abrirLink(url) {
  try {
    await Linking.openURL(url)
  } catch {
    Alert.alert('Não foi possível abrir', 'Verifique sua conexão ou tente novamente mais tarde.')
  }
}

export default function index() {
  const navigation = useNavigation()
  const router = useRouter()
  const { width: largura } = useWindowDimensions()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: COR_PRIMARIA },
      headerShadowVisible: false
    })
  }, [navigation])

  function abrirAcesso(acesso) {
    if (acesso.rota) {
      router.push(acesso.rota)
    } else {
      abrirLink(acesso.url)
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <StatusBar style="light" />

      <View style={styles.capa}>
        <Image
          source={require('../assets/campus-faama.jpg')}
          style={styles.imagem}
          resizeMode="cover"
        />
        <View style={styles.gradiente} pointerEvents="none">
          {OPACIDADES_GRADIENTE.map((opacidade) => (
            <View
              key={opacidade}
              style={[styles.faixaGradiente, { backgroundColor: `rgba(0, 0, 0, ${opacidade})` }]}
            />
          ))}
        </View>
        <View style={styles.textosCapa}>
          <Text style={[styles.titulo, largura < 360 && styles.tituloCompacto]}>
            Bem-vindo à FAAMA
          </Text>
          <Text style={styles.subtitulo}>Faculdade Adventista da Amazônia</Text>
        </View>
      </View>

      <View style={[styles.dicaMenu, styles.sombra]}>
        <Text style={styles.iconeDica}>☰</Text>
        <Text style={styles.textoDica}>
          Toque no menu ou arraste da borda esquerda para ver todas as seções do app
        </Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.tituloSecao}>Acesso rápido</Text>
        <View style={styles.marcadorSecao} />

        {LINHAS_ACESSOS.map((linha) => (
          <View key={linha[0].rotulo} style={styles.linhaGrade}>
            {linha.map((acesso) => (
              <Pressable
                key={acesso.rotulo}
                onPress={() => abrirAcesso(acesso)}
                accessibilityRole={acesso.rota ? 'button' : 'link'}
                accessibilityLabel={acesso.rotulo}
                style={({ pressed }) => [
                  styles.cartao,
                  styles.sombra,
                  pressed && styles.cartaoPressionado
                ]}
              >
                <Text style={styles.emojiCartao}>{acesso.emoji}</Text>
                <Text style={styles.rotuloCartao}>{acesso.rotulo}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </View>

      <Text style={styles.rodape}>Versão 1.0.0 · contato@faama.edu.br</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_FUNDO
  },
  conteudo: {
    flexGrow: 1
  },
  capa: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: COR_PRIMARIA
  },
  imagem: {
    width: '100%',
    height: '100%'
  },
  gradiente: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '40%'
  },
  faixaGradiente: {
    flex: 1
  },
  textosCapa: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    paddingBottom: 24
  },
  titulo: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  tituloCompacto: {
    fontSize: 20,
    lineHeight: 24
  },
  subtitulo: {
    fontSize: 15,
    lineHeight: 20,
    color: 'rgba(255, 255, 255, 0.85)'
  },
  sombra: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8
    },
    android: {
      elevation: 2
    },
    default: {}
  }),
  dicaMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: COR_CARTAO
  },
  iconeDica: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COR_DESTAQUE
  },
  textoDica: {
    flex: 1,
    marginLeft: 16,
    fontSize: 13,
    lineHeight: 18,
    color: COR_TEXTO_SECUNDARIO
  },
  secao: {
    paddingHorizontal: 16,
    paddingTop: 32
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COR_TEXTO
  },
  marcadorSecao: {
    width: 32,
    height: 4,
    borderRadius: 2,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: COR_DESTAQUE
  },
  linhaGrade: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16
  },
  cartao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: COR_CARTAO
  },
  cartaoPressionado: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }]
  },
  emojiCartao: {
    fontSize: 32
  },
  rotuloCartao: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '600',
    color: COR_TEXTO,
    textAlign: 'center'
  },
  rodape: {
    marginTop: 'auto',
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
    fontSize: 12,
    color: COR_TEXTO_SECUNDARIO,
    textAlign: 'center'
  }
})
