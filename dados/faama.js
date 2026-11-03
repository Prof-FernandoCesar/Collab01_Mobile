export const instituicao = {
  sigla: 'FAAMA',
  nome: 'Faculdade Adventista da Amazônia',
  local: 'Benevides · Pará',
  endereco: 'Rodovia Augusto Meira Filho, km 01 · Paricatuba · Benevides-PA',
  telefone: '(91) 99145-5360',
  site: 'faama.edu.br',
  missao:
    'Promover, por meio da educação cristã, o desenvolvimento integral do educando, formando cidadãos autônomos, comprometidos com o bem-estar da comunidade, da pátria e com Deus.',
  visao:
    'Ser uma instituição em expansão, inovadora e excelente na formação de missionários comprometidos com o desenvolvimento da Amazônia e do mundo.',
};

export const estatisticas = [
  { valor: '5', unidade: '/5', rotulo: 'Conceito MEC Pedagogia' },
  { valor: '104', unidade: 'ha', rotulo: 'Área do campus' },
  { valor: '165', unidade: '', rotulo: 'Países na Rede Adventista' },
  { valor: '9.400', unidade: '', rotulo: 'Instituições na rede' },
];

export const valores = [
  { nome: 'Excelência', texto: 'Compromisso com elevado padrão de qualidade em todos os serviços.' },
  { nome: 'Cooperação', texto: 'Agir conjuntamente para alcançar um objetivo comum.' },
  {
    nome: 'Desenvolvimento Integral',
    texto: 'O ser humano como um todo: físico, intelectual, emocional, social e espiritual.',
  },
  { nome: 'Compaixão', texto: 'Refletir o amor de Deus através do cuidado, respeito e empatia.' },
  { nome: 'Integridade', texto: 'Viver uma vida compatível com os valores éticos e cristãos.' },
];

export const infraestrutura = [
  { sigla: 'BIB', titulo: 'Biblioteca', texto: 'Acervo automatizado, livre acesso às estantes e plataformas virtuais.' },
  { sigla: 'LAB', titulo: 'Laboratório de Informática', texto: 'Ambiente climatizado, acessível e com suporte do setor de TI.' },
  { sigla: 'TDIC', titulo: 'Tecnologias Digitais', texto: 'Portal do aluno, ambiente virtual e recursos digitais para aulas.' },
  { sigla: 'BRQ', titulo: 'Brinquedoteca Itinerante', texto: 'Recurso lúdico para práticas de Educação Infantil e Anos Iniciais.' },
  { sigla: 'RES', titulo: 'Residencial', texto: 'Moradia estudantil no campus: estude e more no mesmo lugar.' },
  { sigla: 'ECO', titulo: 'Campus na Amazônia', texto: '104 hectares de área verde na região metropolitana de Belém.' },
];

export const cursosGraduacao = ['Pedagogia', 'Psicologia', 'Teologia', 'Direito', 'Enfermagem'];

export const pedagogia = {
  titulo: 'Licenciatura em Pedagogia',
  autorizacao: 'Curso implantado em 2017 · Portaria MEC nº 29/2017',
  conceitoMec: 'Conceito de Curso 5 (2022)',
  coordenador: 'Prof. Dr. Zultonney Flávio Sampaio Velasco',
  docentes: 15,
  fatos: [
    { valor: '8', rotulo: 'semestres' },
    { valor: '3.668', rotulo: 'horas' },
    { valor: '400', rotulo: 'h de estágio' },
    { valor: '5', rotulo: 'nota MEC' },
  ],
  proposta:
    'A docência é o eixo da formação: o pedagogo da FAAMA é preparado para ensinar na Educação Infantil e nos Anos Iniciais do Ensino Fundamental e para gerir processos educativos em espaços escolares e não escolares, unindo sólida base teórica, prática desde o primeiro semestre e formação integral à luz dos valores cristãos.',
  objetivo:
    'Formar licenciados aptos a uma prática profissional competente, ética e comprometida com a construção de uma sociedade solidária e com justiça social.',
  nucleos: [
    {
      nome: 'Estudos Básicos',
      texto: 'Filosofia, Psicologia, Sociologia, Antropologia, Didática e Currículo: os fundamentos da ação educativa.',
    },
    {
      nome: 'Aprofundamento e Diversificação',
      texto: 'Metodologias da Educação Infantil, Anos Iniciais, Inclusão, EJA e Gestão de processos educativos.',
    },
    {
      nome: 'Estudos Integradores',
      texto: 'Iniciação científica, monitoria, extensão, seminários e projetos que conectam a faculdade à comunidade.',
    },
  ],
};

export const docencia = [
  {
    id: 'infantil',
    sigla: 'EI',
    titulo: 'Educação Infantil',
    resumo: 'Cuidar e educar crianças de 0 a 5 anos.',
    descricao:
      'Planejamento de rotinas, experiências lúdicas e práticas de linguagem que respeitam o desenvolvimento físico, emocional e social da criança.',
    disciplinas: [
      'Fundamentos da Educação Infantil',
      'Linguagem Oral e Escrita',
      'Literatura Infantil',
      'Ludicidade e Movimento',
      'Matemática na Educação Infantil',
      'Construção de Jogos Educativos',
    ],
    estagio: 'Estágio I · 100 h',
  },
  {
    id: 'anos-iniciais',
    sigla: 'AI',
    titulo: 'Anos Iniciais do Ensino Fundamental',
    resumo: 'Alfabetização e ensino integrado do 1º ao 5º ano.',
    descricao:
      'Ensino de Língua Portuguesa, Matemática, Ciências, História, Geografia e Arte de forma integrada, com foco em alfabetização e letramento.',
    disciplinas: [
      'Alfabetização e Letramento',
      'Metodologia de Língua Portuguesa',
      'Metodologia de Matemática',
      'Metodologia de Ciências',
      'Metodologia de História e Geografia',
      'Metodologia de Arte',
    ],
    estagio: 'Estágio II · 100 h',
  },
  {
    id: 'inclusiva',
    sigla: 'INC',
    titulo: 'Educação Inclusiva',
    resumo: 'Aprendizagem para todos, sem exceção.',
    descricao:
      'Identificação de necessidades educacionais específicas, adaptação curricular, comunicação em Libras e acolhimento da diversidade em sala de aula.',
    disciplinas: [
      'Educação Inclusiva',
      'Fundamentos em Libras',
      'Neurociências e Aprendizagem',
      'Educação e Diversidade Sociocultural',
    ],
    estagio: 'Estágio IV · 100 h',
  },
  {
    id: 'eja',
    sigla: 'EJA',
    titulo: 'Educação de Jovens e Adultos',
    resumo: 'Para quem não estudou na idade certa.',
    descricao:
      'Práticas que valorizam a experiência de vida do estudante adulto, incluindo contextos do campo e da realidade amazônica.',
    disciplinas: [
      'Educação de Jovens e Adultos',
      'Educação do Campo',
      'Direitos Humanos e Relações Étnico-Raciais',
      'Educação em Ambientes não Escolares',
    ],
    estagio: 'Vivências Integradoras',
  },
];

export const gestao = [
  {
    sigla: 'DIR',
    titulo: 'Direção Escolar',
    atribuicoes: [
      'Liderar o projeto político-pedagógico',
      'Gerir pessoas, recursos e orçamento',
      'Articular escola, família e comunidade',
    ],
    base: 'Gestão Educacional · Gestão Financeira na Escola',
  },
  {
    sigla: 'CP',
    titulo: 'Coordenação Pedagógica',
    atribuicoes: [
      'Acompanhar o planejamento docente',
      'Promover formação continuada',
      'Analisar indicadores de aprendizagem',
    ],
    base: 'Coordenação Pedagógica · 60 h',
  },
  {
    sigla: 'SUP',
    titulo: 'Supervisão Escolar',
    atribuicoes: [
      'Zelar pelo currículo e pelas normas educacionais',
      'Orientar processos de avaliação',
      'Garantir a coerência entre plano e prática',
    ],
    base: 'Currículos · Avaliação Educacional · Políticas Educacionais',
  },
  {
    sigla: 'OE',
    titulo: 'Orientação Educacional',
    atribuicoes: [
      'Acompanhar o desenvolvimento do estudante',
      'Mediar conflitos e relações escolares',
      'Apoiar famílias e projetos de vida',
    ],
    base: 'Orientação Educacional · 60 h',
  },
];

export const diferenciais = [
  {
    titulo: 'Formação humana e tecnológica',
    texto: 'Valores cristãos e ética lado a lado com tecnologia educacional e ensino híbrido.',
    itens: ['Cosmovisão Bíblico-Cristã', 'Ética Cristã', 'TIC no Ensino', 'Educação a Distância'],
  },
  {
    titulo: 'Laboratórios',
    texto: 'Espaços para experimentar o que se aprende em sala.',
    itens: ['Informática', 'Tecnologias Digitais', 'Brinquedoteca Itinerante'],
  },
  {
    titulo: 'Estágio supervisionado',
    texto: 'Quatro estágios de 100 h, do 5º ao 8º semestre, em escolas parceiras.',
    itens: ['Educação Infantil', 'Ensino Fundamental', 'Gestão Escolar', 'Educação Especial'],
  },
  {
    titulo: 'Projetos comunitários',
    texto: 'Prática desde o 1º semestre, com impacto real na comunidade de Benevides.',
    itens: ['Projeto Integrador I–IV', 'Vivências Integradoras I–VIII', 'Voluntariado e Transformação Social'],
  },
];

export const matriz = [
  {
    periodo: 1,
    disciplinas: [
      ['Cosmovisão Bíblico-Cristã', 40],
      ['Fundamentos Filosóficos da Educação', 40],
      ['Fundamentos Históricos da Educação', 60],
      ['Introdução ao Conhecimento Científico', 60],
      ['Língua Portuguesa e Produção Textual I', 40],
      ['Projeto Integrador I', 40],
      ['Psicologia do Desenvolvimento', 60],
      ['Vivências Integradoras I', 40],
    ],
  },
  {
    periodo: 2,
    disciplinas: [
      ['Fundamentos Sociológicos da Educação', 40],
      ['Antropologia Cristã', 40],
      ['Habilidades e Competências Pedagógicas I', 40],
      ['Língua Portuguesa e Produção Textual II', 40],
      ['Organização e Estrutura da Educação Básica', 60],
      ['Projeto Integrador II', 40],
      ['Psicologia da Aprendizagem', 60],
      ['Tecnologia da Informação e Comunicação no Ensino', 40],
      ['Vivências Integradoras II', 60],
    ],
  },
  {
    periodo: 3,
    disciplinas: [
      ['Alfabetização e Letramento', 60],
      ['Avaliação Educacional', 60],
      ['Currículos: Concepção e Construção', 60],
      ['Didática', 60],
      ['Educação e Diversidade Sociocultural', 40],
      ['Fundamentos do Cristianismo', 40],
      ['Habilidades e Competências Pedagógicas II', 20],
      ['Neurociências e Aprendizagem', 40],
      ['Projeto Integrador III', 40],
      ['Vivências Integradoras III', 40],
    ],
  },
  {
    periodo: 4,
    disciplinas: [
      ['Construção de Jogos Educativos', 40],
      ['Fundamentos Teórico-Metodológicos da Educação Infantil', 60],
      ['Interpretação Bíblica da História', 40],
      ['Linguagem Oral e Escrita na Educação Infantil', 40],
      ['Literatura Infantil', 40],
      ['Ludicidade e Movimento', 40],
      ['Matemática na Educação Infantil', 60],
      ['Natureza e Sociedade na Educação Infantil', 40],
      ['Projeto Integrador IV', 40],
      ['Vivências Integradoras IV', 40],
    ],
  },
  {
    periodo: 5,
    disciplinas: [
      ['Direitos Humanos e Aspectos Étnico-Raciais', 40],
      ['Estágio Supervisionado I (Educação Infantil)', 100],
      ['Metodologia de Matemática nos Anos Iniciais', 60],
      ['Metodologia de Geografia nos Anos Iniciais', 40],
      ['Metodologia de História nos Anos Iniciais', 40],
      ['Metodologia de Língua Portuguesa nos Anos Iniciais', 40],
      ['Metodologia de Ciências nos Anos Iniciais', 60],
      ['Pesquisa e Produção do Conhecimento', 60],
      ['Religião, Família e Sociedade', 40],
      ['Vivências Integradoras V', 40],
    ],
  },
  {
    periodo: 6,
    disciplinas: [
      ['Educação de Jovens e Adultos', 40],
      ['Educação do Campo', 40],
      ['Educação Inclusiva', 60],
      ['Estágio Supervisionado II (Ensino Fundamental)', 100],
      ['Estatística Aplicada à Educação', 40],
      ['Metodologia de Arte nos Anos Iniciais', 60],
      ['Metodologia do Ensino Religioso nos Anos Iniciais', 40],
      ['Princípios de Saúde e Sustentabilidade', 40],
      ['Vivências Integradoras VI', 40],
    ],
  },
  {
    periodo: 7,
    disciplinas: [
      ['Educação a Distância', 40],
      ['Elaboração de Projeto de Pesquisa', 40],
      ['Estágio Supervisionado III (Gestão Escolar)', 100],
      ['Ética Cristã', 40],
      ['Fundamentos Teórico-Metodológicos em Libras', 60],
      ['Gestão Educacional', 40],
      ['Música e Educação', 40],
      ['Políticas Educacionais', 36],
      ['Projeto Educacional', 72],
      ['Vivências Integradoras VII', 40],
    ],
  },
  {
    periodo: 8,
    disciplinas: [
      ['Coordenação Pedagógica', 60],
      ['Educação em Ambientes não Escolares', 40],
      ['Estágio Supervisionado IV (Educação Especial)', 100],
      ['Gestão Financeira na Escola', 40],
      ['Orientação Educacional', 60],
      ['Trabalho de Conclusão de Curso', 80],
      ['Vivências Integradoras VIII', 60],
      ['Voluntariado e Transformação Social', 40],
    ],
  },
];
