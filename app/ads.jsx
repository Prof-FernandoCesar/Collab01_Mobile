import { useCallback, useMemo, useRef } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { useFocusEffect, useLocalSearchParams, useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CabecalhoSecao from '../components/ads/CabecalhoSecao';
import CartaoEstatistica from '../components/ads/CartaoEstatistica';
import CartaoPerfil from '../components/ads/CartaoPerfil';
import ChipArea from '../components/ads/ChipArea';
import ItemDiferencial from '../components/ads/ItemDiferencial';
import SecaoHero from '../components/ads/SecaoHero';
import {
  AREAS_ATUACAO,
  CURSO,
  DIFERENCIAIS,
  ESTATISTICAS,
  PERFIS_EGRESSO,
  SELOS,
} from '../dados/cursoAds';
import { cores } from '../estilos/tema';

const renderPerfil = ({ item }) => <CartaoPerfil {...item} />;
const chavePerfil = (item) => item.titulo;
const Separador = () => <View style={styles.separador} />;

export default function TelaAds() {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const { secao } = useLocalSearchParams();
  const rolagem = useRef(null);
  const posicoes = useRef({});
  const secaoPendente = useRef(null);

  const abrirMenu = useCallback(() => navigation.openDrawer?.(), [navigation]);

  const rolarPara = useCallback((chave) => {
    const y = posicoes.current[chave];
    if (y === undefined) return false;
    rolagem.current?.scrollTo({ y, animated: true });
    return true;
  }, []);

  const explorar = useCallback(() => rolarPara('perfil'), [rolarPara]);

  useFocusEffect(
    useCallback(() => {
      if (secao && !rolarPara(secao)) secaoPendente.current = secao;
    }, [secao, rolarPara]),
  );

  const medir = useMemo(() => {
    const guardar = (chave) => ({ nativeEvent }) => {
      posicoes.current[chave] = nativeEvent.layout.y;
      if (secaoPendente.current === chave) {
        secaoPendente.current = null;
        rolarPara(chave);
      }
    };
    return {
      perfil: guardar('perfil'),
      mercado: guardar('mercado'),
      diferenciais: guardar('diferenciais'),
    };
  }, [rolarPara]);

  return (
    <View style={styles.tela}>
      <StatusBar style="light" />

      <ScrollView
        ref={rolagem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottom + 48 }}
      >
        <View style={styles.conteudo}>
          <SecaoHero
            curso={CURSO}
            selos={SELOS}
            topo={top}
            onMenu={abrirMenu}
            onExplorar={explorar}
          />

          <View style={styles.secao} onLayout={medir.perfil}>
            <View style={styles.margem}>
              <CabecalhoSecao numero="02" rotulo="Perfil do egresso" titulo="Quem você vai se tornar" />
            </View>
            <FlatList
              data={PERFIS_EGRESSO}
              renderItem={renderPerfil}
              keyExtractor={chavePerfil}
              ItemSeparatorComponent={Separador}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.margem}
            />
          </View>

          <View style={[styles.secao, styles.margem]} onLayout={medir.mercado}>
            <CabecalhoSecao numero="03" rotulo="Mercado de trabalho" titulo="Um mercado que não para" />
            <View style={styles.grade}>
              {ESTATISTICAS.map((estatistica) => (
                <CartaoEstatistica key={estatistica.valor} {...estatistica} />
              ))}
            </View>
            <View style={styles.chips}>
              {AREAS_ATUACAO.map((area) => (
                <ChipArea key={area.nome} {...area} />
              ))}
            </View>
          </View>

          <View style={[styles.secao, styles.margem]} onLayout={medir.diferenciais}>
            <CabecalhoSecao numero="04" rotulo="Diferenciais" titulo="Por que estudar na FAAMA" />
            <View style={styles.lista}>
              {DIFERENCIAIS.map((diferencial) => (
                <ItemDiferencial key={diferencial.titulo} {...diferencial} />
              ))}
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
  margem: {
    paddingHorizontal: 20,
  },
  secao: {
    marginTop: 56,
  },
  separador: {
    width: 12,
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 20,
  },
  lista: {
    gap: 10,
  },
});
