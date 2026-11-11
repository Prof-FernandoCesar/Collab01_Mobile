
import { useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    FlatList,
} from 'react-native';

import { EVENTOS } from '../dados/calendarioAcademico';

function CartaoEvento({ dia, mes, titulo, categoria, descricao }) {
  return (
    <View style={styles.cartaoEvento}>
      <View style={styles.dataEvento}>
        <Text style={styles.diaEvento}>{dia}</Text>
        <Text style={styles.mesEvento}>{mes}</Text>
      </View>

      <View style={styles.infoEvento}>
        <Text style={styles.tituloEvento}>{titulo}</Text>
        <Text style={styles.categoriaEvento}>{categoria}</Text>
        <Text style={styles.descricaoEvento}>{descricao}</Text>
      </View>
    </View>
  );
}

export default function CalendarioAcademico() {
    const [mesSelecionado, setMesSelecionado] = useState('');
    const [modalVisivel, setModalVisivel] = useState(false);
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];
    const [eventos, setEventos] = useState(EVENTOS);
    const numeroMesSelecionado = meses.indexOf(mesSelecionado) + 1;
    const eventosDoMes = eventos
  .filter((evento) => evento.mes === numeroMesSelecionado)
  .sort((a, b) => parseInt(a.dia, 10) - parseInt(b.dia, 10));


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Calendário Acadêmico
            </Text>

            <Text style={styles.descricao}>
                Confira as principais datas e eventos do período letivo.
            </Text>
            <View style={styles.seletorContainer}>
                <Text style={styles.label}>
                    Selecione o mês
                </Text>

                <TouchableOpacity
                    style={styles.caixaSelecao}
                    onPress={() => setModalVisivel(true)}
                    activeOpacity={0.7}
                >
                    <Text
                        style={
                            mesSelecionado
                                ? styles.textoSelecionado
                                : styles.textoPlaceholder
                        }
                    >
                        {mesSelecionado || 'Escolha um mês'}
                    </Text>

                    <Text style={styles.seta}>⌄</Text>
                </TouchableOpacity>
            </View>
            <Modal
                visible={modalVisivel}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisivel(false)}
            >
                <View style={styles.modalFundo}>
                    <View style={styles.modalContainer}>

                        <Text style={styles.modalTitulo}>
                            Selecione o mês
                        </Text>

                        <FlatList
                            data={meses}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.opcaoMes}
                                    onPress={() => {
                                        setMesSelecionado(item);
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
            {mesSelecionado !== '' && (
            <View style={styles.eventosContainer}>
                <Text style={styles.tituloEventos}>
                Eventos de {mesSelecionado}
                </Text>

                <View style={styles.listaEventos}>
  <FlatList
    data={eventosDoMes}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <CartaoEvento
        dia={item.dia}
        mes={meses[item.mes - 1].slice(0, 3)}
        titulo={item.titulo}
        categoria={item.categoria}
        descricao={item.descricao}
      />
    )}
    ListEmptyComponent={
      <Text style={styles.textoVazio}>
        Nenhum evento cadastrado para este mês.
      </Text>
    }
  />
</View>
            </View>
            )}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    descricao: {
        fontSize: 16,
        color: '#64748b',
    },

    seletorContainer: {
    marginTop: 25,
    marginBottom: 20,
    },

    label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#334155',
    },

    caixaSelecao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 14,
    backgroundColor: '#fff',
    },

    textoPlaceholder: {
    fontSize: 16,
    color: '#94a3b8',
    },

    textoSelecionado: {
    fontSize: 16,
    color: '#334155',
    },

    seta: {
    fontSize: 20,
    color: '#64748b',
    },

    modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    },

    modalContainer: {
    width: '100%',
    maxHeight: '75%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    },

    modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1e293b',
    },

    opcaoMes: {
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    },

    textoOpcao: {
    fontSize: 16,
    color: '#334155',
    },

    botaoFechar: {
    marginTop: 15,
    alignItems: 'center',
    padding: 12,
    },

    textoFechar: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
    },

    tituloEventos: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#1e293b',
  marginBottom: 15,
},

listaEventos: {
  backgroundColor: '#f8fafc',
  borderRadius: 10,
  padding: 20,
  borderWidth: 1,
  borderColor: '#e2e8f0',
},

textoVazio: {
  fontSize: 14,
  color: '#94a3b8',
  textAlign: 'center',
},


cartaoEvento: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 15,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: '#e2e8f0',
  alignItems: 'center',
},

dataEvento: {
  width: 55,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 15,
  paddingVertical: 8,
  backgroundColor: '#f1f5f9',
  borderRadius: 8,
},

diaEvento: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#334155',
},

mesEvento: {
  fontSize: 12,
  fontWeight: '600',
  color: '#64748b',
  textTransform: 'uppercase',
},

infoEvento: {
  flex: 1,
},

tituloEvento: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#1e293b',
  marginBottom: 5,
},

categoriaEvento: {
  fontSize: 12,
  fontWeight: '600',
  color: '#475569',
  marginBottom: 5,
},

descricaoEvento: {
  fontSize: 13,
  color: '#64748b',
  lineHeight: 19,
},


});
