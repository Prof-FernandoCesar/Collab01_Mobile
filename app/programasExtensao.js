
import { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';


export default function ProgramasExtensao() {
  const [areaSelecionada, setAreaSelecionada] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);
  const areas = [
  'ADS',
  'Enfermagem',
  'Direito',
  'Psicologia',
  'Pedagogia',
  'Teologia',
];

  
return (
  <View style={styles.container}>
    <Text style={styles.titulo}>
      Pós-graduação e Cursos de Extensão
    </Text>

    <Text style={styles.descricao}>
      Selecione uma área para visualizar os cursos disponíveis.
    </Text>

    {/* Caixa de seleção */}
    <View style={styles.seletorContainer}>
      <Text style={styles.label}>
        Selecione a Área
      </Text>

      <TouchableOpacity
        style={styles.caixaSelecao}
        onPress={() => setModalVisivel(true)}
        activeOpacity={0.7}
      >
        <Text
          style={
            areaSelecionada
              ? styles.textoSelecionado
              : styles.textoPlaceholder
          }
        >
          {areaSelecionada || 'Escolha uma área'}
        </Text>

        <Text style={styles.seta}>⌄</Text>
      </TouchableOpacity>
    </View>

{areaSelecionada !== '' && (
  <View style={styles.secoesContainer}>

    {/* Pós-graduação */}
    <View style={styles.secaoCurso}>
      <Text style={styles.tituloSecao}>
        Pós-graduação
      </Text>

      <Text style={styles.textoVazio}>
        Os cursos de pós-graduação de {areaSelecionada} serão apresentados aqui.
      </Text>
    </View>

    {/* Cursos de Extensão */}
    <View style={styles.secaoCurso}>
      <Text style={styles.tituloSecao}>
        Cursos de Extensão
      </Text>

      <Text style={styles.textoVazio}>
        Os cursos de extensão de {areaSelecionada} serão apresentados aqui.
      </Text>
    </View>

    </View>
    )}

    <Modal
      visible={modalVisivel}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setModalVisivel(false)}
    >
      <View style={styles.modalFundo}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitulo}>
            Selecione uma área
          </Text>

          <FlatList
            data={areas}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.opcaoArea}
                onPress={() => {
                  setAreaSelecionada(item);
                  setModalVisivel(false);
                }}
              >
                <Text style={styles.textoOpcao}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity
            style={styles.botaoFechar}
            onPress={() => setModalVisivel(false)}
          >
            <Text style={styles.textoFechar}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </View>
);

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
  },

  descricao: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 24,
  },

  caixaSelecao: {
  height: 52,
  borderWidth: 1,
  borderColor: '#CBD5E1',
  borderRadius: 8,
  backgroundColor: '#FFFFFF',
  paddingHorizontal: 14,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

textoPlaceholder: {
  fontSize: 15,
  color: '#94A3B8',
},

textoSelecionado: {
  fontSize: 15,
  color: '#1E293B',
  fontWeight: '500',
},

seta: {
  fontSize: 24,
  color: '#64748B',
  fontWeight: '500',
},

modalFundo: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},

modalContainer: {
  width: '100%',
  backgroundColor: '#FFFFFF',
  borderRadius: 12,
  padding: 20,
  maxHeight: '70%',
},

modalTitulo: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#1E293B',
  marginBottom: 15,
},

opcaoArea: {
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#E2E8F0',
},

textoOpcao: {
  fontSize: 16,
  color: '#334155',
},

botaoFechar: {
  alignItems: 'center',
  marginTop: 15,
  padding: 10,
},

textoFechar: {
  fontSize: 15,
  color: '#64748B',
  fontWeight: '600',
},

secoesContainer: {
  marginTop: 20,
  gap: 16,
},

secaoCurso: {
  backgroundColor: '#FFFFFF',
  borderRadius: 10,
  padding: 16,
  borderWidth: 1,
  borderColor: '#E2E8F0',
},

tituloSecao: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#1E293B',
  marginBottom: 10,
},

textoVazio: {
  fontSize: 14,
  color: '#64748B',
  lineHeight: 21,
},

});
