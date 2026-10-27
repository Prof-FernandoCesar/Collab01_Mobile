import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { cores, raio } from '../../estilos/tema';
import BotaoGradiente from '../comum/BotaoGradiente';
import Selo from '../comum/Selo';

function CartaoCursoDestaque({ curso, selos, onAbrir }) {
  return (
    <LinearGradient
      colors={[cores.cianoBorda, cores.borda]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.moldura}
    >
      <View style={styles.cartao}>
        <View style={styles.topo}>
          <LinearGradient
            colors={[cores.ciano, cores.azul]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.icone}
          >
            <Ionicons name="code-slash" size={26} color={cores.fundo} />
          </LinearGradient>
          <Text style={styles.rotulo}>Curso em destaque</Text>
        </View>

        <Text style={styles.titulo}>
          {curso.titulo}
          <Text style={styles.tituloDestaque}>{curso.tituloDestaque}</Text>
        </Text>
        <Text style={styles.chamada}>{curso.chamada}</Text>

        <View style={styles.selos}>
          {selos.map((selo) => (
            <Selo key={selo.texto} {...selo} />
          ))}
        </View>

        <BotaoGradiente titulo="Conhecer o curso" icone="arrow-forward" onPress={onAbrir} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  moldura: {
    borderRadius: raio.grande + 1,
    padding: 1,
  },
  cartao: {
    borderRadius: raio.grande,
    padding: 22,
    backgroundColor: cores.superficie,
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 18,
  },
  icone: {
    width: 52,
    height: 52,
    borderRadius: raio.medio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rotulo: {
    fontSize: 12,
    fontWeight: '700',
    color: cores.ciano,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  titulo: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '800',
    color: cores.texto,
    letterSpacing: -0.5,
  },
  tituloDestaque: {
    color: cores.ciano,
  },
  chamada: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: cores.textoSuave,
  },
  selos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 18,
    marginBottom: 22,
  },
});

export default memo(CartaoCursoDestaque);
