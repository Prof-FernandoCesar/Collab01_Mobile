import React, { useMemo, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  StatusBar,
  ScrollView,
  Animated,
  PanResponder,
} from "react-native";
import { router } from "expo-router";
import { obterObjetos, observarObjetos } from "./objetosStore";

const categorias = [
  "Todos",
  "Eletrônicos",
  "Documentos",
  "Acessórios",
  "Outros",
];

export default function MuralAchados() {
  const [objetos, setObjetos] = useState(() => obterObjetos());
  const [pesquisa, setPesquisa] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [objetoSelecionado, setObjetoSelecionado] = useState(null);

  // Recebe os objetos cadastrados na tela de cadastro.
  useEffect(() => {
    setObjetos([...obterObjetos()]);

    return observarObjetos((listaAtual) => {
      setObjetos([...listaAtual]);
    });
  }, []);

  // Animação do painel de detalhes.
  const deslocamentoModal = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (objetoSelecionado) {
      deslocamentoModal.setValue(0);
    }
  }, [objetoSelecionado, deslocamentoModal]);

  const responderModal = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gesto) =>
          gesto.dy > 8 && Math.abs(gesto.dy) > Math.abs(gesto.dx),

        onPanResponderMove: (_, gesto) => {
          if (gesto.dy > 0) {
            deslocamentoModal.setValue(gesto.dy);
          }
        },

        onPanResponderRelease: (_, gesto) => {
          if (gesto.dy > 120 || gesto.vy > 0.9) {
            Animated.timing(deslocamentoModal, {
              toValue: 700,
              duration: 180,
              useNativeDriver: true,
            }).start(({ finished }) => {
              if (finished) {
                setObjetoSelecionado(null);
              }
            });
          } else {
            Animated.spring(deslocamentoModal, {
              toValue: 0,
              useNativeDriver: true,
              tension: 80,
              friction: 12,
            }).start();
          }
        },

        onPanResponderTerminate: () => {
          Animated.spring(deslocamentoModal, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        },
      }),
    [deslocamentoModal],
  );

  // Pesquisa por nome, categoria, descrição ou local.
  const objetosFiltrados = useMemo(() => {
    const termo = pesquisa.trim().toLowerCase();

    return objetos.filter((objeto) => {
      const correspondeCategoria =
        categoriaSelecionada === "Todos" ||
        objeto.categoria === categoriaSelecionada;

      const correspondePesquisa =
        termo === "" ||
        objeto.nome.toLowerCase().includes(termo) ||
        objeto.categoria.toLowerCase().includes(termo) ||
        objeto.descricao.toLowerCase().includes(termo) ||
        objeto.local.toLowerCase().includes(termo);

      return correspondeCategoria && correspondePesquisa;
    });
  }, [objetos, pesquisa, categoriaSelecionada]);

  // O cartão inteiro abre os detalhes do objeto.
  function renderizarObjeto({ item }) {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.cartao,
          pressed && styles.cartaoPressionado,
        ]}
        onPress={() => setObjetoSelecionado(item)}
        accessibilityRole="button"
        accessibilityLabel={`Ver detalhes de ${item.nome}`}
      >
        <View
          style={[
            styles.iconeObjeto,
            { backgroundColor: item.cor || "#EDE9FE" },
          ]}
        >
          <Text style={styles.emojiObjeto}>{item.emoji || "📦"}</Text>
        </View>

        <View style={styles.conteudoCartao}>
          <View style={styles.linhaCategoria}>
            <Text style={styles.categoriaObjeto}>{item.categoria}</Text>

            <Text style={styles.dataObjeto}>{item.data}</Text>
          </View>

          <Text style={styles.nomeObjeto}>{item.nome}</Text>

          <Text style={styles.descricaoObjeto} numberOfLines={2}>
            {item.descricao}
          </Text>

          <View style={styles.linhaLocal}>
            <Text style={styles.iconeLocal}>📍</Text>

            <Text style={styles.localObjeto}>{item.local}</Text>
          </View>

          <View style={styles.botaoDetalhes}>
            <Text style={styles.textoBotaoDetalhes}>Ver detalhes</Text>

            <Text style={styles.setaBotao}>›</Text>
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#312E81" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Cabeçalho */}
        <View style={styles.cabecalho}>
          <View style={styles.linhaTopo}>
            <View style={styles.marca}>
              <Text style={styles.marcaEmoji}>🔎</Text>
            </View>

            <View style={styles.identificacao}>
              <Text style={styles.nomeInstituicao}>FAAMA</Text>

              <Text style={styles.subtituloInstituicao}>Mural de Achados</Text>
            </View>
          </View>

          <Text style={styles.tituloCabecalho}>
            Encontrou ou perdeu{"\n"}alguma coisa?
          </Text>

          <Text style={styles.textoCabecalho}>
            Consulte os objetos encontrados no campus e ajude a devolver cada
            item ao seu dono.
          </Text>

          <View style={styles.indicadorCabecalho}>
            <View style={styles.pontoIndicador} />

            <Text style={styles.textoIndicador}>
              Consulte os achados do campus
            </Text>
          </View>
        </View>

        {/* Conteúdo principal */}
        <View style={styles.areaPrincipal}>
          <View style={styles.tituloSecao}>
            <View style={styles.titulosLista}>
              <Text style={styles.tituloLista}>Mural de achados</Text>

              <Text style={styles.subtituloLista}>
                Objetos registrados no campus
              </Text>
            </View>

            <View style={styles.contador}>
              <Text style={styles.numeroContador}>
                {objetosFiltrados.length}
              </Text>

              <Text style={styles.textoContador}>
                {objetosFiltrados.length === 1 ? "item" : "itens"}
              </Text>
            </View>
          </View>

          {/* Abre a tela separada de cadastro */}
          <Pressable
            style={({ pressed }) => [
              styles.botaoCadastrar,
              pressed && styles.botaoPressionado,
            ]}
            onPress={() => router.push("/cadastrar-achado")}
            accessibilityRole="button"
            accessibilityLabel="Cadastrar objeto encontrado"
          >
            <Text style={styles.maisCadastrar}>+</Text>

            <View style={styles.conteudoBotaoCadastrar}>
              <Text style={styles.textoBotaoCadastrar}>Cadastrar achado</Text>

              <Text style={styles.subtextoBotaoCadastrar}>
                Encontrou um objeto no campus?
              </Text>
            </View>

            <Text style={styles.setaCadastrar}>›</Text>
          </Pressable>

          {/* Pesquisa */}
          <View style={styles.caixaPesquisa}>
            <Text style={styles.iconePesquisa}>⌕</Text>

            <TextInput
              style={styles.campoPesquisa}
              placeholder="Buscar objeto, categoria ou local..."
              placeholderTextColor="#94A3B8"
              value={pesquisa}
              onChangeText={setPesquisa}
              returnKeyType="search"
              accessibilityLabel="Pesquisar objetos encontrados"
            />

            {pesquisa.length > 0 && (
              <Pressable
                onPress={() => setPesquisa("")}
                style={styles.limparPesquisa}
                accessibilityRole="button"
                accessibilityLabel="Limpar pesquisa"
              >
                <Text style={styles.textoLimpar}>×</Text>
              </Pressable>
            )}
          </View>

          {/* Filtros */}
          <Text style={styles.tituloFiltros}>Categorias</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listaCategorias}
          >
            {categorias.map((itemCategoria) => {
              const selecionada = categoriaSelecionada === itemCategoria;

              return (
                <Pressable
                  key={itemCategoria}
                  onPress={() => setCategoriaSelecionada(itemCategoria)}
                  style={[
                    styles.botaoCategoria,
                    selecionada && styles.botaoCategoriaSelecionado,
                  ]}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selecionada }}
                >
                  <Text
                    style={[
                      styles.textoCategoria,
                      selecionada && styles.textoCategoriaSelecionado,
                    ]}
                  >
                    {itemCategoria}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          {/* Lista de objetos */}
          <FlatList
            data={objetosFiltrados}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderizarObjeto}
            scrollEnabled={false}
            contentContainerStyle={styles.listaObjetos}
            ListEmptyComponent={
              <View style={styles.estadoVazio}>
                <Text style={styles.emojiVazio}>🔍</Text>

                <Text style={styles.tituloVazio}>Nenhum objeto encontrado</Text>

                <Text style={styles.textoVazio}>
                  Tente pesquisar por outro termo ou selecionar outra categoria.
                </Text>

                <Pressable
                  style={styles.botaoLimparFiltros}
                  onPress={() => {
                    setPesquisa("");
                    setCategoriaSelecionada("Todos");
                  }}
                  accessibilityRole="button"
                >
                  <Text style={styles.textoLimparFiltros}>Limpar filtros</Text>
                </Pressable>
              </View>
            }
          />

          <View style={styles.aviso}>
            <Text style={styles.iconeAviso}>💡</Text>

            <View style={styles.conteudoAviso}>
              <Text style={styles.tituloAviso}>Reconheceu algum objeto?</Text>

              <Text style={styles.textoAviso}>
                Abra os detalhes para conferir as informações do item
                encontrado.
              </Text>
            </View>
          </View>

          <Text style={styles.rodape}>
            Mural de Achados FAAMA · Versão demonstrativa
          </Text>
        </View>
      </ScrollView>

      {/* Painel de detalhes */}
      {objetoSelecionado && (
        <View style={styles.overlay}>
          <Pressable
            style={styles.fundoModal}
            onPress={() => setObjetoSelecionado(null)}
            accessibilityRole="button"
            accessibilityLabel="Fechar detalhes"
          />

          <Animated.View
            {...responderModal.panHandlers}
            style={[
              styles.modal,
              {
                transform: [{ translateY: deslocamentoModal }],
              },
            ]}
          >
            <View style={styles.alcaModal} />

            <View style={styles.cabecalhoModal}>
              <View
                style={[
                  styles.iconeModal,
                  {
                    backgroundColor: objetoSelecionado.cor || "#EDE9FE",
                  },
                ]}
              >
                <Text style={styles.emojiModal}>
                  {objetoSelecionado.emoji || "📦"}
                </Text>
              </View>

              <View style={styles.titulosModal}>
                <Text style={styles.etiquetaModal}>DETALHES DO ACHADO</Text>

                <Text style={styles.tituloModal}>{objetoSelecionado.nome}</Text>
              </View>
            </View>

            <View style={styles.etiquetaCategoriaModal}>
              <Text style={styles.textoEtiquetaModal}>
                {objetoSelecionado.categoria}
              </Text>
            </View>

            <Text style={styles.tituloInformacao}>Descrição</Text>

            <Text style={styles.textoInformacao}>
              {objetoSelecionado.descricao}
            </Text>

            <View style={styles.divisorModal} />

            <View style={styles.linhaInformacao}>
              <View style={styles.iconeInformacao}>
                <Text>📍</Text>
              </View>

              <View style={styles.conteudoInformacao}>
                <Text style={styles.rotuloInformacao}>Local encontrado</Text>

                <Text style={styles.valorInformacao}>
                  {objetoSelecionado.local}
                </Text>
              </View>
            </View>

            <View style={styles.linhaInformacao}>
              <View style={styles.iconeInformacao}>
                <Text>📅</Text>
              </View>

              <View style={styles.conteudoInformacao}>
                <Text style={styles.rotuloInformacao}>Data do registro</Text>

                <Text style={styles.valorInformacao}>
                  {objetoSelecionado.data}
                </Text>
              </View>
            </View>

            <Text style={styles.dicaArrastar}>
              Deslize para baixo para fechar
            </Text>

            <Pressable
              style={({ pressed }) => [
                styles.botaoFechar,
                pressed && styles.botaoPressionado,
              ]}
              onPress={() => setObjetoSelecionado(null)}
              accessibilityRole="button"
            >
              <Text style={styles.botaoFecharTexto}>Entendi</Text>
            </Pressable>
          </Animated.View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FC",
  },

  scroll: {
    flex: 1,
  },

  conteudo: {
    flexGrow: 1,
    paddingBottom: 24,
  },

  cabecalho: {
    backgroundColor: "#312E81",
    paddingTop: 22,
    paddingHorizontal: 22,
    paddingBottom: 32,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  linhaTopo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },

  marca: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  marcaEmoji: {
    fontSize: 24,
  },

  identificacao: {
    flex: 1,
  },

  nomeInstituicao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 1,
  },

  subtituloInstituicao: {
    color: "#C7D2FE",
    fontSize: 12,
    marginTop: 2,
  },

  tituloCabecalho: {
    color: "#FFFFFF",
    fontSize: 29,
    lineHeight: 36,
    fontWeight: "800",
    letterSpacing: -0.7,
  },

  textoCabecalho: {
    color: "#E0E7FF",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
    maxWidth: 340,
  },

  indicadorCabecalho: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 20,
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  pontoIndicador: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#86EFAC",
    marginRight: 8,
  },

  textoIndicador: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
  },

  areaPrincipal: {
    paddingHorizontal: 18,
    paddingTop: 25,
  },

  tituloSecao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 19,
  },

  titulosLista: {
    flex: 1,
  },

  tituloLista: {
    fontSize: 21,
    color: "#172554",
    fontWeight: "800",
    letterSpacing: -0.4,
  },

  subtituloLista: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 5,
  },

  contador: {
    backgroundColor: "#E0E7FF",
    borderRadius: 13,
    paddingHorizontal: 13,
    paddingVertical: 8,
    alignItems: "center",
    minWidth: 56,
    marginLeft: 10,
  },

  numeroContador: {
    fontSize: 18,
    fontWeight: "800",
    color: "#3730A3",
  },

  textoContador: {
    fontSize: 10,
    color: "#4338CA",
    fontWeight: "600",
  },

  botaoCadastrar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4338CA",
    borderRadius: 16,
    padding: 14,
    marginBottom: 20,
    shadowColor: "#312E81",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 7,
    elevation: 3,
  },

  maisCadastrar: {
    color: "#FFFFFF",
    fontSize: 29,
    fontWeight: "400",
    width: 43,
    height: 43,
    lineHeight: 41,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 13,
    overflow: "hidden",
    marginRight: 12,
  },

  conteudoBotaoCadastrar: {
    flex: 1,
  },

  textoBotaoCadastrar: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  subtextoBotaoCadastrar: {
    color: "#E0E7FF",
    fontSize: 11,
    marginTop: 4,
  },

  setaCadastrar: {
    color: "#FFFFFF",
    fontSize: 28,
    marginLeft: 8,
  },

  caixaPesquisa: {
    height: 54,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 23,
  },

  iconePesquisa: {
    fontSize: 28,
    color: "#64748B",
    marginRight: 10,
    marginTop: -4,
  },

  campoPesquisa: {
    flex: 1,
    fontSize: 13,
    color: "#1E293B",
    paddingVertical: 0,
  },

  limparPesquisa: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  textoLimpar: {
    color: "#64748B",
    fontSize: 24,
  },

  tituloFiltros: {
    color: "#334155",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 11,
  },

  listaCategorias: {
    paddingBottom: 21,
    gap: 8,
  },

  botaoCategoria: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  botaoCategoriaSelecionado: {
    backgroundColor: "#4338CA",
    borderColor: "#4338CA",
  },

  textoCategoria: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
  },

  textoCategoriaSelecionado: {
    color: "#FFFFFF",
  },

  listaObjetos: {
    paddingBottom: 4,
  },

  cartao: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 14,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#EDF0F7",
    shadowColor: "#1E293B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.045,
    shadowRadius: 8,
    elevation: 2,
  },

  cartaoPressionado: {
    opacity: 0.82,
  },

  iconeObjeto: {
    width: 60,
    height: 60,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  emojiObjeto: {
    fontSize: 28,
  },

  conteudoCartao: {
    flex: 1,
    minWidth: 0,
  },

  linhaCategoria: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 5,
    marginBottom: 6,
  },

  categoriaObjeto: {
    color: "#4338CA",
    fontSize: 10,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  dataObjeto: {
    color: "#94A3B8",
    fontSize: 10,
  },

  nomeObjeto: {
    color: "#1E293B",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 20,
  },

  descricaoObjeto: {
    color: "#64748B",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  linhaLocal: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
  },

  iconeLocal: {
    fontSize: 12,
    marginRight: 5,
  },

  localObjeto: {
    flex: 1,
    color: "#64748B",
    fontSize: 11,
  },

  botaoDetalhes: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 11,
    paddingVertical: 7,
    paddingHorizontal: 11,
    borderRadius: 10,
    backgroundColor: "#EEF2FF",
  },

  botaoPressionado: {
    opacity: 0.75,
  },

  textoBotaoDetalhes: {
    color: "#4338CA",
    fontSize: 11,
    fontWeight: "800",
  },

  setaBotao: {
    color: "#4338CA",
    fontSize: 18,
    lineHeight: 18,
    marginLeft: 8,
  },

  estadoVazio: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingVertical: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  emojiVazio: {
    fontSize: 38,
    marginBottom: 12,
  },

  tituloVazio: {
    color: "#1E293B",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
  },

  textoVazio: {
    color: "#64748B",
    fontSize: 12,
    lineHeight: 19,
    textAlign: "center",
    marginTop: 8,
  },

  botaoLimparFiltros: {
    marginTop: 17,
    backgroundColor: "#4338CA",
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 12,
  },

  textoLimparFiltros: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  aviso: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#EEF2FF",
    borderRadius: 16,
    padding: 15,
    marginTop: 13,
    borderWidth: 1,
    borderColor: "#E0E7FF",
  },

  iconeAviso: {
    fontSize: 21,
    marginRight: 11,
  },

  conteudoAviso: {
    flex: 1,
  },

  tituloAviso: {
    color: "#312E81",
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 5,
  },

  textoAviso: {
    color: "#4338CA",
    fontSize: 11,
    lineHeight: 18,
  },

  rodape: {
    color: "#94A3B8",
    fontSize: 10,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 8,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    zIndex: 10,
    elevation: 10,
  },

  fundoModal: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 23, 42, 0.55)",
  },

  modal: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 23,
    paddingTop: 12,
    paddingBottom: 30,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.12,
    shadowRadius: 15,
    elevation: 20,
  },

  alcaModal: {
    width: 42,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#CBD5E1",
    alignSelf: "center",
    marginBottom: 24,
  },

  cabecalhoModal: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
  },

  iconeModal: {
    width: 64,
    height: 64,
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  emojiModal: {
    fontSize: 31,
  },

  titulosModal: {
    flex: 1,
  },

  etiquetaModal: {
    color: "#6366F1",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.1,
    marginBottom: 6,
  },

  tituloModal: {
    color: "#172554",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 26,
  },

  etiquetaCategoriaModal: {
    alignSelf: "flex-start",
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    marginBottom: 22,
  },

  textoEtiquetaModal: {
    color: "#4338CA",
    fontSize: 11,
    fontWeight: "700",
  },

  tituloInformacao: {
    color: "#334155",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 7,
  },

  textoInformacao: {
    color: "#64748B",
    fontSize: 13,
    lineHeight: 21,
  },

  divisorModal: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 20,
  },

  linhaInformacao: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  iconeInformacao: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  conteudoInformacao: {
    flex: 1,
  },

  rotuloInformacao: {
    color: "#94A3B8",
    fontSize: 11,
    marginBottom: 4,
  },

  valorInformacao: {
    color: "#334155",
    fontSize: 13,
    fontWeight: "700",
  },

  dicaArrastar: {
    color: "#94A3B8",
    fontSize: 11,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 13,
  },

  botaoFechar: {
    height: 52,
    backgroundColor: "#4338CA",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoFecharTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
});
