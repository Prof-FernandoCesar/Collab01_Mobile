
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

const contato = {
  endereco: "Rod. Eng. Augusto Meira Filho, S/n - Km 01",
  cidade: "Paricatuba, Benevides - PA",
  cep: "68795-000",
  telefone: "91991455360",
  email: "contato@faama.edu.br",
  instagram: "https://instagram.com/faama_edu",
};
async function abrirLink(url) {
  try {
    await Linking.openURL(url);
  } catch {
    Alert.alert(
      "Erro",
      "Não foi possível abrir o link."
    );
  }
}

export default function Contato() {
  const enderecoCompleto =
    `${contato.endereco}, ${contato.cidade}, ${contato.cep}`;

  const mapaURL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(enderecoCompleto);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text style={styles.titulo}>FAAMA - Fale Conosco</Text>
        <Text style={styles.subtitulo}>
          Estamos aqui para ajudar você!
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          📍 Nosso endereço
        </Text>

        <Text style={styles.texto}>
          {contato.endereco}
        </Text>
        <Text style={styles.texto}>
          {contato.cidade}
        </Text>
        <Text style={styles.texto}>
          CEP: {contato.cep}
        </Text>

        <View style={styles.mapa}>
          <Text style={styles.mapaIcone}>🗺️</Text>
          <Text style={styles.mapaTitulo}>
            Nossa localização
          </Text>
          <Text style={styles.mapaDescricao}>
            Consulte nosso endereço no mapa.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => abrirLink(mapaURL)}
        >
          <Text style={styles.botaoTexto}>
            Abrir no Google Maps
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Canais oficiais de atendimento
        </Text>

        <TouchableOpacity
          style={styles.canal}
          onPress={() =>
            abrirLink(
              `https://wa.me/${contato.telefone}`
            )
          }
        >
          <Text style={styles.canalTexto}>
            💬 WhatsApp
          </Text>
          <Text style={styles.link}>Abrir ↗</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.canal}
          onPress={() =>
            abrirLink(`mailto:${contato.email}`)
          }
        >
          <Text style={styles.canalTexto}>
            ✉️ E-mail
          </Text>
          <Text style={styles.link}>Abrir ↗</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.canal}
          onPress={() =>
            abrirLink(`tel:+${contato.telefone}`)
          }
        >
          <Text style={styles.canalTexto}>
            📞 Telefone
          </Text>
          <Text style={styles.link}>Ligar ↗</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.canal}
          onPress={() =>
            abrirLink(contato.instagram)
          }
        >
          <Text style={styles.canalTexto}>
            📷 Instagram
          </Text>
          <Text style={styles.link}>Abrir ↗</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.rodape}>
        Entre em contato pelos nossos canais oficiais.
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
    paddingBottom: 36,
  },
  header: {
    backgroundColor: "#253B80",
    padding: 24,
    borderRadius: 16,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitulo: {
    fontSize: 14,
    color: "#E3E9FF",
    marginTop: 6,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#172554",
    marginBottom: 14,
  },
  texto: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 5,
  },
  mapa: {
    backgroundColor: "#E8EDF7",
    borderRadius: 12,
    minHeight: 155,
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  mapaIcone: {
    fontSize: 36,
  },
  mapaTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    color: "#253B80",
  },
  mapaDescricao: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginTop: 5,
  },
  botao: {
    backgroundColor: "#253B80",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
  canal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  canalTexto: {
    fontSize: 15,
    color: "#374151",
    fontWeight: "500",
  },
  link: {
    fontSize: 13,
    color: "#253B80",
    fontWeight: "bold",
  },
  rodape: {
    textAlign: "center",
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },
});
