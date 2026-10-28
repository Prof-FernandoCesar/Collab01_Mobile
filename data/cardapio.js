
const frutas = [
  {
    nome: 'Maçã',
    imagem: require('../assets/images/maca.jpg'),
    descricao: 'Maçã fresca.',
  },
  {
    nome: 'Melão',
    imagem: require('../assets/images/melao.jpg'),
    descricao: 'Melão fresco.',
  },
  {
    nome: 'Melancia',
    imagem: require('../assets/images/melancia.jpg'),
    descricao: 'Melancia fresca.',
  },
  {
    nome: 'Manga',
    imagem: require('../assets/images/manga.jpg'),
    descricao: 'Manga fresca.',
  },
];

const almoco = [
  {
    nome: 'Arroz',
    imagem: require('../assets/images/arroz.jpg'),
    descricao: 'Porção de arroz.',
  },
  {
    nome: 'Feijão',
    imagem: require('../assets/images/feijao.jpg'),
    descricao: 'Feijão preparado para a refeição.',
  },
  {
    nome: 'Salada fresca',
    imagem: require('../assets/images/salada.jpg'),
    descricao: 'Mix de verduras e legumes.',
  },
  {
    nome: 'Banana frita',
    imagem: require('../assets/images/Banana.jpg'),
    descricao: 'Banana preparada e frita.',
  },
  {
    nome: 'Legumes cozidos',
    imagem: require('../assets/images/legumes.jpg'),
    descricao: 'Seleção de legumes.',
  },
  {
    nome: 'Omelete',
    imagem: require('../assets/images/omelete.jpg'),
    descricao: 'Omelete vegetariana.',
  },
  ...frutas,
];

const cafe = [
  {
    nome: 'Pão',
    imagem: require('../assets/images/pao_novo.jpg'),
    descricao: 'Pão para o café da manhã.',
  },
  {
    nome: 'Queijo',
    imagem: require('../assets/images/queijos.jpg'),
    descricao: 'Porção de queijo.',
  },
  {
    nome: 'Iogurte',
    imagem: require('../assets/images/iorgute.jpg'),
    descricao: 'Iogurte servido em jarras.',
  },
  {
    nome: 'Cereais',
    imagem: require('../assets/images/cereais.jpg'),
    descricao: 'Cereais para o café da manhã.',
  },
  {
    nome: 'Panquecas',
    imagem: require('../assets/images/panquecas.jpg'),
    descricao: 'Panquecas para o café da manhã.',
  },
  {
    nome: 'Sucos variados',
    imagem: require('../assets/images/sucos.jpg'),
    descricao: 'Opções de sucos.',
  },
  ...frutas,
];

const jantarPadrao = [
  {
    nome: 'Yakisoba de legumes',
    imagem: require('../assets/images/yakisoba.jpg'),
    descricao: 'Macarrão preparado com legumes.',
  },
  {
    nome: 'Pastel de queijo',
    imagem: require('../assets/images/pastel.jpg'),
    descricao: 'Pastel com recheio de queijo.',
  },
  {
    nome: 'Bolinhos fritos',
    imagem: require('../assets/images/bolinhos.jpg'),
    descricao: 'Porções de bolinhos fritos.',
  },
  {
    nome: 'Bolo',
    imagem: require('../assets/images/bolo.jpg'),
    descricao: 'Fatia de bolo.',
  },
  {
    nome: 'Sucos variados',
    imagem: require('../assets/images/sucos.jpg'),
    descricao: 'Opções de sucos.',
  },
  ...frutas,
];

const pizza = [
  {
    nome: 'Pizza de queijo',
    imagem: require('../assets/images/pizza.jpg'),
    descricao: 'Pizza com cobertura de queijo.',
  },
  {
    nome: 'Sucos variados',
    imagem: require('../assets/images/sucos.jpg'),
    descricao: 'Opções de sucos.',
  },
  ...frutas,
];

const acai = [
  {
    nome: 'Açaí',
    imagem: require('../assets/images/acai.jpg'),
    descricao: 'Açaí servido no estilo paraense.',
  },
  {
    nome: 'Farinha',
    imagem: require('../assets/images/farinha.jpg'),
    descricao: 'Farinha para acompanhar o açaí.',
  },
  {
    nome: 'Tapioca',
    imagem: require('../assets/images/tapioca.jpg'),
    descricao: 'Tapioca para acompanhar a refeição.',
  },
];

export const horarios = {
  cafe: '7h às 8h',
  almoco: '11h30 às 13h',
  jantar: '17h30 às 19h15',
};

export const cardapio = {
  segunda: {
    cafe,
    almoco,
    jantar: jantarPadrao,
  },
  terca: {
    cafe,
    almoco,
    jantar: jantarPadrao,
  },
  quarta: {
    cafe,
    almoco,
    jantar: pizza,
  },
  quinta: {
    cafe,
    almoco,
    jantar: jantarPadrao,
  },
  sexta: {
    cafe,
    almoco,
    jantar: jantarPadrao,
  },
  sabado: {
    cafe,
    almoco: [...almoco, ...acai],
    jantar: jantarPadrao,
  },
  domingo: {
    cafe,
    almoco,
    jantar: jantarPadrao,
  },
};
