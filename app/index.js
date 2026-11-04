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
  { secao: 'visao', codigo: '01', titulo: 'VisÃ£o geral', texto: 'Proposta pedagÃ³gica' },
  { secao: 'docencia', codigo: '02', titulo: 'DocÃªncia', texto: 'Campos de atuaÃ§Ã£o' },
  { secao: 'gestao', codigo: '03', titulo: 'GestÃ£o escolar', texto: 'DireÃ§Ã£o e coordenaÃ§Ã£o' },
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
        <CabecalhoSecao indice="01" rotulo="Acesso rÃ¡pido" titulo="Pedagogia em um toque" />
        <Grade>
          {atalhos.map((a) => (
            <Atalho key={a.secao} {...a} />
          ))}
        </Grade>
      </View>

      <View style={styles.secao}>
        <CabecalhoSecao indice="02" rotulo="Em nÃºmeros" titulo="Uma instituiÃ§Ã£o de alto nÃ­vel" />
        <Grade>
          {estatisticas.map((e) => (
            <Estatistica key={e.rotulo} {...e} />
          ))}
        </Grade>
      </View>

      <View style={styles.secao}>
        <CabecalhoSecao
          indice="03"
          rotulo="PropÃ³sito"
          titulo="MissÃ£o e valores"
          subtitulo="EducaÃ§Ã£o cristÃ£ que desenvolve o ser humano por inteiro."
        />
        <Cartao destaque>
          <Rotulo>MissÃ£o</Rotulo>
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
          subtitulo={`${instituicao.local} Â· regiÃ£o metropolitana de BelÃ©m`}
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
        <CabecalhoSecao indice="05" rotulo="GraduaÃ§Ã£o presencial" titulo="Cursos" />
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
        {instituicao.nome} Â· {instituicao.endereco}
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
        <Text style={styles.statusTexto}>Vestibular online Â· {instituicao.site}</Text>
      </View>

      <Text style={styles.marca}>{instituicao.sigla}</Text>
      <Text style={styles.nomeInstituicao}>{instituicao.nome}</Text>
      <Text style={styles.chamada}>
        Formando educadores para transformar a <Text style={styles.chamadaDestaque}>AmazÃ´nia</Text> e o
        mundo.
      </Text>

      <View style={styles.selosHero}>
        <Etiqueta cor={cores.textoForte} borda={cores.primaria}>
          {pedagogia.conceitoMec}
        </Etiqueta>
        <Etiqueta cor={cores.texto} borda={cores.bordaForte}>
          Rede Adventista Â· 165 paÃ­ses
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
