import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cores, raio } from '../../estilos/tema';

function CartaoPerfil({ icone, titulo, descricao }) {
  return (
    <View style={styles.cartao}>
      <View style={styles.caixaIcone}>
        <Ionicons name={icone} size={24} color={cores.ciano} />
      </View>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    width: 180,
    padding: 18,
    gap: 8,
    borderRadius: raio.grande,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.superficie,
  },
  caixaIcone: {
    width: 48,
    height: 48,
    marginBottom: 6,
    borderRadius: raio.medio,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.cianoSuave,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: cores.texto,
  },
  descricao: {
    fontSize: 13,
    lineHeight: 19,
    color: cores.textoSuave,
  },
});

export default memo(CartaoPerfil);
