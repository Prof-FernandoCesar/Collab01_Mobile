import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cores, raio } from '../../estilos/tema';

function Selo({ icone, texto }) {
  return (
    <View style={styles.selo}>
      <Ionicons name={icone} size={14} color={cores.ciano} />
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  selo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: raio.pilula,
    borderWidth: 1,
    borderColor: cores.cianoBorda,
    backgroundColor: cores.cianoSuave,
  },
  texto: {
    fontSize: 13,
    fontWeight: '600',
    color: cores.texto,
  },
});

export default memo(Selo);
