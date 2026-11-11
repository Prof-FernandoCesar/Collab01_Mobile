
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

export default function Agendamento() {
  const [tipoVisita, setTipoVisita] = useState('Individual');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data, setData] = useState(null);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [horario, setHorario] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [confirmado, setConfirmado] = useState(false);

  function formatarData(valor) {
    if (!valor) return '';

    const dia = String(valor.getDate()).padStart(2, '0');
    const mes = String(valor.getMonth() + 1).padStart(2, '0');
    const ano = valor.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  function solicitarAgendamento() {
    if (
      !nome.trim() ||
      !email.trim() ||
      !telefone.trim() ||
      !data ||
      !horario
    ) {
      Alert.alert(
        'Campos obrigatórios',
        'Por favor, preencha todos os campos obrigatórios.'
      );
      return;
    }

    if (tipoVisita === 'Escola' && (!instituicao.trim() || !quantidade.trim())) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha o nome da instituição e a quantidade de visitantes.'
      );
      return;
    }

    setConfirmado(true);
  }

  function novoAgendamento() {
    setNome('');
    setEmail('');
    setTelefone('');
    setData(null);
    setMostrarCalendario(false);
    setHorario('');
    setInstituicao('');
    setQuantidade('');
    setTipoVisita('Individual');
    setConfirmado(false);
  }

  if (confirmado) {
    return (
      <View style={styles.confirmacaoContainer}>
        <View style={styles.confirmacaoCard}>
          <View style={styles.checkCircle}>
            <Text style={styles.check}>✓</Text>
          </View>

          <Text style={styles.confirmacaoTitulo}>
            Agendamento confirmado!
          </Text>

          <Text style={styles.confirmacaoTexto}>
            Sua solicitação de visita ao campus da FAAMA foi registrada com sucesso.
          </Text>

          <Text style={styles.confirmacaoDetalhe}>
            Estamos felizes pelo seu interesse em conhecer nossa instituição!
          </Text>

          <Pressable
            style={styles.botao}
            onPress={novoAgendamento}
          >
            <Text style={styles.botaoTexto}>Voltar</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <View style={styles.cabecalho}>
          <Image
            source={require('../assets/images/faamaConhecer.jpg')}
            style={styles.imagemCampus}
            resizeMode="cover"
          />

          <View style={styles.faixa} />

          <Text style={styles.titulo}>
            Venha conhecer nosso campus!
          </Text>

          <Text style={styles.subtitulo}>
            Agende uma visita guiada e conheça de perto a estrutura,
            os espaços e a experiência acadêmica da FAAMA.
          </Text>
        </View>

        <View style={styles.formulario}>
          <Text style={styles.tituloFormulario}>
            Agende sua visita
          </Text>

          <Text style={styles.descricao}>
            Preencha as informações abaixo para solicitar seu agendamento.
          </Text>

          <Text style={styles.label}>Tipo de visita</Text>

          <View style={styles.opcoes}>
            {['Individual', 'Escola'].map((tipo) => (
              <Pressable
                key={tipo}
                style={[
                  styles.opcao,
                  tipoVisita === tipo && styles.opcaoSelecionada,
                ]}
                onPress={() => setTipoVisita(tipo)}
              >
                <Text
                  style={[
                    styles.opcaoTexto,
                    tipoVisita === tipo && styles.opcaoTextoSelecionado,
                  ]}
                >
                  {tipo}
                </Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.label}>Nome completo *</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#94A3B8"
            value={nome}
            onChangeText={setNome}
            returnKeyType="next"
          />

          <Text style={styles.label}>E-mail *</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
          />

          <Text style={styles.label}>Telefone / WhatsApp *</Text>
          <TextInput
            style={styles.input}
            placeholder="(00) 00000-0000"
            placeholderTextColor="#94A3B8"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
            returnKeyType="done"
          />

          {tipoVisita === 'Escola' && (
            <>
              <Text style={styles.label}>Nome da escola *</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o nome da instituição"
                placeholderTextColor="#94A3B8"
                value={instituicao}
                onChangeText={setInstituicao}
              />

              <Text style={styles.label}>Quantidade de visitantes *</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex.: 30 alunos"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={quantidade}
                onChangeText={setQuantidade}
              />
            </>
          )}

          <Text style={styles.label}>Data desejada *</Text>

          <Pressable
            style={styles.campoData}
            onPress={() => setMostrarCalendario(true)}
          >
            <Text
              style={[
                styles.textoData,
                !data && styles.placeholderData,
              ]}
            >
              {data ? formatarData(data) : 'Selecione uma data'}
            </Text>

            <Text style={styles.iconeCalendario}>📅</Text>
          </Pressable>

          {mostrarCalendario && (
            <DateTimePicker
              value={data || new Date()}
              mode="date"
              display="default"
              minimumDate={new Date()}
              onChange={(event, selectedDate) => {
                setMostrarCalendario(false);

                if (event.type === 'set' && selectedDate) {
                  setData(selectedDate);
                }
              }}
            />
          )}

          <Text style={styles.label}>Horário desejado *</Text>

          <View style={styles.opcoesHorario}>
            {['Manhã', 'Tarde'].map((hora) => (
              <Pressable
                key={hora}
                style={[
                  styles.opcao,
                  horario === hora && styles.opcaoSelecionada,
                ]}
                onPress={() => setHorario(hora)}
              >
                <Text
                  style={[
                    styles.opcaoTexto,
                    horario === hora && styles.opcaoTextoSelecionado,
                  ]}
                >
                  {hora}
                </Text>
              </Pressable>
            ))}
          </View>

          <Pressable
            style={styles.botao}
            onPress={solicitarAgendamento}
          >
            <Text style={styles.botaoTexto}>
              Solicitar agendamento
            </Text>
          </Pressable>

          <Text style={styles.observacao}>
            * Campos obrigatórios
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF',
  },
  conteudo: {
    padding: 16,
    paddingBottom: 40,
  },
  cabecalho: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 18,
    elevation: 3,
  },
  imagemCampus: {
    width: '100%',
    height: 190,
  },
  faixa: {
    height: 5,
    backgroundColor: '#7C3AED',
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#172554',
    marginHorizontal: 18,
    marginTop: 18,
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 21,
    marginHorizontal: 18,
    marginTop: 8,
    marginBottom: 20,
  },
  formulario: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    elevation: 3,
  },
  tituloFormulario: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#172554',
  },
  descricao: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 6,
    marginBottom: 18,
  },
  label: {
    color: '#172554',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 14,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 13,
    fontSize: 14,
    color: '#172554',
  },
  campoData: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoData: {
    fontSize: 14,
    color: '#172554',
  },
  placeholderData: {
    color: '#94A3B8',
  },
  iconeCalendario: {
    fontSize: 18,
  },
  opcoes: {
    flexDirection: 'row',
    gap: 10,
  },
  opcao: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 13,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  opcaoSelecionada: {
    backgroundColor: '#EDE9FE',
    borderColor: '#7C3AED',
  },
  opcaoTexto: {
    color: '#64748B',
    fontWeight: '600',
  },
  opcaoTextoSelecionado: {
    color: '#7C3AED',
  },
  opcoesHorario: {
    flexDirection: 'row',
    gap: 10,
  },
  botao: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  observacao: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 12,
  },
  confirmacaoContainer: {
    flex: 1,
    backgroundColor: '#F5F7FF',
    justifyContent: 'center',
    padding: 20,
  },
  confirmacaoCard: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 3,
  },
  checkCircle: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  check: {
    color: '#16A34A',
    fontSize: 48,
    fontWeight: 'bold',
  },
  confirmacaoTitulo: {
    color: '#172554',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  confirmacaoTexto: {
    color: '#64748B',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 12,
  },
  confirmacaoDetalhe: {
    color: '#7C3AED',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
  },
});
