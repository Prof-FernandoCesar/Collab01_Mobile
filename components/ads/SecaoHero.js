import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

import { cores } from '../../estilos/tema';
import BarraTopo from '../comum/BarraTopo';
import BotaoGradiente from '../comum/BotaoGradiente';
import Selo from '../comum/Selo';

const ilustracao = require('../../assets/ilustracao-codigo.svg');

function SecaoHero({ curso, selos, topo, onMenu, onExplorar }) {
  return (
    <LinearGradient
      colors={[cores.azulProfundo, cores.fundo]}
      style={[styles.hero, { paddingTop: topo + 12 }]}
    >
      <View style={styles.brilho} />

      <BarraTopo marca={curso.sigla} onMenu={onMenu} />

      <Text style={styles.sobretitulo}>Graduação em tecnologia · FAAMA</Text>
      <Text style={styles.titulo} accessibilityRole="header">
        {curso.titulo}
        <Text style={styles.tituloDestaque}>{curso.tituloDestaque}</Text>
      </Text>
      <Text style={styles.chamada}>{curso.chamada}</Text>

      <View style={styles.selos}>
        {selos.map((selo) => (
          <Selo key={selo.texto} {...selo} />
        ))}
      </View>

      <BotaoGradiente titulo="Explorar o curso" icone="arrow-down" onPress={onExplorar} />

      <Image
        source={ilustracao}
        style={styles.ilustracao}
        contentFit="contain"
        accessibilityLabel="Ilustração de um editor de código"
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  hero: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    overflow: 'hidden',
  },
  brilho: {
    position: 'absolute',
    top: -120,
    right: -100,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: cores.ciano,
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
  tituloDestaque: {
    color: cores.ciano,
  },
  chamada: {
    marginTop: 14,
    fontSize: 17,
    lineHeight: 25,
    color: cores.textoSuave,
  },
  selos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 24,
    marginBottom: 28,
  },
  ilustracao: {
    width: '100%',
    aspectRatio: 640 / 340,
    marginTop: 36,
  },
});

export default memo(SecaoHero);
