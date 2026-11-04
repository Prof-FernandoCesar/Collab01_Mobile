import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cores, raio } from '../../estilos/tema';

function ChipArea({ icone, nome }) {
  return (
    <View style={styles.chip}>
      <Ionicons name={icone} size={16} color={cores.azul} />
      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: raio.pilula,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.superficieAlta,
  },
  nome: {
    fontSize: 14,
    fontWeight: '600',
    color: cores.texto,
  },
});

export default memo(ChipArea);
