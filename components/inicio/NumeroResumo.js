import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { cores } from '../../estilos/tema';

function NumeroResumo({ valor, rotulo }) {
  return (
    <View style={styles.item}>
      <Text style={styles.valor}>{valor}</Text>
      <Text style={styles.rotulo}>{rotulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  valor: {
    fontSize: 28,
    fontWeight: '800',
    color: cores.ciano,
    letterSpacing: -1,
  },
  rotulo: {
    fontSize: 12,
    textAlign: 'center',
    color: cores.textoSuave,
  },
});

export default memo(NumeroResumo);
