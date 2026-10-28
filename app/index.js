
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  return (
    <ScrollView
      style={styles.tela}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Cabeçalho principal */}
      <View style={styles.cabecalho}>
        <View style={styles.decoracao1} />
        <View style={styles.decoracao2} />

        <View style={styles.identidade}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logo-faama.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.textoIdentidade}>
            <Text style={styles.nomeInstituicao}>FAAMA</Text>
            <Text style={styles.nomeCompleto}>
              Faculdade Adventista
            </Text>
            <Text style={styles.nomeCompleto}>
              da Amazônia
            </Text>
          </View>
        </View>

        <View style={styles.divisor}>
          <View style={styles.divisorAzul} />
          <View style={styles.divisorRoxo} />
        </View>

        <Text style={styles.titulo}>
          Restaurante FAAMA
        </Text>

        <Text style={styles.subtitulo}>
          Alimentação, sabor e bem-estar
        </Text>

        <View style={styles.etiqueta}>
          <Ionicons
            name="restaurant-outline"
            size={15}
            color="#FFFFFF"
          />
          <Text style={styles.etiquetaTexto}>
            CARDÁPIO SEMANAL
          </Text>
        </View>
      </View>

      {/* Boas-vindas */}
      <View style={styles.cartao}>
        <View style={styles.iconeBoasVindas}>
          <Ionicons
            name="sunny-outline"
            size={27}
            color="#7C3AED"
          />
        </View>

        <Text style={styles.boasVindas}>
          Seja bem-vindo!
        </Text>

        <Text style={styles.descricao}>
          Consulte o cardápio semanal e descubra as
          opções de refeições disponíveis no restaurante.
        </Text>

        <View style={styles.destaque}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color="#2563EB"
          />

          <Text style={styles.instrucao}>
            Abra o menu lateral para escolher o dia da
            semana e visualizar as refeições.
          </Text>
        </View>
      </View>

      {/* Cartões informativos */}
      <Text style={styles.tituloSecao}>
        Explore o cardápio
      </Text>

      <View style={styles.listaCartoes}>
        <View style={styles.cartaoInformativo}>
          <View style={styles.iconeAzul}>
            <Ionicons
              name="fast-food-outline"
              size={25}
              color="#2563EB"
            />
          </View>

          <Text style={styles.tituloCartao}>
            Refeições
          </Text>

          <Text style={styles.textoCartao}>
            Confira as opções de cada dia.
          </Text>
        </View>

        <View style={styles.cartaoInformativo}>
          <View style={styles.iconeRoxo}>
            <Ionicons
              name="time-outline"
              size={25}
              color="#7C3AED"
            />
          </View>

          <Text style={styles.tituloCartao}>
            Horários
          </Text>

          <Text style={styles.textoCartao}>
            Organize sua rotina de refeições.
          </Text>
        </View>
      </View>

      {/* Rodapé */}
      <View style={styles.rodape}>
        <View style={styles.linhaRodape} />
        <Text style={styles.textoRodape}>
          Restaurante FAAMA
        </Text>
        <Text style={styles.credito}>
          Alimentação, sabor e bem-estar
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F5F7FF',
  },

  container: {
    padding: 18,
    paddingBottom: 35,
  },

  cabecalho: {
    backgroundColor: '#2563EB',
    padding: 22,
    paddingTop: 25,
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 22,
    elevation: 5,
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
  },

  decoracao1: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#3B82F6',
    top: -70,
    right: -35,
  },

  decoracao2: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#7C3AED',
    bottom: -65,
    right: 20,
    opacity: 0.8,
  },

  identidade: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoContainer: {
    width: 75,
    height: 75,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  textoIdentidade: {
    flex: 1,
    marginLeft: 15,
  },

  nomeInstituicao: {
    fontSize: 25,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1.5,
  },

  nomeCompleto: {
    fontSize: 11,
    color: '#DBEAFE',
    marginTop: 2,
  },

  divisor: {
    flexDirection: 'row',
    height: 4,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 22,
    marginBottom: 22,
  },

  divisorAzul: {
    flex: 2,
    backgroundColor: '#BFDBFE',
  },

  divisorRoxo: {
    flex: 1,
    backgroundColor: '#C4B5FD',
  },

  titulo: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: -0.6,
  },

  subtitulo: {
    fontSize: 14,
    color: '#DBEAFE',
    marginTop: 8,
    lineHeight: 21,
  },

  etiqueta: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7C3AED',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 20,
    marginTop: 20,
    gap: 7,
  },

  etiquetaTexto: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },

  cartao: {
    backgroundColor: '#FFFFFF',
    padding: 21,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E0E7FF',
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },

  iconeBoasVindas: {
    width: 52,
    height: 52,
    borderRadius: 17,
    backgroundColor: '#EDE9FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  boasVindas: {
    fontSize: 22,
    fontWeight: '800',
    color: '#172554',
    marginBottom: 10,
  },

  descricao: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 23,
  },

  destaque: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EFF6FF',
    borderRadius: 14,
    padding: 13,
    marginTop: 20,
    gap: 10,
  },

  instrucao: {
    flex: 1,
    fontSize: 13,
    color: '#1D4ED8',
    fontWeight: '600',
    lineHeight: 20,
  },

  tituloSecao: {
    fontSize: 20,
    fontWeight: '800',
    color: '#172554',
    marginBottom: 15,
  },

  listaCartoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  cartaoInformativo: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#E0E7FF',
  },

  iconeAzul: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  iconeRoxo: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: '#EDE9FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  tituloCartao: {
    fontSize: 14,
    fontWeight: '800',
    color: '#172554',
    marginBottom: 6,
  },

  textoCartao: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 18,
  },

  rodape: {
    alignItems: 'center',
    marginTop: 28,
  },

  linhaRodape: {
    width: 42,
    height: 4,
    backgroundColor: '#7C3AED',
    borderRadius: 5,
    marginBottom: 12,
  },

  textoRodape: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2563EB',
  },

  credito: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 5,
  },
});
