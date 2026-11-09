import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { cores, fonteMono, raio, espaco } from '../constantes/tema';

export function FundoTech({ linhas = 7, colunas = 5 }) {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <View style={[styles.brilho, styles.brilhoAzul]} />
      <View style={[styles.brilho, styles.brilhoCiano]} />
      {Array.from({ length: linhas }).map((_, i) => (
        <View key={`h${i}`} style={[styles.linhaH, { top: `${((i + 1) * 100) / (linhas + 1)}%` }]} />
      ))}
      {Array.from({ length: colunas }).map((_, i) => (
        <View key={`v${i}`} style={[styles.linhaV, { left: `${((i + 1) * 100) / (colunas + 1)}%` }]} />
      ))}
    </View>
  );
}

export function Rotulo({ children, cor = cores.destaque, style }) {
  return <Text style={[styles.rotulo, { color: cor }, style]}>{children}</Text>;
}

export function CabecalhoSecao({ indice, rotulo, titulo, subtitulo }) {
  return (
    <View style={styles.cabecalho}>
      <Rotulo>
        {indice ? `${indice} // ` : ''}
        {rotulo}
      </Rotulo>
      <Text style={styles.tituloSecao}>{titulo}</Text>
      {subtitulo ? <Text style={styles.subtitulo}>{subtitulo}</Text> : null}
    </View>
  );
}

export function Cartao({ children, style, destaque = false }) {
  return <View style={[styles.cartao, destaque && styles.cartaoDestaque, style]}>{children}</View>;
}

export function Selo({ texto, tamanho = 44, cor = cores.primaria }) {
  return (
    <View
      style={[
        styles.selo,
        { width: tamanho, height: tamanho, borderColor: cor, backgroundColor: `${cor}1A` },
      ]}
    >
      <Text style={[styles.seloTexto, { color: cor, fontSize: tamanho < 40 ? 10 : 12 }]}>{texto}</Text>
    </View>
  );
}

export function Etiqueta({ children, cor = cores.textoSuave, borda = cores.borda }) {
  return (
    <View style={[styles.etiqueta, { borderColor: borda }]}>
      <Text style={[styles.etiquetaTexto, { color: cor }]}>{children}</Text>
    </View>
  );
}

export function Estatistica({ valor, unidade, rotulo }) {
  return (
    <View style={styles.estatistica}>
      <Text style={styles.estatisticaValor}>
        {valor}
        {unidade ? <Text style={styles.estatisticaUnidade}>{unidade}</Text> : null}
      </Text>
      <Text style={styles.estatisticaRotulo}>{rotulo}</Text>
    </View>
  );
}

export function Botao({ titulo, onPress, variante = 'primario' }) {
  const primario = variante === 'primario';
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.botao,
        primario ? styles.botaoPrimario : styles.botaoSecundario,
        pressed && { opacity: 0.8, transform: [{ scale: 0.98 }] },
      ]}
    >
      <Text style={[styles.botaoTexto, !primario && { color: cores.texto }]}>{titulo}</Text>
      <Text style={[styles.botaoSeta, !primario && { color: cores.destaque }]}>&gt;</Text>
    </Pressable>
  );
}

export function Grade({ children, colunas = 2, espacamento = 10 }) {
  return (
    <View style={[styles.grade, { margin: -espacamento / 2 }]}>
      {React.Children.map(children, (filho) =>
        filho ? <View style={{ width: `${100 / colunas}%`, padding: espacamento / 2 }}>{filho}</View> : null
      )}
    </View>
  );
}

export function Rodape({ children }) {
  return <Text style={styles.rodape}>{children}</Text>;
}

const styles = StyleSheet.create({
  brilho: {
    position: 'absolute',
    borderRadius: 999,
  },
  brilhoAzul: {
    width: 320,
    height: 320,
    top: -120,
    right: -100,
    backgroundColor: cores.primaria,
    opacity: 0.18,
  },
  brilhoCiano: {
    width: 220,
    height: 220,
    bottom: -110,
    left: -70,
    backgroundColor: cores.destaque,
    opacity: 0.1,
  },
  linhaH: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: StyleSheet.hairlineWidth,
    backgroundColor: cores.borda,
    opacity: 0.6,
  },
  linhaV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: StyleSheet.hairlineWidth,
    backgroundColor: cores.borda,
    opacity: 0.6,
  },
  rotulo: {
    fontFamily: fonteMono,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  cabecalho: {
    marginBottom: 18,
  },
  tituloSecao: {
    fontSize: 26,
    fontWeight: '800',
    color: cores.textoForte,
    marginTop: 8,
    letterSpacing: -0.5,
  },
  subtitulo: {
    fontSize: 15,
    lineHeight: 22,
    color: cores.textoSuave,
    marginTop: 6,
  },
  cartao: {
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.medio,
    padding: 16,
  },
  cartaoDestaque: {
    borderColor: cores.primaria,
    backgroundColor: cores.superficieAlta,
  },
  selo: {
    borderWidth: 1,
    borderRadius: raio.pequeno,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seloTexto: {
    fontFamily: fonteMono,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  etiqueta: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 6,
    marginBottom: 6,
  },
  etiquetaTexto: {
    fontSize: 12,
    fontWeight: '500',
  },
  estatistica: {
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: raio.medio,
    padding: 16,
    minHeight: 100,
    justifyContent: 'space-between',
  },
  estatisticaValor: {
    fontSize: 32,
    fontWeight: '800',
    color: cores.textoForte,
    letterSpacing: -1,
  },
  estatisticaUnidade: {
    fontSize: 16,
    fontWeight: '600',
    color: cores.destaque,
  },
  estatisticaRotulo: {
    fontSize: 12,
    color: cores.textoSuave,
    marginTop: 6,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: raio.medio,
    paddingVertical: 15,
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  botaoPrimario: {
    backgroundColor: cores.primariaForte,
  },
  botaoSecundario: {
    backgroundColor: 'rgba(14, 22, 38, 0.85)',
    borderWidth: 1,
    borderColor: cores.bordaForte,
  },
  botaoTexto: {
    fontSize: 15,
    fontWeight: '700',
    color: cores.textoForte,
  },
  botaoSeta: {
    fontSize: 18,
    fontWeight: '700',
    color: cores.textoForte,
  },
  grade: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rodape: {
    fontSize: 11,
    lineHeight: 16,
    color: cores.textoApagado,
    textAlign: 'center',
    paddingHorizontal: espaco.tela,
    marginTop: espaco.secao,
  },
});
