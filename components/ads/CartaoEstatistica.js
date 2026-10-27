import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cores, raio } from '../../estilos/tema';

function CartaoEstatistica({ icone, valor, rotulo, fonte }) {
  return (
    <View style={styles.cartao}>
      <Ionicons name={icone} size={20} color={cores.textoSuave} />
      <Text style={styles.valor}>{valor}</Text>
      <Text style={styles.rotulo}>{rotulo}</Text>
      {!!fonte && <Text style={styles.fonte}>Fonte: {fonte}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    flexGrow: 1,
    flexBasis: '45%',
    padding: 18,
    gap: 6,
    borderRadius: raio.grande,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.superficie,
  },
  valor: {
    marginTop: 4,
    fontSize: 30,
    fontWeight: '800',
    color: cores.ciano,
    letterSpacing: -1,
  },
  rotulo: {
    fontSize: 13,
    lineHeight: 18,
    color: cores.textoSuave,
  },
  fonte: {
    marginTop: 2,
    fontSize: 11,
    color: cores.textoFraco,
  },
});

export default memo(CartaoEstatistica);
