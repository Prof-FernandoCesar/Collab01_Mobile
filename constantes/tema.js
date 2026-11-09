import { Platform } from 'react-native';

export const cores = {
  fundo: '#070B14',
  superficie: '#0E1626',
  superficieAlta: '#132036',
  borda: '#1E2A40',
  bordaForte: '#2B3B57',
  primaria: '#3B82F6',
  primariaForte: '#2563EB',
  destaque: '#22D3EE',
  sucesso: '#34D399',
  texto: '#E2E8F0',
  textoForte: '#FFFFFF',
  textoSuave: '#94A3B8',
  textoApagado: '#64748B',
};

export const fonteMono = Platform.select({
  ios: 'Menlo',
  android: 'monospace',
  default: 'monospace',
});

export const espaco = {
  tela: 20,
  secao: 36,
};

export const raio = {
  pequeno: 8,
  medio: 14,
  grande: 20,
};
