import { Image, ScrollView, Text, View, Pressable, Linking } from 'react-native'
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
    <View className="mb-6 w-full">
      <Text className="mb-3 text-xl font-bold text-blue-950">
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

function BulletList({ items }) {
  return (
    <View className="rounded-xl border border-sky-100 bg-white p-5 shadow-sm">
      {items.map((item) => (
        <View className="mb-3 flex-row" key={item}>
          <Text className="mr-3 text-base font-bold text-sky-700">
            •
          </Text>
          <Text className="flex-1 text-base leading-7 text-slate-700">
            {item}
          </Text>
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

  return (
    <View className="flex-1 bg-slate-50">
      <Image
        source={require('../assets/background.png')}
        resizeMode="cover"
        className="absolute -left-[5%] -top-[5%] h-[110%] w-[110%] opacity-55"
        accessibilityElementsHidden
        importantForAccessibility="no"
      />

      <ScrollView
        className="flex-1"
        contentContainerClassName="w-full items-center px-5 py-8"
        showsVerticalScrollIndicator
      >
        <View className="w-full max-w-4xl self-center">

          <View className="mb-6 items-center rounded-2xl bg-blue-50 px-6 py-8">
            <Image
              source={require('../assets/image.png')}
              resizeMode="contain"
              className="mb-5 h-16 w-48"
              accessibilityLabel="Logo da FAAMA"
            />
            <Text className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Graduação FAAMA
            </Text>
            <Text className="mt-2 text-center text-5xl font-bold text-blue-950">
              Enfermagem
            </Text>
          </View>

          <Section title="Informações gerais">
            <View className="flex-row flex-wrap">
              {courseDetails.map(([label, value]) => (
                <Card
                  className="mb-3 w-full sm:w-[48%] sm:mr-[2%]"
                  key={label}
                >
                  <Text className="text-sm font-medium text-slate-500">
                    {label}
                  </Text>
                  {value ? (
                    <Text className="mt-1 text-base font-semibold text-blue-950">
                      {value}
                    </Text>
                  ) : null}
                </Card>
              ))}
            </View>
          </Section>

          <Section title="Perfil do egresso">
            <Card>
              <Text className="text-xl font-bold text-blue-950">
                Formação Inovadora em Enfermagem na FAAMA
              </Text>

              <Text className="mb-3 mt-2 text-lg font-semibold text-sky-800">
                Desenvolvendo Profissionais Comprometidos com a Saúde e a Sociedade
              </Text>

              <Paragraph>
                A formação em Enfermagem na FAAMA proporciona uma formação robusta e humanizada,
                preparando profissionais para atuar com competência, ética e compromisso social. O
                curso busca desenvolver conhecimentos, habilidades e atitudes que permitam ao futuro
                enfermeiro compreender as necessidades de saúde da população e atuar de maneira
                crítica, reflexiva e transformadora.
              </Paragraph>

              <View className="mt-3">
                <Text className="mb-3 text-lg font-semibold text-blue-950">
                  Os quatro pilares da formação
                </Text>

                <View className="flex-row flex-wrap">
                  {pillars.map((pillar) => (
                    <Card
                      className="mb-3 w-full sm:w-[48%] sm:mr-[2%]"
                      key={pillar.title}
                    >
                      <Text className="mb-2 text-lg font-semibold text-sky-800">
                        {pillar.title}
                      </Text>
                      <Text className="text-base leading-7 text-slate-700">
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
            <View className="flex-row flex-wrap">
              {faculty.map(([name, degree]) => (
                <Card
                  className="mb-3 w-full sm:w-[48%] sm:mr-[2%]"
                  key={name}
                >
                  <Image
                    source={professorImages[name]}
                    style={{ width: 128, height: 128, borderRadius: 12, alignSelf: 'center', marginBottom: 8 }}
                    resizeMode="cover"
                  />
                  <Text className="text-base font-semibold text-blue-950">
                    {name}
                  </Text>
                  <Text className="mt-1 text-sm text-slate-600">
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

              <View className="mt-2 flex-row flex-wrap">
                {['Laboratórios', 'Agendamento', 'Biblioteca'].map((item) => (
                  <View
                    className="mb-2 mr-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2"
                    key={item}
                  >
                    <Text className="text-sm font-semibold text-sky-800">
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </Card>
          </Section>

          <View className="mb-6 w-full items-center">
            <Pressable
              className="mb-3 w-full max-w-xs items-center rounded-xl bg-blue-950 px-5 py-4"
              onPress={() => router.push('/laboratorios')}
            >
              <Text className="text-center text-base font-bold text-white">
                Ver Laboratórios
              </Text>
            </Pressable>

            <Pressable
              className="w-full max-w-xs items-center rounded-xl bg-blue-950 px-5 py-4"
              onPress={() => Linking.openURL('https://biblioteca.faama.edu.br/terminalweb')}
            >
              <Text className="text-center text-base font-bold text-white">
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
