import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, StatusBar, ScrollView, KeyboardAvoidingView, Keyboard, Platform, Modal, } from "react-native";
import { router } from "expo-router";
import { adicionarObjeto } from "./objetosStore";

const categorias = ["Eletrônicos", "Documentos", "Acessórios", "Outros"];

const coresCategorias = {
  Eletrônicos: "#EDE9FE",
  Documentos: "#FEF3C7",
  Acessórios: "#DBEAFE",
  Outros: "#D1FAE5",
};

const emojisCategorias = {
  Eletrônicos: "🔌",
  Documentos: "📄",
  Acessórios: "🎒",
  Outros: "📦",
};

function obterDataAtual() {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");

  return `${dia}/${mes}/${hoje.getFullYear()}`;
}

export default function CadastrarAchado() {
  const scrollRef = useRef(null);

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("Eletrônicos");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [modalSucesso, setModalSucesso] = useState(false);

  function limparFormulario() {
    setNome("");
    setCategoria("Eletrônicos");
    setDescricao("");
    setLocal("");

    Keyboard.dismiss();

    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  function rolarAteLocal() {
    setTimeout(() => {
      scrollRef.current?.scrollToEnd({
        animated: true,
      });
    }, 400);
  }

  function salvarObjeto() {
    if (!nome.trim() || !descricao.trim() || !local.trim()) {
      return;
    }

    const novoObjeto = {
      id: `${Date.now()}`,
      nome: nome.trim(),
      categoria,
      descricao: descricao.trim(),
      local: local.trim(),
      data: obterDataAtual(),
      emoji: emojisCategorias[categoria],
      cor: coresCategorias[categoria],
    };

    adicionarObjeto(novoObjeto);

    Keyboard.dismiss();
    setModalSucesso(true);
  }

  function voltarAoMural() {
    setModalSucesso(false);
    limparFormulario();
    router.replace("/");
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#312E81" />

      <KeyboardAvoidingView
        style={styles.tecladoContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          ref={scrollRef}
          style={styles.scroll}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.conteudo}
        >
          <View style={styles.cabecalho}>
            <Pressable
              onPress={() => router.back()}
              style={styles.botaoVoltar}
              accessibilityRole="button"
            >
              <Text style={styles.textoVoltar}>‹ Voltar ao mural</Text>
            </Pressable>

            <View style={styles.marca}>
              <Text style={styles.emojiMarca}>🔎</Text>
            </View>

            <Text style={styles.instituicao}>FAAMA</Text>
            <Text style={styles.subtituloInstituicao}>Mural de Achados</Text>

            <Text style={styles.titulo}>Cadastrar achado</Text>

            <Text style={styles.textoCabecalho}>
              Ajude a devolver um objeto ao seu dono. Informe os dados do item
              encontrado.
            </Text>
          </View>

          <View style={styles.formulario}>
            <Text style={styles.etiqueta}>NOVO REGISTRO</Text>

            <Text style={styles.tituloFormulario}>Dados do objeto</Text>

            <Text style={styles.rotulo}>Nome do objeto *</Text>

            <TextInput
              style={styles.input}
              placeholder="Ex.: Fone de ouvido"
              placeholderTextColor="#94A3B8"
              value={nome}
              onChangeText={setNome}
              maxLength={80}
              returnKeyType="next"
            />

            <Text style={styles.rotulo}>Categoria *</Text>

            <View style={styles.categorias}>
              {categorias.map((item) => {
                const selecionada = categoria === item;

                return (
                  <Pressable
                    key={item}
                    onPress={() => setCategoria(item)}
                    style={[
                      styles.opcaoCategoria,
                      selecionada && styles.categoriaSelecionada,
                    ]}
                    accessibilityRole="button"
                    accessibilityState={{ selected: selecionada }}
                  >
                    <Text
                      style={[
                        styles.textoCategoria,
                        selecionada && styles.textoCategoriaSelecionada,
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <Text style={styles.rotulo}>Descrição *</Text>

            <TextInput
              style={[styles.input, styles.inputDescricao]}
              placeholder="Descreva a aparência do objeto..."
              placeholderTextColor="#94A3B8"
              value={descricao}
              onChangeText={setDescricao}
              multiline
              textAlignVertical="top"
              maxLength={300}
            />

            <Text style={styles.rotulo}>Local onde foi encontrado *</Text>

            <TextInput
              style={styles.input}
              placeholder="Ex.: Biblioteca, sala 203..."
              placeholderTextColor="#94A3B8"
              value={local}
              onChangeText={setLocal}
              maxLength={100}
              returnKeyType="done"
              onFocus={rolarAteLocal}
            />

            <Text style={styles.obrigatorio}>* Preenchimento obrigatório</Text>

            <Pressable
              style={({ pressed }) => [
                styles.botaoSalvar,
                pressed && styles.pressionado,
              ]}
              onPress={salvarObjeto}
              accessibilityRole="button"
            >
              <Text style={styles.textoBotaoSalvar}>Salvar objeto</Text>
            </Pressable>

            <Pressable
              style={styles.botaoLimpar}
              onPress={limparFormulario}
              accessibilityRole="button"
            >
              <Text style={styles.textoBotaoLimpar}>Limpar formulário</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        visible={modalSucesso}
        transparent
        animationType="fade"
        onRequestClose={() => setModalSucesso(false)}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modalCartao}>
            <View style={styles.iconeSucesso}>
              <Text style={styles.emojiSucesso}>✓</Text>
            </View>

            <Text style={styles.tituloSucesso}>Achado cadastrado!</Text>

            <Text style={styles.textoSucesso}>
              O objeto foi adicionado ao Mural de Achados da FAAMA. Obrigado por
              ajudar a comunidade acadêmica!
            </Text>

            <Pressable
              style={({ pressed }) => [
                styles.botaoConfirmar,
                pressed && styles.pressionado,
              ]}
              onPress={voltarAoMural}
              accessibilityRole="button"
            >
              <Text style={styles.textoBotaoConfirmar}>Voltar ao mural</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FC",
  },
  tecladoContainer: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  conteudo: {
    flexGrow: 1,
    paddingBottom: 220,
  },
  cabecalho: {
    backgroundColor: "#312E81",
    paddingHorizontal: 23,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  botaoVoltar: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    marginBottom: 20,
  },
  textoVoltar: {
    color: "#E0E7FF",
    fontSize: 13,
    fontWeight: "700",
  },
  marca: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  emojiMarca: {
    fontSize: 25,
  },
  instituicao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1,
  },
  subtituloInstituicao: {
    color: "#C7D2FE",
    fontSize: 12,
    marginTop: 3,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 25,
  },
  textoCabecalho: {
    color: "#E0E7FF",
    fontSize: 13,
    lineHeight: 21,
    marginTop: 10,
  },
  formulario: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 17,
    marginTop: 22,
    padding: 20,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#EDF0F7",
  },
  etiqueta: {
    color: "#6366F1",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  tituloFormulario: {
    color: "#172554",
    fontSize: 21,
    fontWeight: "800",
    marginTop: 7,
    marginBottom: 8,
  },
  rotulo: {
    color: "#334155",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 18,
    marginBottom: 8,
  },
  input: {
    minHeight: 49,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 13,
    paddingVertical: 12,
    fontSize: 13,
    color: "#1E293B",
  },
  inputDescricao: {
    minHeight: 100,
  },
  categorias: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  opcaoCategoria: {
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  categoriaSelecionada: {
    backgroundColor: "#4338CA",
    borderColor: "#4338CA",
  },
  textoCategoria: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: "600",
  },
  textoCategoriaSelecionada: {
    color: "#FFFFFF",
  },
  obrigatorio: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  botaoSalvar: {
    minHeight: 51,
    borderRadius: 14,
    backgroundColor: "#4338CA",
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotaoSalvar: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  pressionado: {
    opacity: 0.75,
  },
  botaoLimpar: {
    minHeight: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  textoBotaoLimpar: {
    color: "#64748B",
    fontSize: 13,
    fontWeight: "700",
  },
  modalFundo: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.65)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  modalCartao: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 30,
    alignItems: "center",
    elevation: 10,
  },
  iconeSucesso: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: "#E0E7FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  emojiSucesso: {
    color: "#4338CA",
    fontSize: 38,
    fontWeight: "800",
  },
  tituloSucesso: {
    color: "#172554",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
  },
  textoSucesso: {
    color: "#64748B",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 25,
  },
  botaoConfirmar: {
    width: "100%",
    minHeight: 51,
    borderRadius: 14,
    backgroundColor: "#4338CA",
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotaoConfirmar: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
});
