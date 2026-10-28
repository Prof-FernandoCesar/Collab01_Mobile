
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

import { cardapio, horarios } from '../data/cardapio';

const secoes = [
  { chave: 'cafe', titulo: 'Café da manhã', horario: horarios.cafe },
  { chave: 'almoco', titulo: 'Almoço', horario: horarios.almoco },
  { chave: 'jantar', titulo: 'Jantar', horario: horarios.jantar },
];

export default function TelaCardapio({ dia }) {
  const refeicoes = cardapio[dia];

  if (!refeicoes) {
    return <Text>Cardápio não encontrado.</Text>;
  }

  return (
    <ScrollView
      style={styles.tela}
      contentContainerStyle={styles.conteudo}
      showsVerticalScrollIndicator={false}
    >
      {/* Cabeçalho visual */}
      <View style={styles.cabecalhoPrincipal}>
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
          Sabor e bem-estar
        </Text>

        <Text style={styles.slogan}>
          Alimentação que faz bem para você.
        </Text>

        <View style={styles.etiqueta}>
          <Text style={styles.etiquetaTexto}>
            CARDÁPIO DA SEMANA
          </Text>
        </View>
      </View>

      <Text style={styles.subtitulo}>
        Confira as opções disponíveis em cada refeição.
      </Text>

      {secoes.map((secao) => {
        const alimentos = refeicoes[secao.chave] || [];

        return (
          <View key={secao.chave} style={styles.secao}>
            <View style={styles.cabecalhoSecao}>
              <View style={styles.indicador} />

              <View style={styles.informacoesSecao}>
                <Text style={styles.titulo}>{secao.titulo}</Text>
                <Text style={styles.horario}>
                  {secao.horario}
                </Text>
              </View>
            </View>

            <View style={styles.lista}>
              {alimentos.map((alimento, indice) => (
                <View
                  key={`${alimento.nome}-${indice}`}
                  style={styles.card}
                >
                  {alimento.imagem ? (
                    <Image
                      source={alimento.imagem}
                      style={styles.foto}
                      resizeMode="cover"
                    />
                  ) : (
                    <View style={styles.fotoSemImagem}>
                      <Text style={styles.textoSemImagem}>
                        {alimento.nome}
                      </Text>
                    </View>
                  )}

                  <View style={styles.textos}>
                    <Text style={styles.nome}>{alimento.nome}</Text>

                    {alimento.descricao ? (
                      <Text style={styles.descricao}>
                        {alimento.descricao}
                      </Text>
                    ) : null}
                  </View>
                </View>
              ))}
            </View>
          </View>
        );
      })}

      <View style={styles.rodape}>
        <View style={styles.rodapeDetalhe} />

        <Text style={styles.aviso}>
          Cardápio ilustrativo. Consulte a instituição para confirmar
          as opções servidas no dia.
        </Text>

        <Text style={styles.rodapeMarca}>
          FAAMA • Alimentação
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

  conteudo: {
    padding: 16,
    paddingBottom: 30,
  },

  cabecalhoPrincipal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 22,
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
  width: 64,
  height: 64,
  borderRadius: 18,
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 8,
  overflow: 'hidden',
},

logo: {
  width: '100%',
  height: '100%',
},

  identidade: {
    flex: 1,
    marginLeft: 14,
  },

  nomeInstituicao: {
    fontSize: 23,
    fontWeight: '900',
    color: '#2563EB',
    letterSpacing: 1,
  },

  textoInstituicao: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 3,
  },

  linhaDecorativa: {
    flexDirection: 'row',
    height: 4,
    marginTop: 20,
    marginBottom: 20,
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
    fontSize: 27,
    fontWeight: '900',
    color: '#172554',
    letterSpacing: -0.6,
  },

  slogan: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 7,
    lineHeight: 21,
  },

  etiqueta: {
    alignSelf: 'flex-start',
    backgroundColor: '#EDE9FE',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 18,
  },

  etiquetaTexto: {
    color: '#6D28D9',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },

  subtitulo: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 22,
    lineHeight: 21,
  },

  secao: {
    marginBottom: 28,
  },

  cabecalhoSecao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  indicador: {
    width: 5,
    height: 43,
    borderRadius: 5,
    backgroundColor: '#7C3AED',
    marginRight: 12,
  },

  informacoesSecao: {
    flex: 1,
  },

  titulo: {
    fontSize: 21,
    fontWeight: '800',
    color: '#172554',
  },

  horario: {
    marginTop: 4,
    fontSize: 13,
    color: '#64748B',
  },

  lista: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48.5%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E9F8',
    elevation: 3,
    shadowColor: '#172554',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
  },

  foto: {
    width: '100%',
    height: 125,
    backgroundColor: '#E8EDFF',
  },

  fotoSemImagem: {
    width: '100%',
    height: 125,
    backgroundColor: '#EDE9FE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  textoSemImagem: {
    color: '#6D28D9',
    fontWeight: '600',
    textAlign: 'center',
  },

  textos: {
    padding: 12,
    minHeight: 58,
  },

  nome: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1E3A8A',
  },

  descricao: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 6,
    lineHeight: 18,
  },

  rodape: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 12,
  },

  rodapeDetalhe: {
    width: 42,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#7C3AED',
    marginBottom: 14,
  },

  aviso: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 19,
  },

  rodapeMarca: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2563EB',
    marginTop: 12,
  },
});
