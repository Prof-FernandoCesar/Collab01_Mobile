
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from "react-native";

const AZUL = "#173B68";

const areas = [
  {
    icone: "⛪",
    titulo: "Ministério Pastoral",
    descricao:
      "Atuação como pastor, evangelista e instrutor bíblico, promovendo liderança espiritual, ensino e acompanhamento das comunidades.",
  },
  {
    icone: "❤️",
    titulo: "Capelania",
    descricao:
      "Assistência espiritual e acolhimento em escolas, hospitais e outras instituições, contribuindo para o cuidado humano.",
  },
  {
    icone: "📖",
    titulo: "Ensino e Assessoria Teológica",
    descricao:
      "Ensino teológico, orientação espiritual e consultoria em conhecimentos bíblicos e religiosos.",
  },
  {
    icone: "🔎",
    titulo: "Pesquisa Teológica",
    descricao:
      "Participação em pesquisas, estudos bíblicos e produção de materiais acadêmicos e religiosos.",
  },
  {
    icone: "🤝",
    titulo: "Missões e Ação Comunitária",
    descricao:
      "Participação em projetos missionários, atividades de extensão e iniciativas de desenvolvimento humano e social.",
  },
];

async function abrirSite(url) {
  try {
    await Linking.openURL(url);
  } catch {
    Alert.alert(
      "Erro",
      "Não foi possível abrir a página."
    );
  }
}

export default function Teologia() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={styles.instituicao}>
          FAAMA | GRADUAÇÃO
        </Text>

        <Text style={styles.titulo}>
          Teologia
        </Text>

        <Text style={styles.subtitulo}>
          Conhecimento, fé e serviço à comunidade.
        </Text>

        <View style={styles.etiquetas}>
          <Text style={styles.etiqueta}>
            Bacharelado
          </Text>
          <Text style={styles.etiqueta}>
            4 anos
          </Text>
          <Text style={styles.etiqueta}>
            Presencial
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>
          Sobre o curso
        </Text>

        <Text style={styles.paragrafo}>
          O Bacharelado em Teologia da Faculdade
          Adventista da Amazônia prepara profissionais
          para o ministério pastoral, fundamentando
          sua formação nos princípios bíblicos e
          na perspectiva educacional adventista.
        </Text>

        <Text style={styles.paragrafo}>
          O curso integra ensino, pesquisa e extensão,
          oferecendo experiências práticas nas igrejas
          e comunidades, com atenção especial à
          diversidade cultural da região amazônica.
        </Text>
      </View>

      <Text style={styles.tituloSecao}>
        Áreas de atuação
      </Text>

      {areas.map((area) => (
        <View
          key={area.titulo}
          style={styles.areaCard}
        >
          <View style={styles.areaTopo}>
            <Text style={styles.icone}>
              {area.icone}
            </Text>

            <Text style={styles.areaTitulo}>
              {area.titulo}
            </Text>
          </View>

          <Text style={styles.areaDescricao}>
            {area.descricao}
          </Text>
        </View>
      ))}

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>
          Formação na prática
        </Text>

        <Text style={styles.paragrafo}>
          A formação inclui práticas pastorais,
          estágios supervisionados, projetos de
          extensão e iniciação científica.
        </Text>

        <Text style={styles.paragrafo}>
          Os estudantes desenvolvem atividades
          junto a comunidades urbanas, rurais
          e outros grupos sociais, aplicando
          conhecimentos teológicos em situações
          reais.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>
          Perfil do profissional
        </Text>

        <Text style={styles.paragrafo}>
          O curso busca formar líderes espirituais
          éticos, capazes de trabalhar em equipe,
          respeitar a diversidade cultural e
          religiosa e contribuir para o
          desenvolvimento das comunidades.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          abrirSite(
            "https://www.faama.edu.br/teologia/"
          )
        }
        accessibilityRole="button"
        accessibilityLabel="Conhecer o curso no site oficial"
      >
        <Text style={styles.botaoTexto}>
          Conheça o curso no site oficial ↗
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() =>
          abrirSite(
            "https://salt.faama.edu.br/bacharelado-em-teologia/"
          )
        }
        accessibilityRole="button"
      >
        <Text style={styles.botaoSecundarioTexto}>
          Mais informações sobre o SALT-FAAMA
        </Text>
      </TouchableOpacity>

      <Text style={styles.rodape}>
        Fonte: FAAMA e SALT-FAAMA
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5FA",
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    backgroundColor: AZUL,
    borderRadius: 16,
    padding: 24,
    marginBottom: 18,
  },
  instituicao: {
    color: "#C9DCF1",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 15,
    color: "#E3EDF8",
    marginTop: 8,
    lineHeight: 22,
  },
  etiquetas: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 18,
  },
  etiqueta: {
    backgroundColor: "#315782",
    color: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 6,
    fontSize: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: "bold",
    color: AZUL,
    marginBottom: 12,
  },
  paragrafo: {
    fontSize: 15,
    lineHeight: 24,
    color: "#374151",
    marginBottom: 12,
  },
  areaCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
  },
  areaTopo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icone: {
    fontSize: 25,
    marginRight: 12,
  },
  areaTitulo: {
    fontSize: 17,
    fontWeight: "bold",
    color: AZUL,
    flex: 1,
  },
  areaDescricao: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 22,
  },
  botao: {
    backgroundColor: AZUL,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  botaoSecundario: {
    borderWidth: 1,
    borderColor: AZUL,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  botaoSecundarioTexto: {
    color: AZUL,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  rodape: {
    textAlign: "center",
    fontSize: 12,
    color: "#64748B",
    marginTop: 20,
  },
});
