import {
  Image,
  ScrollView,
  Text,
  View,
  Pressable,
  Linking,
  StyleSheet,
  useWindowDimensions,
} from 'react-native'
import { useRouter } from 'expo-router'

const courseDetails = [
  ['Modalidade', 'Presencial'],
  ['Duração', '05 anos'],
  ['Mensalidade', 'R$ 1.365,00'],
  ['Taxa de Eventos', 'R$ 400,00'],
  ['Titulação', 'Bacharelado'],
  ['Avaliações MEC', '★★★★'],
]

const pillars = [
  {
    title: 'Aprender a conhecer',
    text: 'Desenvolver a capacidade de compreender, interpretar e construir conhecimentos, estimulando a curiosidade, o pensamento crítico e a aprendizagem contínua.',
  },
  {
    title: 'Aprender a fazer',
    text: 'Aplicar os conhecimentos adquiridos na prática profissional, desenvolvendo habilidades técnicas, científicas e assistenciais necessárias ao exercício da Enfermagem.',
  },
  {
    title: 'Aprender a conviver',
    text: 'Desenvolver relações interpessoais baseadas no respeito, na empatia, na colaboração e na valorização da diversidade, trabalhando em equipe e promovendo o cuidado humanizado.',
  },
  {
    title: 'Aprender a ser',
    text: 'Formar profissionais éticos, responsáveis, autônomos e comprometidos com a transformação da sociedade e com a promoção da saúde.',
  },
]

const competencies = [
  'Atuar na promoção, prevenção, recuperação e reabilitação da saúde, considerando o indivíduo, a família e a comunidade.',
  'Desenvolver ações de cuidado de Enfermagem fundamentadas em conhecimentos científicos, técnicos e éticos.',
  'Gerenciar serviços e equipes de Enfermagem, contribuindo para a qualidade da assistência.',
  'Participar de ações de educação em saúde, pesquisa e extensão.',
  'Atuar de forma crítica, reflexiva e humanizada diante das necessidades de saúde da população.',
]

const objectives = [
  'Formar enfermeiros generalistas, humanistas, críticos e reflexivos, qualificados para o exercício da Enfermagem, com base no rigor científico e intelectual e pautados em princípios éticos.',
  'Capacitar profissionais para atuar nos diferentes níveis de atenção à saúde, desenvolvendo ações de promoção, prevenção, recuperação e reabilitação.',
  'Desenvolver competências para o trabalho em equipe, a gestão dos serviços de saúde, a pesquisa e a educação permanente.',
]

const faculty = [
  ['Zélia de Oliveira Saldanha', 'Doutora'],
  ['Giselle Caroline Lopes Mariotto', 'Mestre'],
  ['Marta Cleonice Cordeiro de Assunção', 'Mestre'],
  ['Lara Caroline Moreira Morais da Cruz', 'Mestre'],
  ['Derson da Silva Lopes Junior', 'Pós Doutor'],
  ['Caroline Dantas Brasil Sfair', 'Doutora'],
  ['Adriana Cristina Madalena Prudencio', 'Mestre'],
  ['Rayanne Branco dos Santos Lima', 'Doutora'],
  ['Jaime da Silva Nere', 'Especialista'],
  ['Dayanne de Nazaré dos Santos', 'Mestre'],
  ['Bruno Sales Gomes Ferreira', 'Especialista'],
  ['Iraceli Cristini Hubner Zukowski', 'Especialista'],
  ['Naomi Vidal Ferreira', 'Doutora'],
  ['Stella de Mello Silva', 'Doutora'],
  ['Michelle Pinheiro Pena', 'Especialista'],
]

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
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

function BulletList({ items }) {
  return (
    <View style={styles.bulletList}>
      {items.map((item) => (
        <View style={styles.bulletRow} key={item}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  )
}

const professorImages = {
  'Zélia de Oliveira Saldanha': require('../assets/zelia.png'),
  'Giselle Caroline Lopes Mariotto': require('../assets/giselle.png'),
  'Marta Cleonice Cordeiro de Assunção': require('../assets/marta.png'),
  'Lara Caroline Moreira Morais da Cruz': require('../assets/lara.png'),
  'Derson da Silva Lopes Junior': require('../assets/derson.png'),
  'Caroline Dantas Brasil Sfair': require('../assets/caroline.png'),
  'Adriana Cristina Madalena Prudencio': require('../assets/adrianna.png'),
  'Rayanne Branco dos Santos Lima': require('../assets/rayanne.png'),
  'Jaime da Silva Nere': require('../assets/jaime.png'),
  'Dayanne de Nazaré dos Santos': require('../assets/dayanne.png'),
  'Bruno Sales Gomes Ferreira': require('../assets/bruno.png'),
  'Iraceli Cristini Hubner Zukowski': require('../assets/iraceli.png'),
  'Naomi Vidal Ferreira': require('../assets/naomi.png'),
  'Stella de Mello Silva': require('../assets/stella.png'),
  'Michelle Pinheiro Pena': require('../assets/michelle.png'),
}

export default function Enfermagem() {
  const router = useRouter()
  const { width } = useWindowDimensions()
  const gridCardStyle = width >= 640 ? styles.gridCardWide : styles.gridCard

  return (
    <View style={styles.screen}>
      <Image
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={styles.backgroundImage}
        accessibilityElementsHidden
        importantForAccessibility="no"
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator
      >
        <View style={styles.content}>

          <View style={styles.hero}>
            <Image
              source={require('../assets/image.png')}
              resizeMode="contain"
              style={styles.logo}
              accessibilityLabel="Logo da FAAMA"
            />
            <Text style={styles.eyebrow}>
              Graduação FAAMA
            </Text>
            <Text style={styles.heroTitle}>
              Enfermagem
            </Text>
          </View>

          <Section title="Informações gerais">
            <View style={styles.rowWrap}>
              {courseDetails.map(([label, value]) => (
                <Card
                  style={gridCardStyle}
                  key={label}
                >
                  <Text style={styles.label}>
                    {label}
                  </Text>
                  {value ? (
                    <Text style={styles.value}>
                      {value}
                    </Text>
                  ) : null}
                </Card>
              ))}
            </View>
          </Section>

          <Section title="Perfil do egresso">
            <Card>
              <Text style={styles.cardTitle}>
                Formação Inovadora em Enfermagem na FAAMA
              </Text>

              <Text style={styles.subtitle}>
                Desenvolvendo Profissionais Comprometidos com a Saúde e a Sociedade
              </Text>

              <Paragraph>
                A formação em Enfermagem na FAAMA proporciona uma formação robusta e humanizada,
                preparando profissionais para atuar com competência, ética e compromisso social. O
                curso busca desenvolver conhecimentos, habilidades e atitudes que permitam ao futuro
                enfermeiro compreender as necessidades de saúde da população e atuar de maneira
                crítica, reflexiva e transformadora.
              </Paragraph>

              <View style={styles.nestedSection}>
                <Text style={styles.nestedSectionTitle}>
                  Os quatro pilares da formação
                </Text>

                <View style={styles.rowWrap}>
                  {pillars.map((pillar) => (
                    <Card
                      style={gridCardStyle}
                      key={pillar.title}
                    >
                      <Text style={styles.pillarTitle}>
                        {pillar.title}
                      </Text>
                      <Text style={styles.bulletText}>
                        {pillar.text}
                      </Text>
                    </Card>
                  ))}
                </View>
              </View>
            </Card>
          </Section>

          <Section title="Competências Profissionais">
            <BulletList items={competencies} />
          </Section>

          <Section title="Formação Alinhada às Demandas Contemporâneas">
            <Card>
              <Paragraph>
                A formação em Enfermagem da FAAMA busca acompanhar as transformações da sociedade e
                as necessidades atuais dos serviços de saúde. O curso integra conhecimentos
                científicos, práticas assistenciais, tecnologias e princípios éticos, preparando
                profissionais capazes de enfrentar os desafios da profissão e contribuir para a
                melhoria da qualidade de vida da população.
              </Paragraph>
            </Card>
          </Section>

          <Section title="Objetivos do Curso">
            <BulletList items={objectives} />
          </Section>

          <Section title="Corpo Docente">
            <View style={styles.rowWrap}>
              {faculty.map(([name, degree]) => (
                <Card
                  style={gridCardStyle}
                  key={name}
                >
                  <Image
                    source={professorImages[name]}
                    style={styles.professorImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.professorName}>
                    {name}
                  </Text>
                  <Text style={styles.professorDegree}>
                    {degree}
                  </Text>
                </Card>
              ))}
            </View>
          </Section>

          <Section title="Laboratórios">
            <Card>
              <Paragraph>
                Os laboratórios didáticos do Curso de Enfermagem da FAAMA são fundamentais para a
                formação prática dos acadêmicos, proporcionando um ambiente adequado para o
                aprendizado de habilidades essenciais à profissão. Além das aulas práticas, esses
                espaços são utilizados para projetos de pesquisa e extensão, garantindo uma
                abordagem inovadora e aplicada ao ensino da Enfermagem.
              </Paragraph>

              <Paragraph>
                O curso dispõe de quatro laboratórios: Bases Morfofuncionais I, II e III, além do
                Laboratório de Habilidades em Enfermagem. Os laboratórios são amplos, climatizados e
                equipados com tecnologias atualizadas, incluindo manutenção preventiva e corretiva
                para assegurar a qualidade das atividades.
              </Paragraph>

              <Paragraph>
                Os Laboratórios de Bases Morfofuncionais I e II, com capacidade para 30 alunos cada,
                seguem as tendências atuais do ensino em saúde, permitindo a exploração dos tecidos
                e sistemas biológicos por meio de metodologias ativas e tecnologias educacionais. O
                Laboratório de Bases Morfofuncionais III complementa esse aprendizado com modelos
                anatômicos detalhados e a mesa anatômica virtual Atrix com Vh Dissector touch,
                possibilitando um estudo interativo e aprofundado da anatomia humana sem necessidade
                de material biológico, favorecendo um aprendizado ético e dinâmico.
              </Paragraph>

              <Paragraph>
                Já o Laboratório de Habilidades em Enfermagem oferece simulação realística com
                simuladores de última geração, permitindo que os alunos pratiquem procedimentos de
                forma segura e supervisionada. Esse ambiente contribui para o desenvolvimento das
                competências técnicas e profissionais essenciais para a atuação na área, garantindo
                um ensino alinhado às novas tecnologias e às exigências da prática clínica.
              </Paragraph>

              <View style={styles.tags}>
                {['Laboratórios', 'Agendamento', 'Biblioteca'].map((item) => (
                  <View
                    style={styles.tag}
                    key={item}
                  >
                    <Text style={styles.tagText}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </Card>
          </Section>

          <View style={styles.actions}>
            <Pressable
              style={styles.primaryButton}
              onPress={() => router.push('/laboratorios')}
            >
              <Text style={styles.primaryButtonText}>
                Ver Laboratórios
              </Text>
            </Pressable>

            <Pressable
              style={styles.secondaryPrimaryButton}
              onPress={() => Linking.openURL('https://biblioteca.faama.edu.br/terminalweb')}
            >
              <Text style={styles.primaryButtonText}>
                Conheça nossa biblioteca
              </Text>
            </Pressable>
          </View>

          <Section title="Formação Prática e Estágios Clínicos">
            <Card>
              <Paragraph>
                A FAAMA se destaca na região Norte pela formação oferecida no curso de Enfermagem,
                com uma matriz curricular moderna, professores qualificados e infraestrutura
                adequada para o desenvolvimento das atividades acadêmicas. Os estudantes contam
                com laboratórios equipados e ambientes de simulação que contribuem para a formação
                prática e o desenvolvimento de habilidades profissionais.
              </Paragraph>

              <Paragraph>
                O curso mantém parcerias com unidades de saúde e hospitais de municípios da região
                metropolitana de Belém, proporcionando aos acadêmicos experiências práticas e
                estágios clínicos. Essas atividades começam a partir do segundo ano do curso,
                permitindo que os estudantes tenham contato progressivo com a realidade dos
                serviços de saúde.
              </Paragraph>

              <Paragraph>
                A FAAMA também mantém uma parceria próxima com o Hospital Adventista de Belém,
                fortalecendo a relação entre a formação acadêmica e a prática profissional.
              </Paragraph>
            </Card>
          </Section>

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
  backgroundImage: {
    position: 'absolute',
    left: '-5%',
    top: '-5%',
    width: '110%',
    height: '110%',
    opacity: 0.55,
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
  content: {
    width: '100%',
    maxWidth: 896,
    alignSelf: 'center',
  },
  hero: {
    marginBottom: 24,
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#eff6ff',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  logo: {
    width: 192,
    height: 64,
    marginBottom: 20,
  },
  eyebrow: {
    color: '#2563eb',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.4,
  },
  heroTitle: {
    marginTop: 8,
    color: '#172554',
    fontSize: 48,
    lineHeight: 48,
    fontWeight: '700',
    textAlign: 'center',
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
  gridCard: {
    width: '100%',
    marginBottom: 12,
  },
  gridCardWide: {
    width: '48%',
    marginRight: '2%',
    marginBottom: 12,
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  label: {
    color: '#64748b',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  value: {
    marginTop: 4,
    color: '#172554',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  cardTitle: {
    color: '#172554',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 12,
    color: '#075985',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
  },
  paragraph: {
    marginBottom: 12,
    color: '#334155',
    fontSize: 16,
    lineHeight: 28,
  },
  nestedSection: {
    marginTop: 12,
  },
  nestedSectionTitle: {
    marginBottom: 12,
    color: '#172554',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
  },
  pillarTitle: {
    marginBottom: 8,
    color: '#075985',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
  },
  bulletList: {
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
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  bullet: {
    marginRight: 12,
    color: '#0369a1',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
  },
  bulletText: {
    flex: 1,
    color: '#334155',
    fontSize: 16,
    lineHeight: 28,
  },
  professorImage: {
    width: 128,
    height: 128,
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 8,
  },
  professorName: {
    color: '#172554',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  professorDegree: {
    marginTop: 4,
    color: '#475569',
    fontSize: 14,
    lineHeight: 20,
  },
  tags: {
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#bae6fd',
    borderRadius: 9999,
    backgroundColor: '#f0f9ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tagText: {
    color: '#075985',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
  actions: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  primaryButton: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#172554',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  secondaryPrimaryButton: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#172554',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
})
