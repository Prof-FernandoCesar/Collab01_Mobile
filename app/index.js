import { useCallback } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CabecalhoSecao from '../components/ads/CabecalhoSecao';
import BarraTopo from '../components/comum/BarraTopo';
import CartaoAtalho from '../components/inicio/CartaoAtalho';
import CartaoCursoDestaque from '../components/inicio/CartaoCursoDestaque';
import NumeroResumo from '../components/inicio/NumeroResumo';
import {
  AREAS_ATUACAO,
  CURSO,
  DIFERENCIAIS,
  PERFIS_EGRESSO,
  SELOS,
} from '../dados/cursoAds';
import { ATALHOS } from '../dados/inicio';
import { cores, raio } from '../estilos/tema';

const RESUMO = [
  { valor: PERFIS_EGRESSO.length, rotulo: 'perfis de carreira' },
  { valor: AREAS_ATUACAO.length, rotulo: 'áreas de atuação' },
  { valor: DIFERENCIAIS.length, rotulo: 'diferenciais' },
];

export default function TelaInicio() {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const router = useRouter();

  const abrirMenu = useCallback(() => navigation.openDrawer?.(), [navigation]);
  const abrirCurso = useCallback(() => router.push('/ads'), [router]);
  const abrirSecao = useCallback(
    (secao) => router.push({ pathname: '/ads', params: { secao } }),
    [router],
  );

  return (
    <View style={styles.tela}>
      <StatusBar style="light" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottom + 48 }}
      >
        <View style={styles.conteudo}>
          <LinearGradient
            colors={[cores.azulProfundo, cores.fundo]}
            style={[styles.hero, { paddingTop: top + 12 }]}
          >
            <View style={styles.brilho} />
            <BarraTopo marca={CURSO.sigla} onMenu={abrirMenu} />

            <Text style={styles.sobretitulo}>Bem-vindo(a) à FAAMA</Text>
            <Text style={styles.titulo} accessibilityRole="header">
              Seu futuro em <Text style={styles.destaque}>tecnologia</Text> começa na FAAMA.
            </Text>
            <Text style={styles.subtitulo}>
              Descubra o curso, as carreiras e o mercado que esperam por você.
            </Text>
          </LinearGradient>

          <View style={styles.margem}>
            <CartaoCursoDestaque curso={CURSO} selos={SELOS} onAbrir={abrirCurso} />

            <View style={styles.resumo}>
              {RESUMO.map((item, indice) => (
                <View key={item.rotulo} style={styles.itemResumo}>
                  {indice > 0 && <View style={styles.divisor} />}
                  <NumeroResumo {...item} />
                </View>
              ))}
            </View>

            <View style={styles.secao}>
              <CabecalhoSecao numero="01" rotulo="Explore" titulo="Tudo sobre o curso" />
              <View style={styles.lista}>
                {ATALHOS.map((atalho) => (
                  <CartaoAtalho key={atalho.secao} {...atalho} onAbrir={abrirSecao} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
  },
  hero: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    overflow: 'hidden',
  },
  brilho: {
    position: 'absolute',
    top: -120,
    left: -100,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: cores.azul,
    opacity: 0.12,
  },
  sobretitulo: {
    fontSize: 12,
    fontWeight: '700',
    color: cores.ciano,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '800',
    color: cores.texto,
    letterSpacing: -1,
  },
  destaque: {
    color: cores.ciano,
  },
  subtitulo: {
    marginTop: 14,
    fontSize: 17,
    lineHeight: 25,
    color: cores.textoSuave,
  },
  margem: {
    paddingHorizontal: 20,
  },
  resumo: {
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 20,
    borderRadius: raio.grande,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.superficie,
  },
  itemResumo: {
    flex: 1,
    flexDirection: 'row',
  },
  divisor: {
    width: 1,
    backgroundColor: cores.borda,
  },
  secao: {
    marginTop: 48,
  },
  lista: {
    gap: 10,
  },
});
