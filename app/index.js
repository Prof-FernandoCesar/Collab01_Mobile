<<<<<<< Updated upstream
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
=======
import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { cores, espaco, raio, fonteMono } from '../constantes/tema';
import {
  FundoTech,
  Rotulo,
  CabecalhoSecao,
  Cartao,
  Selo,
  Etiqueta,
  Estatistica,
  Botao,
  Grade,
  Rodape,
} from '../componentes/interface';
import {
  instituicao,
  estatisticas,
  valores,
  infraestrutura,
  cursosGraduacao,
  pedagogia,
} from '../dados/faama';

const atalhos = [
  { secao: 'visao', codigo: '01', titulo: 'Visão geral', texto: 'Proposta pedagógica' },
  { secao: 'docencia', codigo: '02', titulo: 'Docência', texto: 'Campos de atuação' },
  { secao: 'gestao', codigo: '03', titulo: 'Gestão escolar', texto: 'Direção e coordenação' },
  { secao: 'matriz', codigo: '04', titulo: 'Matriz', texto: '8 semestres' },
];

function useAbrirPedagogia() {
  const router = useRouter();
  return (secao) => router.navigate(secao ? { pathname: '/pedagogia', params: { secao } } : '/pedagogia');
}

export default function Inicio() {
  const abrirPedagogia = useAbrirPedagogia();
  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Hero />

      <View style={styles.secao}>
        <CabecalhoSecao indice="01" rotulo="Acesso rápido" titulo="Pedagogia em um toque" />
        <Grade>
          {atalhos.map((a) => (
            <Atalho key={a.secao} {...a} />
          ))}
        </Grade>
      </View>

      <View style={styles.secao}>
        <CabecalhoSecao indice="02" rotulo="Em números" titulo="Uma instituição de alto nível" />
        <Grade>
          {estatisticas.map((e) => (
            <Estatistica key={e.rotulo} {...e} />
          ))}
        </Grade>
      </View>

      <View style={styles.secao}>
        <CabecalhoSecao
          indice="03"
          rotulo="Propósito"
          titulo="Missão e valores"
          subtitulo="Educação cristã que desenvolve o ser humano por inteiro."
        />
        <Cartao destaque>
          <Rotulo>Missão</Rotulo>
          <Text style={styles.citacao}>{instituicao.missao}</Text>
        </Cartao>
        <View style={styles.listaValores}>
          {valores.map((v, i) => (
            <View key={v.nome} style={styles.valor}>
              <Text style={styles.valorIndice}>{String(i + 1).padStart(2, '0')}</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.valorNome}>{v.nome}</Text>
                <Text style={styles.valorTexto}>{v.texto}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.secao}>
        <CabecalhoSecao
          indice="04"
          rotulo="Infraestrutura"
          titulo="Campus feito para aprender"
          subtitulo={`${instituicao.local} · região metropolitana de Belém`}
        />
        {infraestrutura.map((item) => (
          <Cartao key={item.sigla} style={styles.infra}>
            <Selo texto={item.sigla} />
            <View style={styles.infraTextos}>
              <Text style={styles.infraTitulo}>{item.titulo}</Text>
              <Text style={styles.infraTexto}>{item.texto}</Text>
            </View>
          </Cartao>
        ))}
      </View>

      <View style={styles.secao}>
        <CabecalhoSecao indice="05" rotulo="Graduação presencial" titulo="Cursos" />
        <View style={styles.etiquetas}>
          {cursosGraduacao.map((c) => (
            <Etiqueta
              key={c}
              cor={c === 'Pedagogia' ? cores.destaque : cores.texto}
              borda={c === 'Pedagogia' ? cores.destaque : cores.bordaForte}
            >
              {c}
            </Etiqueta>
          ))}
        </View>
        <Botao titulo="Explorar o curso de Pedagogia" onPress={() => abrirPedagogia()} />
      </View>

      <Rodape>
        {instituicao.nome} · {instituicao.endereco}
        {'\n'}Fontes: faama.edu.br, PPC e Matriz Pedagogia 2023.
      </Rodape>
    </ScrollView>
  );
}

function Hero() {
  const abrirPedagogia = useAbrirPedagogia();
  return (
    <View style={styles.hero}>
      <FundoTech />
      <View style={styles.status}>
        <View style={styles.statusPonto} />
        <Text style={styles.statusTexto}>Vestibular online · {instituicao.site}</Text>
      </View>

      <Text style={styles.marca}>{instituicao.sigla}</Text>
      <Text style={styles.nomeInstituicao}>{instituicao.nome}</Text>
      <Text style={styles.chamada}>
        Formando educadores para transformar a <Text style={styles.chamadaDestaque}>Amazônia</Text> e o
        mundo.
      </Text>

      <View style={styles.selosHero}>
        <Etiqueta cor={cores.textoForte} borda={cores.primaria}>
          {pedagogia.conceitoMec}
        </Etiqueta>
        <Etiqueta cor={cores.texto} borda={cores.bordaForte}>
          Rede Adventista · 165 países
        </Etiqueta>
      </View>

      <View style={styles.acoes}>
        <Botao titulo="Conhecer Pedagogia" onPress={() => abrirPedagogia()} />
        <Botao titulo="Ver matriz curricular" variante="secundario" onPress={() => abrirPedagogia('matriz')} />
      </View>
    </View>
  );
}

function Atalho({ secao, codigo, titulo, texto }) {
  const abrirPedagogia = useAbrirPedagogia();
  return (
    <Pressable
      onPress={() => abrirPedagogia(secao)}
      accessibilityRole="button"
      style={({ pressed }) => [styles.atalho, pressed && styles.atalhoPressionado]}
    >
      <Text style={styles.atalhoCodigo}>{codigo}</Text>
      <Text style={styles.atalhoTitulo}>{titulo}</Text>
      <Text style={styles.atalhoTexto}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    paddingBottom: 40,
  },
  hero: {
    paddingHorizontal: espaco.tela,
    paddingTop: 36,
    paddingBottom: 28,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(52, 211, 153, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(52, 211, 153, 0.35)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 22,
  },
  statusPonto: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: cores.sucesso,
    marginRight: 7,
  },
  statusTexto: {
    fontFamily: fonteMono,
    fontSize: 11,
    color: cores.sucesso,
    letterSpacing: 0.5,
  },
  marca: {
    fontSize: 64,
    fontWeight: '900',
    color: cores.textoForte,
    letterSpacing: 6,
    lineHeight: 70,
  },
  nomeInstituicao: {
    fontFamily: fonteMono,
    fontSize: 12,
    color: cores.destaque,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginTop: 4,
  },
  chamada: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '600',
    color: cores.texto,
    marginTop: 18,
  },
  chamadaDestaque: {
    color: cores.primaria,
    fontWeight: '800',
  },
  selosHero: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  acoes: {
    marginTop: 18,
  },
  secao: {
    paddingHorizontal: espaco.tela,
    marginTop: espaco.secao,
  },
  atalho: {
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.medio,
    padding: 14,
    minHeight: 118,
  },
  atalhoPressionado: {
    borderColor: cores.destaque,
    backgroundColor: cores.superficieAlta,
  },
  atalhoCodigo: {
    fontFamily: fonteMono,
    fontSize: 11,
    color: cores.primaria,
    letterSpacing: 1,
  },
  atalhoTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: cores.textoForte,
    marginTop: 16,
  },
  atalhoTexto: {
    fontSize: 12,
    color: cores.textoSuave,
    marginTop: 3,
  },
  citacao: {
    fontSize: 16,
    lineHeight: 25,
    color: cores.texto,
    marginTop: 10,
  },
  listaValores: {
    marginTop: 14,
  },
  valor: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: cores.borda,
  },
  valorIndice: {
    fontFamily: fonteMono,
    fontSize: 12,
    color: cores.primaria,
    width: 34,
    marginTop: 2,
  },
  valorNome: {
    fontSize: 15,
    fontWeight: '700',
    color: cores.textoForte,
  },
  valorTexto: {
    fontSize: 13,
    lineHeight: 19,
    color: cores.textoSuave,
    marginTop: 2,
  },
  infra: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infraTextos: {
    flex: 1,
    marginLeft: 14,
  },
  infraTitulo: {
    fontSize: 15,
    fontWeight: '700',
    color: cores.textoForte,
  },
  infraTexto: {
    fontSize: 13,
    lineHeight: 19,
    color: cores.textoSuave,
    marginTop: 2,
  },
  etiquetas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
});
>>>>>>> Stashed changes
