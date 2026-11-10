
import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import TelaCardapio from '../components/TelaCardapio';

const dias = [
  { chave: 'segunda', nome: 'Segunda' },
  { chave: 'terca', nome: 'Terça' },
  { chave: 'quarta', nome: 'Quarta' },
  { chave: 'quinta', nome: 'Quinta' },
  { chave: 'sexta', nome: 'Sexta' },
  { chave: 'sabado', nome: 'Sábado' },
  { chave: 'domingo', nome: 'Domingo' },
];

export default function Cardapio() {
  const [diaSelecionado, setDiaSelecionado] = useState(null);

  return (
    <View style={styles.tela}>

      {/* Cabeçalho fixo da FAAMA */}
      <View style={styles.cabecalho}>
        <View style={styles.linhaLogo}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo-faama.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.identidade}>
            <Text style={styles.nomeInstituicao}>FAAMA</Text>
            <Text style={styles.textoInstituicao}>
              Faculdade Adventista da Amazônia
            </Text>
          </View>
        </View>

        <View style={styles.linhaDecorativa}>
          <View style={styles.linhaAzul} />
          <View style={styles.linhaRoxa} />
        </View>

        <Text style={styles.tituloPrincipal}>
          Restaurante FAAMA
        </Text>

        <Text style={styles.slogan}>
          Alimentação, sabor e bem-estar.
        </Text>
      </View>

      {/* Seleção dos dias */}
      <View style={styles.seletor}>
        <Text style={styles.titulo}>
          Cardápio semanal
        </Text>

        <Text style={styles.subtitulo}>
          Selecione um dia para visualizar as refeições.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listaDias}
        >
          {dias.map((dia) => {
            const selecionado = diaSelecionado === dia.chave;

            return (
              <Pressable
                key={dia.chave}
                style={[
                  styles.botaoDia,
                  selecionado && styles.botaoSelecionado,
                ]}
                onPress={() => setDiaSelecionado(dia.chave)}
              >
                <Text
                  style={[
                    styles.textoBotao,
                    selecionado && styles.textoSelecionado,
                  ]}
                >
                  {dia.nome}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* Refeições do dia escolhido */}
      <View style={styles.resultado}>
        {diaSelecionado ? (
          <TelaCardapio dia={diaSelecionado} />
        ) : (
          <View style={styles.mensagemInicial}>
            <Text style={styles.textoInicial}>
              Escolha um dia da semana para conferir o cardápio.
            </Text>
          </View>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F5F7FF',
  },

  cabecalho: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 14,
    padding: 17,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E4E7F5',
    elevation: 4,
    shadowColor: '#283593',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  linhaLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoContainer: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    overflow: 'hidden',
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  identidade: {
    flex: 1,
    marginLeft: 12,
  },

  nomeInstituicao: {
    fontSize: 22,
    fontWeight: '900',
    color: '#2563EB',
  },

  textoInstituicao: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 3,
  },

  linhaDecorativa: {
    flexDirection: 'row',
    height: 4,
    marginTop: 15,
    marginBottom: 14,
    borderRadius: 4,
    overflow: 'hidden',
  },

  linhaAzul: {
    flex: 2,
    backgroundColor: '#2563EB',
  },

  linhaRoxa: {
    flex: 1,
    backgroundColor: '#7C3AED',
  },

  tituloPrincipal: {
    fontSize: 23,
    fontWeight: '900',
    color: '#172554',
  },

  slogan: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5,
  },

  seletor: {
    paddingTop: 18,
    paddingBottom: 12,
  },

  titulo: {
    fontSize: 21,
    fontWeight: '900',
    color: '#172554',
    paddingHorizontal: 16,
  },

  subtitulo: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5,
    marginBottom: 13,
    paddingHorizontal: 16,
  },

  listaDias: {
    paddingHorizontal: 16,
    gap: 9,
  },

  botaoDia: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E7FF',
    borderRadius: 12,
    minWidth: 88,
    minHeight: 42,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 13,
  },

  botaoSelecionado: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  textoBotao: {
    color: '#334155',
    fontSize: 12,
    fontWeight: '700',
  },

  textoSelecionado: {
    color: '#FFFFFF',
  },

  resultado: {
    flex: 1,
  },

  mensagemInicial: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  textoInicial: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 21,
  },
});
