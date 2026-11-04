import { useState } from "react"
import { Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { useRouter } from "expo-router"

export default function CalculadoraMediaScreen() {
  const router = useRouter()
  const [firstGrade, setFirstGrade] = useState("")
  const [secondGrade, setSecondGrade] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [average, setAverage] = useState(null)

  function calculateAverage() {
    const firstNumber = Number(firstGrade.trim().replace(",", "."))
    const secondNumber = Number(secondGrade.trim().replace(",", "."))

    if (
      firstGrade.trim() === "" ||
      secondGrade.trim() === "" ||
      !Number.isFinite(firstNumber) ||
      !Number.isFinite(secondNumber) ||
      firstNumber < 0 ||
      firstNumber > 10 ||
      secondNumber < 0 ||
      secondNumber > 10
    ) {
      setErrorMessage("Preencha as duas notas com valores entre 0 e 10.")
      setAverage(null)
      return
    }

    setErrorMessage("")
    setAverage((firstNumber + secondNumber) / 2)
  }

  function clearFields() {
    setFirstGrade("")
    setSecondGrade("")
    setAverage(null)
    setErrorMessage("")
  }

  const passed = average !== null && average >= 7

  return (
    <>
      <ImageBackground
        style={estilos.fundo}
        imageStyle={{ opacity: 1, width: "110%", height: "110%", left: "-5%", top: "-5%" }}
        resizeMode="cover"
        source={require("../assets/background.png")}
      >
        <ScrollView style={estilos.areaRolagem}>
          <View style={estilos.containerPagina}>
            <View style={estilos.conteudoPagina}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Voltar para o início"
                onPress={() => router.replace("/")}
                style={estilos.containerLogo}
              >
                <Image
                  accessibilityLabel="Logo da FAAMA"
                  style={estilos.imagemLogo}
                  resizeMode="contain"
                  source={require("../assets/image.png")}
                />
              </Pressable>

              <View style={estilos.blocoTitulo}>
                <Text style={estilos.textoDestaque}>
                  Vida acadêmica
                </Text>
                <Text style={estilos.textoTitulo}>
                  Calculadora de Média Semestral
                </Text>
                <Text style={estilos.textoDescricao}>
                  Informe suas duas notas e veja sua média do semestre.
                </Text>
              </View>

              <View style={estilos.cartaoNotas}>
                <Text style={estilos.tituloCartao}>Suas notas</Text>

                <Text style={estilos.rotuloCampo}>Primeira nota</Text>
                <TextInput
                  accessibilityLabel="Primeira nota"
                  style={estilos.primeiroCampoNota}
                  keyboardType="decimal-pad"
                  onChangeText={setFirstGrade}
                  placeholder="Ex.: 8,5"
                  placeholderTextColor="#94a3b8"
                  value={firstGrade}
                />

                <Text style={estilos.rotuloCampo}>Segunda nota</Text>
                <TextInput
                  accessibilityLabel="Segunda nota"
                  style={estilos.campoNota}
                  keyboardType="decimal-pad"
                  onChangeText={setSecondGrade}
                  placeholder="Ex.: 7,0"
                  placeholderTextColor="#94a3b8"
                  value={secondGrade}
                />

                {errorMessage !== "" && (
                  <Text accessibilityRole="alert" style={estilos.mensagemErro}>
                    {errorMessage}
                  </Text>
                )}

                <Pressable
                  accessibilityRole="button"
                  style={estilos.botaoCalcular}
                  onPress={calculateAverage}
                >
                  <Text style={estilos.textoBotaoCalcular}>Calcular média</Text>
                </Pressable>

                <Pressable
                  accessibilityRole="button"
                  style={estilos.botaoLimpar}
                  onPress={clearFields}
                >
                  <Text style={estilos.textoBotaoLimpar}>Limpar campos</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

      <Modal
        animationType="fade"
        onRequestClose={() => setAverage(null)}
        transparent
        visible={average !== null}
      >
        <View style={estilos.containerModal}>
          <Pressable
            accessibilityLabel="Fechar resultado"
            accessibilityRole="button"
            style={estilos.fundoModal}
            onPress={() => setAverage(null)}
          />

          <View style={estilos.cartaoModal}>
            <Text style={estilos.rotuloModal}>Sua média</Text>
            <Text style={estilos.textoMedia}>
              {average?.toFixed(1).replace(".", ",")}
            </Text>
            <Text style={[estilos.textoResultado, passed ? estilos.aprovado : estilos.recuperacao]}>
              {passed ? "Aprovado" : "Recuperação"}
            </Text>
            <Text style={estilos.descricaoResultado}>
              {passed
                ? "Sua média é igual ou superior a 7,0."
                : "Sua média ficou abaixo de 7,0."}
            </Text>
            <Pressable
              accessibilityRole="button"
              style={estilos.botaoFechar}
              onPress={() => setAverage(null)}
            >
              <Text style={estilos.textoBotaoFechar}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
  },
  areaRolagem: {
    flex: 1,
    backgroundColor: "transparent",
  },
  containerPagina: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  conteudoPagina: {
    width: "100%",
    maxWidth: 672,
  },
  containerLogo: {
    alignSelf: "center",
    marginBottom: 32,
  },
  imagemLogo: {
    width: 500,
    height: 160,
    resizeMode: "contain",
  },
  blocoTitulo: {
    marginBottom: 24,
  },
  textoDestaque: {
    marginBottom: 8,
    color: "#0369a1",
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1.4,
  },
  textoTitulo: {
    color: "#172554",
    textAlign: "center",
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "700",
  },
  textoDescricao: {
    marginTop: 12,
    color: "#475569",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
  },
  cartaoNotas: {
    padding: 24,
    borderWidth: 1,
    borderColor: "#e0f2fe",
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  tituloCartao: {
    marginBottom: 20,
    color: "#172554",
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "600",
  },
  rotuloCampo: {
    marginBottom: 8,
    color: "#334155",
    fontWeight: "500",
  },
  primeiroCampoNota: {
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 6,
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontSize: 16,
    lineHeight: 24,
  },
  campoNota: {
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 6,
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    fontSize: 16,
    lineHeight: 24,
  },
  mensagemErro: {
    marginTop: 8,
    color: "#dc2626",
    fontSize: 14,
    lineHeight: 20,
  },
  botaoCalcular: {
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 6,
    backgroundColor: "#172554",
  },
  textoBotaoCalcular: {
    color: "#ffffff",
    fontWeight: "600",
  },
  botaoLimpar: {
    marginTop: 12,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#bae6fd",
    borderRadius: 6,
  },
  textoBotaoLimpar: {
    color: "#1e40af",
    fontWeight: "600",
  },
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  fundoModal: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(2, 6, 23, 0.5)",
  },
  cartaoModal: {
    zIndex: 10,
    width: "100%",
    maxWidth: 384,
    alignItems: "center",
    padding: 28,
    borderWidth: 1,
    borderColor: "#e0f2fe",
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },
  rotuloModal: {
    color: "#475569",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  textoMedia: {
    marginTop: 8,
    color: "#172554",
    fontSize: 48,
    lineHeight: 48,
    fontWeight: "700",
  },
  textoResultado: {
    marginTop: 12,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
  },
  aprovado: {
    color: "#047857",
  },
  recuperacao: {
    color: "#b45309",
  },
  descricaoResultado: {
    marginTop: 8,
    color: "#475569",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
  },
  botaoFechar: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: "#172554",
  },
  textoBotaoFechar: {
    color: "#ffffff",
    fontWeight: "600",
  },
})
