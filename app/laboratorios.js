
import {
  Image,
  ScrollView,
  Text,
  View,
  Pressable,
  Linking,
  StyleSheet,
} from 'react-native'
import { useRouter } from 'expo-router'

// Componentes auxiliares
function Section({ title, children, large = false }) {
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, large && styles.largeSectionTitle]}>
        {title}
      </Text>
      {children}
    </View>
  )
}

function Card({ children, style }) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  )
}

function Paragraph({ children }) {
  return (
    <Text style={styles.paragraph}>{children}</Text>
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
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator
      >
        <Section title="Nossos Laboratórios" large>
          {labs.map((lab) => (
            <Card style={styles.labCard} key={lab.title}>
              <Image
                source={{ uri: lab.image }}
                style={styles.labImage}
                resizeMode="cover"
              />

              <Text style={styles.labTitle}>
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

          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.scheduleButton}
              onPress={() =>
                Linking.openURL(
                  'https://bookings.cloud.microsoft/book/Laboratriodehabilidadesemenfermagem@educadventista.onmicrosoft.com/?ismsaljsauthenabled=true'
                )
              }
            >
              <Text style={styles.scheduleButtonText}>
                Agendar horário
              </Text>
            </Pressable>
          </View>
        </Section>

        <View style={styles.backButtonContainer}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.push('/enfermagem')}
          >
            <Text style={styles.backButtonText}>
              ← Voltar para Enfermagem
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  section: {
    width: '100%',
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
    color: '#172554',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  largeSectionTitle: {
    fontSize: 36,
    lineHeight: 40,
  },
  card: {
    borderWidth: 1,
    borderColor: '#e0f2fe',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  labCard: {
    width: '100%',
    marginBottom: 24,
  },
  labImage: {
    width: '100%',
    height: 192,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  labTitle: {
    marginTop: 12,
    color: '#172554',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
  },
  paragraph: {
    marginBottom: 12,
    color: '#334155',
    fontSize: 16,
    lineHeight: 28,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  scheduleButton: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 12,
    backgroundColor: '#172554',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  scheduleButtonText: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  backButtonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#172554',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButtonText: {
    color: '#172554',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
})
