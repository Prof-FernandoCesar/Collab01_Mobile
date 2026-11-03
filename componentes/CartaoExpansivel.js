import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, LayoutAnimation } from 'react-native';
import { cores, fonteMono, raio } from '../constantes/tema';
import { Selo } from './interface';

export default function CartaoExpansivel({ sigla, titulo, resumo, children, inicialAberto = false }) {
  const [aberto, setAberto] = useState(inicialAberto);

  function alternar() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setAberto((a) => !a);
  }

  return (
    <View style={[styles.cartao, aberto && styles.cartaoAberto]}>
      <Pressable
        onPress={alternar}
        accessibilityRole="button"
        accessibilityState={{ expanded: aberto }}
        accessibilityHint={aberto ? 'Recolher detalhes' : 'Ver detalhes'}
        style={({ pressed }) => [styles.topo, pressed && { opacity: 0.75 }]}
      >
        <Selo texto={sigla} cor={aberto ? cores.destaque : cores.primaria} />
        <View style={styles.textos}>
          <Text style={styles.titulo}>{titulo}</Text>
          {resumo ? <Text style={styles.resumo}>{resumo}</Text> : null}
        </View>
        <View style={[styles.alternador, aberto && styles.alternadorAberto]}>
          <Text style={[styles.alternadorTexto, aberto && { color: cores.fundo }]}>{aberto ? '-' : '+'}</Text>
        </View>
      </Pressable>

      {aberto ? <View style={styles.corpo}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.medio,
    marginBottom: 10,
    overflow: 'hidden',
  },
  cartaoAberto: {
    borderColor: cores.destaque,
    backgroundColor: cores.superficieAlta,
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },
  textos: {
    flex: 1,
    marginHorizontal: 12,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: cores.textoForte,
  },
  resumo: {
    fontSize: 13,
    color: cores.textoSuave,
    marginTop: 3,
  },
  alternador: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: cores.bordaForte,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alternadorAberto: {
    backgroundColor: cores.destaque,
    borderColor: cores.destaque,
  },
  alternadorTexto: {
    fontFamily: fonteMono,
    fontSize: 16,
    fontWeight: '700',
    color: cores.texto,
    lineHeight: 18,
  },
  corpo: {
    paddingHorizontal: 14,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: cores.borda,
    paddingTop: 14,
  },
});
