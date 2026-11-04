
import React from "react";
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const cultos = [
  { dia: "Sábado", horario: "09:00", nome: "Culto de adoração" },
  { dia: "Quarta-feira", horario: "19:30", nome: "Culto de oração" },
  { dia: "Sexta", horario: "19:30", nome: "Encontro de jovens" },
  { dia: "31/10/2026", horario: "09:00", nome: "Dia mundial do pastor!" },
  { dia: "01 a 07 de novenbro", horario: "20:00", nome: "Semana da colportagem universitário!" },
];

const atividades = [
  {
    emoji: "📖",
    titulo: "Estudo bíblico",
    descricao: "Aprenda mais sobre a Palavra de Deus.",
  },
  {
    emoji: "🙏",
    titulo: "Encontro de oração",
    descricao: "Um momento de fé, oração e comunhão.",
  },
  {
    emoji: "🤝",
    titulo: "Grupos de apoio",
    descricao: "Compartilhe experiências e encontre acolhimento.",
  },
];

function Secao({ titulo, subtitulo }) {
  return (
    <View style={styles.cabecalhoSecao}>
      <Text style={styles.tituloSecao}>{titulo}</Text>
      {subtitulo ? (
        <Text style={styles.subtituloSecao}>{subtitulo}</Text>
      ) : null}
    </View>
  );
}

export default function VidaEspiritualScreen() {
  async function solicitarAtendimento() {
    const telefone = "5593992274499"; // Coloque o número real aqui

    const mensagem = encodeURIComponent(
      "Olá! Acessei a página da igreja e gostaria de solicitar um atendimento pastoral."
    );

    const url = `https://wa.me/${telefone}?text=${mensagem}`;

    try {
      await Linking.openURL(url);
    } catch (erro) {
      Alert.alert(
        "Erro",
        "Não foi possível abrir o WhatsApp. Tente novamente."
      );
    }
  }

  return (
    <View style={styles.tela}>
      <StatusBar style="light" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >
        <View style={styles.topo}>
          <Text style={styles.selo}>FÉ • COMUNHÃO • ACOLHIMENTO</Text>
          <Text style={styles.tituloPrincipal}>Vida Espiritual</Text>
          <Text style={styles.frase}>
            Um lugar para fortalecer a fé e caminhar juntos.
          </Text>
        </View>

        <View style={styles.mensagem}>
          <Text style={styles.mensagemIcone}>✝</Text>
          <View style={styles.mensagemTexto}>
            <Text style={styles.mensagemTitulo}>Você é bem-vindo!</Text>
            <Text style={styles.descricao}>
              Conheça nossas atividades universitarias, onde trabalhamos o fisíco, mental
              e espíritual, para o seu melhor desenpenho.
            </Text>
          </View>
        </View>

        <Secao
          titulo="Próximos cultos"
          subtitulo="Separe um momento para estar em comunhão."
        />

        {cultos.map((culto) => (
          <View key={culto.nome} style={styles.cartaoCulto}>
            <View style={styles.dataCulto}>
              <Text style={styles.horario}>{culto.horario}</Text>
            </View>
            <View style={styles.infoCulto}>
              <Text style={styles.nomeCulto}>{culto.nome}</Text>
              <Text style={styles.descricao}>{culto.dia}</Text>
            </View>
          </View>
        ))}

        <Secao
          titulo="Atividades espirituais"
          subtitulo="Momentos para aprender, orar e crescer."
        />

        {atividades.map((atividade) => (
          <View key={atividade.titulo} style={styles.cartaoAtividade}>
            <View style={styles.iconeAtividade}>
              <Text style={styles.emoji}>{atividade.emoji}</Text>
            </View>
            <View style={styles.infoAtividade}>
              <Text style={styles.nomeAtividade}>{atividade.titulo}</Text>
              <Text style={styles.descricao}>{atividade.descricao}</Text>
            </View>
          </View>
        ))}

        <View style={styles.cartaoPastoral}>
          <Text style={styles.emojiPastoral}>💬</Text>
          <Text style={styles.tituloPastoral}>Atendimento pastoral</Text>
          <Text style={styles.textoPastoral}>
            Precisa conversar, receber orientação ou pedir oração? Você não
            precisa enfrentar tudo sozinho.
          </Text>
          <TouchableOpacity
            style={styles.botao}
            onPress={solicitarAtendimento}
            accessibilityRole="button"
          >
            <Text style={styles.textoBotao}>Solicitar atendimento</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.rodape}>
          Que este seja um espaço de fé, esperança e acolhimento.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },
  conteudo: {
    paddingBottom: 32,
  },
  topo: {
    backgroundColor: "#12263D",
    paddingTop: 58,
    paddingHorizontal: 24,
    paddingBottom: 32,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  selo: {
    color: "#E9C987",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  tituloPrincipal: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
  },
  frase: {
    color: "#E0E8F1",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
  },
  mensagem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 18,
    padding: 18,
    borderRadius: 18,
    gap: 14,
  },
  mensagemIcone: {
    color: "#B58A3B",
    fontSize: 34,
  },
  mensagemTexto: {
    flex: 1,
  },
  mensagemTitulo: {
    color: "#12263D",
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 5,
  },
  descricao: {
    color: "#647184",
    fontSize: 14,
    lineHeight: 21,
  },
  cabecalhoSecao: {
    paddingHorizontal: 20,
    marginTop: 28,
    marginBottom: 12,
  },
  tituloSecao: {
    color: "#12263D",
    fontSize: 21,
    fontWeight: "800",
  },
  subtituloSecao: {
    color: "#647184",
    fontSize: 13,
    marginTop: 5,
    lineHeight: 19,
  },
  cartaoCulto: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 15,
    borderRadius: 15,
    gap: 14,
  },
  dataCulto: {
    backgroundColor: "#E8EEF7",
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
  },
  horario: {
    color: "#173B63",
    fontWeight: "800",
    fontSize: 16,
  },
  infoCulto: {
    flex: 1,
  },
  nomeCulto: {
    color: "#12263D",
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 4,
  },
  cartaoAtividade: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 15,
    borderRadius: 15,
    gap: 13,
  },
  iconeAtividade: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#F3EBDD",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 25,
  },
  infoAtividade: {
    flex: 1,
  },
  nomeAtividade: {
    color: "#12263D",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  cartaoPastoral: {
    backgroundColor: "#173B55",
    marginHorizontal: 16,
    marginTop: 20,
    padding: 22,
    borderRadius: 20,
    alignItems: "center",
  },
  emojiPastoral: {
    fontSize: 34,
    marginBottom: 8,
  },
  tituloPastoral: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  textoPastoral: {
    color: "#E0E8F1",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#E9C987",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  textoBotao: {
    color: "#12263D",
    fontWeight: "800",
    fontSize: 15,
  },
  rodape: {
    color: "#647184",
    fontSize: 12,
    textAlign: "center",
    marginTop: 24,
    marginHorizontal: 24,
    lineHeight: 19,
  },
});
