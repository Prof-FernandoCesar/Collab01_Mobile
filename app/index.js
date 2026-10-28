import { useState } from "react"
import { Image, ImageBackground, Modal, Pressable, ScrollView, Text, TextInput, View } from "react-native"
import { useRouter } from "expo-router"


export default function HomeScreen() {
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
        className="flex-1"
        imageStyle={{
          opacity: 0.55,
          width: "110%",
          height: "110%",
          left: "-5%",
          top: "-5%",
        }}
        resizeMode="cover"
        source={require("../assets/background.png")}
      >
        <ScrollView className="flex-1 bg-transparent">
          <View className="flex-1 items-center px-5 py-8">
            <View className="w-full max-w-2xl">
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Voltar para o início"
                onPress={() => router.replace("/")}
                className="mb-8 self-center"
              >
                <Image
                  accessibilityLabel="Logo da FAAMA"
                  className="h-12 w-72"
                  resizeMode="contain"
                  source={require("../assets/image.png")}
                />
              </Pressable>

              <View className="mb-6">
                <Text className="mb-2 text-center font-semibold uppercase tracking-widest text-sky-700">
                  Vida acadêmica
                </Text>
                <Text className="text-center text-3xl font-bold text-blue-950">
                  Calculadora de Média Semestral
                </Text>
                <Text className="mt-3 text-center text-base leading-6 text-slate-600">
                  Informe suas duas notas e veja sua média do semestre.
                </Text>
              </View>

              <View className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
                <Text className="mb-5 text-lg font-semibold text-blue-950">
                  Suas notas
                </Text>

                <Text className="mb-2 font-medium text-slate-700">Primeira nota</Text>
                <TextInput
                  accessibilityLabel="Primeira nota"
                  className="mb-5 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900"
                  keyboardType="decimal-pad"
                  onChangeText={setFirstGrade}
                  placeholder="Ex.: 8,5"
                  placeholderTextColor="#94a3b8"
                  value={firstGrade}
                />

                <Text className="mb-2 font-medium text-slate-700">Segunda nota</Text>
                <TextInput
                  accessibilityLabel="Segunda nota"
                  className="mb-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900"
                  keyboardType="decimal-pad"
                  onChangeText={setSecondGrade}
                  placeholder="Ex.: 7,0"
                  placeholderTextColor="#94a3b8"
                  value={secondGrade}
                />

                {errorMessage !== "" && (
                  <Text accessibilityRole="alert" className="mt-2 text-sm text-red-600">
                    {errorMessage}
                  </Text>
                )}

                <Pressable
                  accessibilityRole="button"
                  className="mt-5 items-center rounded-md bg-blue-950 px-4 py-4"
                  onPress={calculateAverage}
                >
                  <Text className="font-semibold text-white">Calcular média</Text>
                </Pressable>

                <Pressable
                  accessibilityRole="button"
                  className="mt-3 items-center rounded-md border border-sky-200 px-4 py-3"
                  onPress={clearFields}
                >
                  <Text className="font-semibold text-blue-800">Limpar campos</Text>
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
        <View className="flex-1 items-center justify-center px-6">
          <Pressable
            accessibilityLabel="Fechar resultado"
            accessibilityRole="button"
            className="absolute inset-0 bg-slate-950/50"
            onPress={() => setAverage(null)}
          />

          <View className="z-10 w-full max-w-sm items-center rounded-xl border border-sky-100 bg-white p-7">
            <Text className="text-base font-medium text-slate-600">Sua média</Text>
            <Text className="mt-2 text-5xl font-bold text-blue-950">
              {average?.toFixed(1).replace(".", ",")}
            </Text>
            <Text className={`mt-3 text-xl font-semibold ${passed ? "text-emerald-700" : "text-amber-700"}`}>
              {passed ? "Aprovado" : "Recuperação"}
            </Text>
            <Text className="mt-2 text-center text-sm leading-5 text-slate-600">
              {passed
                ? "Sua média é igual ou superior a 7,0."
                : "Sua média ficou abaixo de 7,0."}
            </Text>
            <Pressable
              accessibilityRole="button"
              className="mt-6 rounded-md bg-blue-950 px-6 py-3"
              onPress={() => setAverage(null)}
            >
              <Text className="font-semibold text-white">Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}
