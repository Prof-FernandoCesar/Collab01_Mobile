import { memo, useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { cores, raio } from '../../estilos/tema';

function CartaoAtalho({ secao, icone, titulo, descricao, onAbrir }) {
  const abrir = useCallback(() => onAbrir(secao), [secao, onAbrir]);

  return (
    <Pressable
      onPress={abrir}
      accessibilityRole="button"
      style={({ pressed }) => [styles.cartao, pressed && styles.pressionado]}
    >
      <View style={styles.caixaIcone}>
        <Ionicons name={icone} size={22} color={cores.ciano} />
      </View>
      <View style={styles.textos}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={cores.textoFraco} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 16,
    borderRadius: raio.medio,
    borderWidth: 1,
    borderColor: cores.borda,
    backgroundColor: cores.superficie,
  },
  pressionado: {
    borderColor: cores.cianoBorda,
    backgroundColor: cores.superficieAlta,
  },
  caixaIcone: {
    width: 46,
    height: 46,
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
    fontSize: 16,
    fontWeight: '700',
    color: cores.texto,
  },
  descricao: {
    fontSize: 13,
    color: cores.textoSuave,
  },
});

export default memo(CartaoAtalho);
