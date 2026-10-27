import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cores, raio } from '../../estilos/tema';

function BarraTopo({ marca, onMenu }) {
  return (
    <View style={styles.barra}>
      <Pressable
        onPress={onMenu}
        accessibilityRole="button"
        accessibilityLabel="Abrir menu"
        hitSlop={12}
        style={({ pressed }) => [styles.botaoMenu, pressed && styles.pressionado]}
      >
        <Ionicons name="menu" size={22} color={cores.texto} />
      </Pressable>
      <Text style={styles.marca}>
        <Text style={styles.marcaDestaque}>{'</>'}</Text> {marca}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 36,
  },
  botaoMenu: {
    width: 42,
    height: 42,
    borderRadius: raio.pequeno,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.superficie,
  },
  pressionado: {
    opacity: 0.7,
  },
  marca: {
    fontSize: 18,
    fontWeight: '800',
    color: cores.texto,
    letterSpacing: 1,
  },
  marcaDestaque: {
    color: cores.ciano,
  },
});

export default memo(BarraTopo);
