import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, StatusBar } from "react-native";

const servicos = [
  {
    id: 1,
    icone: "▤",
    titulo: "Atestados",
    descricao: "Documentos e declarações acadêmicas.",
    detalhes: [
      "Solicitação de atestados de matrícula.",
      "Declarações de vínculo acadêmico.",
      "Orientações para emissão de documentos.",
    ],
  },
  {
    id: 2,
    icone: "✎",
    titulo: "Requerimentos",
    descricao: "Solicitações e procedimentos acadêmicos.",
    detalhes: [
      "Solicitações acadêmicas em geral.",
      "Orientações sobre preenchimento de requerimentos.",
      "Acompanhamento de solicitações.",
    ],
  },
  {
    id: 3,
    icone: "⇄",
    titulo: "Transferências",
    descricao: "Informações para transferência de alunos.",
    detalhes: [
      "Orientações para ingresso por transferência.",
      "Informações sobre documentação necessária.",
      "Procedimentos para análise de aproveitamento.",
    ],
  },
  {
    id: 4,
    icone: "$",
    titulo: "Financeiro",
    descricao: "Informações sobre serviços financeiros.",
    detalhes: [
      "Orientações sobre mensalidades.",
      "Informações sobre pagamentos.",
      "Atendimento de dúvidas financeiras.",
    ],
  },
];

export default function SecretariaTesouraria() {
  const [aberto, setAberto] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25245F" barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.instituicao}>FAAMA • ÁREA DO ALUNO</Text>
          <Text style={styles.titulo}>Secretaria e Tesouraria</Text>
          <Text style={styles.subtitulo}>
            Encontre informações e orientações sobre os serviços acadêmicos e
            financeiros.
          </Text>
        </View>

        <View style={styles.conteudo}>
          <Text style={styles.secao}>Serviços disponíveis</Text>
          <Text style={styles.ajuda}>
            Selecione um serviço para consultar as informações.
          </Text>

          {servicos.map((servico) => {
            const expandido = aberto === servico.id;

            return (
              <View key={servico.id} style={styles.card}>
                <Pressable
                  style={styles.cardCabecalho}
                  onPress={() => setAberto(expandido ? null : servico.id)}
                >
                  <View style={styles.icone}>
                    <Text style={styles.iconeTexto}>{servico.icone}</Text>
                  </View>

                  <View style={styles.cardInfo}>
                    <Text style={styles.cardTitulo}>{servico.titulo}</Text>
                    <Text style={styles.cardDescricao}>
                      {servico.descricao}
                    </Text>
                  </View>

                  <Text style={styles.seta}>{expandido ? "−" : "+"}</Text>
                </Pressable>

                {expandido && (
                  <View style={styles.detalhes}>
                    {servico.detalhes.map((item, index) => (
                      <View key={index} style={styles.item}>
                        <Text style={styles.ponto}>•</Text>
                        <Text style={styles.itemTexto}>{item}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            );
          })}

          <View style={styles.aviso}>
            <Text style={styles.avisoTitulo}>Precisa de atendimento?</Text>
            <Text style={styles.avisoTexto}>
              Para confirmar documentos exigidos, prazos e procedimentos,
              procure os canais oficiais de atendimento da FAAMA.
            </Text>
          </View>
        </View>

        <Text style={styles.rodape}>
          FAAMA • Secretaria Acadêmica e Tesouraria
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FC",
  },
  header: {
    backgroundColor: "#302F78",
    padding: 25,
    paddingTop: 35,
    paddingBottom: 35,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  instituicao: {
    color: "#D9D8FF",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 15,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#E4E3FF",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },
  conteudo: {
    padding: 20,
  },
  secao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#25245F",
  },
  ajuda: {
    color: "#77788A",
    fontSize: 13,
    marginTop: 6,
    marginBottom: 18,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E9E9F2",
    overflow: "hidden",
  },
  cardCabecalho: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  icone: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#EEEEFF",
    alignItems: "center",
    justifyContent: "center",
  },
  iconeTexto: {
    color: "#302F78",
    fontSize: 23,
    fontWeight: "bold",
  },
  cardInfo: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitulo: {
    color: "#29285F",
    fontSize: 15,
    fontWeight: "bold",
  },
  cardDescricao: {
    color: "#77788A",
    fontSize: 12,
    marginTop: 4,
  },
  seta: {
    color: "#302F78",
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 8,
  },
  detalhes: {
    borderTopWidth: 1,
    borderTopColor: "#EEEEF5",
    padding: 15,
    paddingTop: 12,
  },
  item: {
    flexDirection: "row",
    marginBottom: 9,
  },
  ponto: {
    color: "#5551B5",
    fontSize: 18,
    marginRight: 9,
  },
  itemTexto: {
    flex: 1,
    color: "#55566A",
    fontSize: 13,
    lineHeight: 19,
  },
  aviso: {
    backgroundColor: "#EEEEFF",
    borderRadius: 15,
    padding: 17,
    marginTop: 12,
  },
  avisoTitulo: {
    color: "#302F78",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 7,
  },
  avisoTexto: {
    color: "#55566A",
    fontSize: 13,
    lineHeight: 20,
  },
  rodape: {
    textAlign: "center",
    color: "#9999A8",
    fontSize: 11,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
});
