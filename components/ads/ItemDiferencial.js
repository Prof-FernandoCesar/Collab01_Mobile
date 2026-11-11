import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cores, raio } from '../../estilos/tema';

function ItemDiferencial({ icone, titulo, descricao }) {
  return (
    <View style={styles.item}>
      <View style={styles.caixaIcone}>
        <Ionicons name={icone} size={20} color={cores.ciano} />
      </View>
      <View style={styles.textos}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
      <Ionicons name="checkmark-circle" size={24} color={cores.verde} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    borderRadius: raio.medio,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.superficie,
  },
  caixaIcone: {
    width: 42,
    height: 42,
    borderRadius: raio.pequeno,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.cianoSuave,
  },
  textos: {
    flex: 1,
    gap: 2,
  },
  titulo: {
    fontSize: 15,
    fontWeight: '700',
    color: cores.texto,
  },
  descricao: {
    fontSize: 13,
    color: cores.textoSuave,
  },
});

export default memo(ItemDiferencial);
