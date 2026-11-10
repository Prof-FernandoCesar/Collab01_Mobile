
import { Image, ScrollView, Text, View, Pressable, Linking } from 'react-native'
import { useRouter } from 'expo-router'

// Componentes auxiliares
function Section({ title, children, large = false }) {
  return (
    <View className="mb-6 w-full">
      <Text
        className={`mb-3 font-bold text-blue-950 text-center ${
          large ? 'text-4xl' : 'text-xl'
        }`}
      >
        {title}
      </Text>
      {children}
    </View>
  )
}

function Card({ children, className = '' }) {
  return (
    <View className={`rounded-xl border border-sky-100 bg-white p-5 shadow-sm ${className}`}>
      {children}
    </View>
  )
}

function Paragraph({ children }) {
  return (
    <Text className="mb-3 text-base leading-7 text-slate-700">
      {children}
    </Text>
  )
}

const labs = [
  {
    title: 'Laboratório de Anatomia',
    image: 'https://www.faama.edu.br/wp-content/uploads/2025/05/lab04.jpg',
    description:
      'Focado no estudo anatômico, este laboratório permite uma abordagem prática e detalhada sobre as estruturas do corpo humano. Com o auxílio de modelos anatômicos representando os diferentes sistemas, os alunos podem explorar a morfologia e a organização do organismo de forma interativa. O laboratório também conta com a Mesa Atrix, uma tecnologia digital avançada que permite a visualização em alta definição de estruturas anatômicas reais em um corpo humano de verdade que foi doado para fins educacionais e científicos, facilitando a correlação entre teoria e prática. O envolvimento tecnológico em realidade aumentada no ensino aprimora o aprendizado, oferecendo uma experiência aprofundada no estudo da anatomia.',
  },
  {
    title: 'Laboratório de Bioquímica',
    image: 'https://www.faama.edu.br/wp-content/uploads/2025/05/lab03.jpg',
    description:
      'Dedicado à pesquisa e experimentação em práticas químicas, bioquímicas e físico-químicas, este laboratório oferece suporte para a realização de análises laboratoriais essenciais à formação acadêmica. Equipado com tecnologia e infraestrutura de última geração, proporciona um ambiente adequado para a compreensão dos processos biológicos e químicos fundamentais à área da saúde.',
  },
  {
    title: 'Laboratório de Histologia',
    image: 'https://www.faama.edu.br/wp-content/uploads/2025/05/lab02.jpg',
    description:
      'Destinado ao estudo histológico dos tecidos e sistemas, este laboratório permite que os alunos observem e identifiquem diferentes tecidos do corpo humano em lâminas já preparadas, além de confeccionarem suas próprias amostras para análise microscópica. Equipado com microscópios ópticos, kits histológicos educacionais de diversos tecidos e modelos celulares, o espaço proporciona uma aprendizagem prática, facilitando a compreensão da estrutura e função biológica e celular dos tecidos humanos.',
  },
  {
    title: 'Laboratório de Habilidades em Enfermagem',
    image: 'https://www.faama.edu.br/wp-content/uploads/2025/05/lab05.jpg',
    description:
      'O Laboratório de Habilidades em Enfermagem é um ambiente projetado para o desenvolvimento das competências práticas dos acadêmicos, simulando cenários hospitalares realistas. Nesse espaço, os alunos têm a oportunidade de aprimorar suas habilidades em procedimentos essenciais da prática clínica, como primeiros socorros, atendimentos de emergência, assistência ao parto e cuidados com pacientes críticos. Utilizando a metodologia de Simulação Realística, o laboratório conta com simuladores de alta tecnologia, incluindo os modelos Ares e Sofia, que oferecem respostas fisiológicas avançadas, proporcionando uma experiência imersiva e interativa. Esses recursos permitem que os estudantes pratiquem de forma segura, ética e supervisionada, garantindo um aprendizado alinhado às demandas do ambiente hospitalar.',
  },
]

export default function Laboratorios() {
  const router = useRouter()

  return (
    <View className="flex-1 bg-slate-50">
      <ScrollView
        className="flex-1"
        contentContainerClassName="w-full items-center px-5 py-8"
        showsVerticalScrollIndicator
      >
        <Section title="Nossos Laboratórios" large>
          {labs.map((lab) => (
            <Card className="mb-6 w-full" key={lab.title}>
              <Image
                source={{ uri: lab.image }}
                className="h-48 w-full rounded-t-lg"
                resizeMode="cover"
              />

              <Text className="mt-3 text-xl font-bold text-blue-950">
                {lab.title}
              </Text>

              <Paragraph>{lab.description}</Paragraph>
            </Card>
          ))}
        </Section>

        <Section title="Agende seu horário no laboratório!">
          <Paragraph>
            Organize sua visita e agende seu horário no Laboratório de
            Habilidades em Enfermagem.
          </Paragraph>

          <View className="items-center">
            <Pressable
              className="mt-2 w-full max-w-xs items-center rounded-xl bg-blue-950 px-5 py-3"
              onPress={() =>
                Linking.openURL(
                  'https://bookings.cloud.microsoft/book/Laboratriodehabilidadesemenfermagem@educadventista.onmicrosoft.com/?ismsaljsauthenabled=true'
                )
              }
            >
              <Text className="text-center text-base font-bold text-white">
                Agendar horário
              </Text>
            </Pressable>
          </View>
        </Section>

        <View className="mb-6 w-full items-center">
          <Pressable
            className="w-full max-w-xs items-center rounded-xl border border-blue-950 bg-white px-5 py-4"
            onPress={() => router.push('/enfermagem')}
          >
            <Text className="text-center text-base font-bold text-blue-950">
              ← Voltar para Enfermagem
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}
