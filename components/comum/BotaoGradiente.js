import { memo } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

import { cores, raio } from '../../estilos/tema';

function BotaoGradiente({ titulo, icone, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.toque, pressed && styles.pressionado]}
    >
      <LinearGradient
        colors={[cores.ciano, cores.azul]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradiente}
      >
        <Text style={styles.texto}>{titulo}</Text>
        {icone && <Ionicons name={icone} size={20} color={cores.fundo} />}
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  toque: {
    alignSelf: 'flex-start',
    borderRadius: raio.medio,
    shadowColor: cores.ciano,
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  pressionado: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  gradiente: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: raio.medio,
    paddingVertical: 16,
    paddingHorizontal: 26,
  },
  texto: {
    fontSize: 16,
    fontWeight: '800',
    color: cores.fundo,
  },
});

export default memo(BotaoGradiente);
