import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { cores } from '../../estilos/tema';

function CabecalhoSecao({ numero, rotulo, titulo }) {
  return (
    <View style={styles.container}>
      <View style={styles.linhaRotulo}>
        <Text style={styles.numero}>{numero}</Text>
        <View style={styles.traco} />
        <Text style={styles.rotulo}>{rotulo}</Text>
      </View>
      <Text style={styles.titulo} accessibilityRole="header">{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 20,
  },
  linhaRotulo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  numero: {
    fontSize: 13,
    fontWeight: '800',
    color: cores.ciano,
  },
  traco: {
    width: 24,
    height: 2,
    borderRadius: 1,
    backgroundColor: cores.ciano,
  },
  rotulo: {
    fontSize: 12,
    fontWeight: '700',
    color: cores.textoSuave,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '800',
    color: cores.texto,
    letterSpacing: -0.5,
  },
});

export default memo(CabecalhoSecao);
